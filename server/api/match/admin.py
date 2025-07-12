from django.contrib import admin  # noqa
from .models import Match

# Register your models here.


@admin.register(Match)
class MatchAdmin(admin.ModelAdmin):
    list_display = ("match_id", "match_name", "match_date")
    list_filter = ("match_date",)
    search_fields = ("match_name",)
    date_hierarchy = "match_date"
    ordering = ("-match_date",)
