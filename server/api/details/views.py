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

        queryset = MatchResult.objects.filter(match__stage_id=stageid)
        serializer = MatchResultSerializer(queryset, many=True)

        grouped_data = defaultdict(list)
        for item in serializer.data:
            grouped_data[item['match_id']].append(item)

        return Response(list(grouped_data.values()))


def get_groups(request):
    group_ids = sorted(list(Match.objects.values_list('group_id', flat=True).distinct()))
    return JsonResponse(group_ids, safe=False)


def get_stages(request):
    stage_ids = sorted(list(Match.objects.values_list('stage_id', flat=True).distinct()))
    return JsonResponse(stage_ids, safe=False)
