from django.urls import path
from .views import (
    MatchResultsByGroup,
    MatchResultsByStage,
    get_groups,
    get_stages,
    GroupLeaderboard,
)

urlpatterns = [
    path('group_stage/<int:groupid>/', MatchResultsByGroup.as_view(),
         name='match-results-by-group'),
    path('knockout_stage/<int:stageid>/',
         MatchResultsByStage.as_view(), name='match-results-by-stage'),
    path('groups/', get_groups, name='get-groups'),
    path('stages/', get_stages, name='get-stages'),
    path('group_leaderboard/<int:groupid>/',
         GroupLeaderboard.as_view(), name='group-leaderboard'),
]
