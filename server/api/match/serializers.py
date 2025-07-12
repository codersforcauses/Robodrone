from rest_framework import serializers
from .models import Match, Team, MatchResult


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


class MatchResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatchResult
        fields = "__all__"
        read_only_field = "match_result_id"
