from django.urls import path
from api.views import MainApiTestView

app_name = "api"

urlpatterns = [
    path("", MainApiTestView.as_view(), name="api_test"),
]
