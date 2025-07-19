from rest_framework import viewsets, permissions
from .models import Match, Team, MatchResult
from django.db.models import Sum
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
        return MatchResult.objects.values("team").annotate(total_points=Sum('point'))
