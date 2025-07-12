from rest_framework.generics import ListAPIView
from .models import Sponsor
from .serializers import SponsorSerializer


class SponsorListView(ListAPIView):
    queryset = Sponsor.objects.all()
    serializer_class = SponsorSerializer
