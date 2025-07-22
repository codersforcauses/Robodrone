from django.db import models


class Match(models.Model):
    match_id = models.AutoField(primary_key=True)
    match_name = models.CharField(max_length=255)
    match_date = models.DateTimeField()
    group_id = models.IntegerField()
    stage_id = models.IntegerField()

    def __str__(self):
        return self.match_name

    class Meta:
        verbose_name_plural = "matches"


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
    honor_point = models.IntegerField(null=True, blank=True, editable=False)
    point = models.IntegerField(null=True, blank=True, editable=False)
    completed_time_second = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return f"{self.team} in {self.match}"

    def save(self, *args, **kwargs):
        # Default to 0 if any field is None
        wp = self.white_pins or 0
        pp = self.penalty_pins or 0
        yc = self.yellow_cards or 0
        rc = self.red_cards or 0

        self.point = wp * 2 + pp * -3 + yc * -3 + rc * -10
        self.honor_point = self._get_honor_point(
            self.p1_position, self.p2_position)
        super().save(*args, **kwargs)

    def _get_honor_point(self, p1_position, p2_position):
        if not p1_position or p1_position != 1:
            return 0
        return 1 + (4 - (p2_position or 0))
