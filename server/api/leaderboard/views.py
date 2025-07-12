from rest_framework.decorators import api_view

from django.http import HttpResponse


leaderboard_data = {
    "honor_point": 1,
    "regular_point": 10,
    "completed_time_second": 100
    # other details needed for FrontEnd
}


# Create your views here.
@api_view(["GET"])
def leaderboard(request):
    return HttpResponse(leaderboard_data, status=200)
