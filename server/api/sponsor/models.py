# server/api/models.py
# Defines the Match model for storing competition data.

from django.db import models


class Sponsor(models.Model):
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='sponsors/logos/')  # Field for sponsor logo
    link = models.URLField(blank=True)

    def __str__(self):
        return self.name
        
class Guest(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    link = models.URLField(blank=True)
    photo = models.ImageField(upload_to='guests/photos/', blank=True)

    def __str__(self):
        return self.name
