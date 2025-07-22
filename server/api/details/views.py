from collections import defaultdict
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from api.match.models import MatchResult, Match
from .serializers import MatchResultSerializer


class MatchResultsByGroup(APIView):
    def get(self, request, groupid):
        queryset = MatchResult.objects.filter(match__group_id=groupid)
        serializer = MatchResultSerializer(queryset, many=True)

        grouped_data = defaultdict(list)
        for item in serializer.data:
            grouped_data[item['match_id']].append(item)

        return Response(list(grouped_data.values()))


class MatchResultsByStage(APIView):
    def get(self, request, stageid):
        if stageid == 0:
            return Response("This route is not for group stage, use group_stage/<int:groupid>/ instead")

        group_id = request.GET.get("group_id")

        queryset = MatchResult.objects.filter(match__stage_id=stageid)

        if group_id:
            queryset = queryset.filter(match__group_id=group_id)

        serializer = MatchResultSerializer(queryset, many=True)

        grouped_data = defaultdict(list)
        for item in serializer.data:
            grouped_data[item['match_id']].append(item)

        return Response(list(grouped_data.values()))


def get_groups(request):
    group_ids = sorted(
        list(Match.objects.values_list('group_id', flat=True).distinct()))
    return JsonResponse(group_ids, safe=False)


def get_stages(request):
    stage_ids = sorted(
        list(Match.objects.values_list('stage_id', flat=True).distinct()))
    return JsonResponse(stage_ids, safe=False)


class GroupLeaderboard(APIView):
    def get(self, request, groupid):
        queryset = MatchResult.objects.filter(match__group_id=groupid)
        serializer = MatchResultSerializer(queryset, many=True)

        # Group and aggregate by team_name
        team_summary = defaultdict(lambda: {
            "team_name": "",
            "honor_point": 0,
            "point": 0,
            "completed_time_second": 0,
            "entries": 0,
            "group": groupid,
        })

        for item in serializer.data:
            team = team_summary[item["team_name"]]
            team["team_name"] = item["team_name"]
            team["honor_point"] += item["honor_point"] or 0
            team["point"] += item["point"] or 0
            team["completed_time_second"] += item["completed_time_second"] or 0
            team["entries"] += 1

        # Use accumulated mission time (not average)
        teams = list(team_summary.values())

        # Sort by: regular points desc, then honor point desc, then mission time asc
        teams_sorted = sorted(
            teams,
            key=lambda x: (
                -x["honor_point"],
                -x["point"],
                x["completed_time_second"]
            )
        )

        # Assign rank + qualification
        for i, team in enumerate(teams_sorted):
            team["group_rank"] = i + 1
            team["qualified"] = team["group_rank"] == 1

        return Response(teams_sorted)
