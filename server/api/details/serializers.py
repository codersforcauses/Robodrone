# details/serializers.py

from rest_framework import serializers
from api.match.models import MatchResult


class MatchResultSerializer(serializers.ModelSerializer):
    team_name = serializers.CharField(source='team.team_name')
    match_id = serializers.IntegerField(source='match.match_id')
    match_name = serializers.CharField(source='match.match_name')
    group = serializers.IntegerField(source='match.group_id')
    stage = serializers.IntegerField(source='match.stage_id')

    class Meta:
        model = MatchResult
        fields = [
            'match_id',
            'match_name',
            'group',
            'stage',
            'team_name',
            'white_pins',
            'penalty_pins',
            'yellow_cards',
            'red_cards',
            'p1_position',
            'p2_position',
            'honor_point',
            'point',
            'completed_time_second',
        ]
