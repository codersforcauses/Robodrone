# server/api/models.py
# Defines the Match model for storing competition data.

from django.db import models


class Match(models.Model):
    match_id = models.AutoField(primary_key=True)
    match_name = models.CharField(max_length=255)
    match_date = models.DateTimeField()
    group_id = models.IntegerField()
    stage_id = models.IntegerField()

    def __str__(self):
        return f"{self.match_name} ({self.match_date.strftime('%Y-%m-%d')})"
