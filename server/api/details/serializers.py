from rest_framework import serializers
from api.match.models import MatchResult


class MatchResultSerializer(serializers.ModelSerializer):
    match_id = serializers.IntegerField(source='match.match_id')

    class Meta:
        model = MatchResult
        fields = '__all__'
