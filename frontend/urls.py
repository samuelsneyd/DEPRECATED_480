from django.urls import path
from .views import IndexView

urlpatterns = [
    path("", IndexView.as_view(), name="index"),
    path("accommodation/", IndexView.as_view(), name="accommodation"),
    path("location/", IndexView.as_view(), name="location"),
    path("activities/", IndexView.as_view(), name="activities"),
    path("book/", IndexView.as_view(), name="book"),
    path("contact/", IndexView.as_view(), name="contact"),
    path("terms/", IndexView.as_view(), name="terms"),
    path("privacy/", IndexView.as_view(), name="privacy"),
]
