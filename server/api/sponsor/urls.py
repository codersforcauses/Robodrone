from django.urls import path
from api.sponsor.views import SponsorListView, GuestListView 

  
urlpatterns = [
    path('', SponsorListView.as_view(), name='sponsor-list'),
    path('guests/', GuestListView.as_view(), name='guest-list'),
]
