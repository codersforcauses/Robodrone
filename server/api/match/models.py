from django.db import models


class Match(models.Model):
    match_id = models.AutoField(primary_key=True)
    match_name = models.CharField(max_length=255)
    match_date = models.DateTimeField()
    group_id = models.IntegerField()
    stage_id = models.IntegerField()

    def __str__(self):
        return self.match_name


class Team(models.Model):
    team_id = models.AutoField(primary_key=True)
    team_name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.team_name


class MatchResult(models.Model):
    match_result_id = models.AutoField(primary_key=True)
    match = models.ForeignKey(Match, on_delete=models.CASCADE)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)

    white_pins = models.IntegerField(null=True, blank=True)
    penalty_pins = models.IntegerField(null=True, blank=True)
    yellow_cards = models.IntegerField(null=True, blank=True)
    red_cards = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    p1_position = models.IntegerField(null=True, blank=True)
    p2_position = models.IntegerField(null=True, blank=True)
    honor_point = models.IntegerField(null=True, blank=True)
    point = models.IntegerField(null=True, blank=True)
    completed_time_second = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return f"{self.team} in {self.match}"
