# server/api/admin.py

from django.contrib import admin
from .models import Match, Team, MatchResult


@admin.register(Match)
class MatchAdmin(admin.ModelAdmin):
    list_display = ('match_name', 'match_date', 'group_id', 'stage_id')
    search_fields = ('match_name',)
    list_filter = ('group_id', 'stage_id')


@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('team_name', 'created_at')
    search_fields = ('team_name',)
    list_filter = ('created_at',)


@admin.register(MatchResult)
class MatchResultAdmin(admin.ModelAdmin):
    list_display = (
        'match', 'team', 'white_pins', 'penalty_pins', 'yellow_cards', 'red_cards',
        'honor_point', 'point', 'completed_time_second'
    )
    list_filter = ('match', 'team')
    search_fields = ('match__match_name', 'team__team_name')
