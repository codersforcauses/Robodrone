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
    group = serializers.IntegerField()
    team = serializers.IntegerField()
    team_name = serializers.CharField(max_length=64)
    regular_points = serializers.IntegerField()
    honor_points = serializers.IntegerField()
    total_time_seconds = serializers.IntegerField()
