from rest_framework import viewsets, permissions
from .models import Match, Team, MatchResult
from django.db.models import Sum, F
from .serializers import MatchSerializer, TeamSerializer, GroupSerializer


class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer
    permission_classes = [permissions.IsAuthenticated]


class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        result = MatchResult.objects.values("team", "team__team_name", "match__group_id")\
            .annotate(team_name=F("team__team_name"))\
            .annotate(group=F("match__group_id"))\
            .annotate(total_points=Sum('point'))
        return result
