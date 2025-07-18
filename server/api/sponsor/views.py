from rest_framework.generics import ListAPIView
from .models import Sponsor, Guest
from .serializers import GuestSerializer, SponsorSerializer


class SponsorListView(ListAPIView):
    queryset = Sponsor.objects.all()
    serializer_class = SponsorSerializer


class GuestListView(ListAPIView):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer
