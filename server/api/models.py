# server/api/models.py

from django.db import models


class Match(models.Model):
    match_name = models.CharField(max_length=255)
    match_date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.match_name


class MatchResult(models.Model):
    match = models.ForeignKey("Match", on_delete=models.CASCADE)
    team = models.ForeignKey("Team", on_delete=models.CASCADE)

    honor_points = models.IntegerField()
    white_pins = models.IntegerField()
    penalty_pins = models.IntegerField()
    yellow_cards = models.IntegerField()
    red_cards = models.IntegerField()
    mission_time_seconds = models.IntegerField()
    regular_points = models.IntegerField()
    final_rank = models.IntegerField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.match} - {self.team}"
