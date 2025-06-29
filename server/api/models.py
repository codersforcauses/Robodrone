# server/api/models.py

from django.db import models


class Match(models.Model):
    match_name = models.CharField(max_length=255)
    match_date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.match_name
