from django.contrib import admin
from .models import Sponsor, Guest


@admin.register(Sponsor)
class SponsorAdmin(admin.ModelAdmin):
    list_display = ('name', 'link')
    search_fields = ('name',)


@admin.register(Guest)
class GuestAdmin(admin.ModelAdmin):
    list_display = ('name', 'link')
    search_fields = ('name',)
