from django.urls import path
from api.views import MainApiTestView, EmailView, ImageView

app_name = "api"

urlpatterns = [
    path("email", EmailView.as_view(), name="email"),
    path("image/<int:image_id>", ImageView.as_view(), name="image"),
    path("", MainApiTestView.as_view(), name="api_test"),
]
