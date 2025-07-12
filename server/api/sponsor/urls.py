from django.urls import path
from . import views

urlpatterns = [
    path('', views.SponsorListView.as_view()),
]
