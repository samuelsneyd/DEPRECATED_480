from django.urls import path
from api.views import MainApiTestView, EmailView

app_name = "api"

urlpatterns = [
    path("email", EmailView.as_view(), name="email"),
    path("", MainApiTestView.as_view(), name="api_test"),
]
