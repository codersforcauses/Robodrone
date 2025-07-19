from rest_framework import serializers
from .models import Match, Team


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = "__all__"
        read_only_field = "team_id"


class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = "__all__"
        read_only_field = "match_id"


class GroupSerializer(serializers.Serializer):
    team = serializers.CharField(max_length=255)
    total_points = serializers.IntegerField()
