from django.urls import path
from .views import IndexView

app_name = "frontend"

urlpatterns = [
    path("", IndexView.as_view(), name="index"),
    path("accommodation/", IndexView.as_view(), name="accommodation"),
    path("location/", IndexView.as_view(), name="location"),
    path("activities/", IndexView.as_view(), name="activities"),
    path("book/", IndexView.as_view(), name="book"),
    path("contact/", IndexView.as_view(), name="contact"),
    path("about/", IndexView.as_view(), name="about"),
    path("terms/", IndexView.as_view(), name="terms"),
    path("privacy/", IndexView.as_view(), name="privacy"),
    path("faq/", IndexView.as_view(), name="faq"),
]
