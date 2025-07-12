from django.urls import path
from . import views

app_name = "leaderboard"
urlpatterns = [
    path("leaderboard/", views.leaderboard, name="leaderboard"),
]
