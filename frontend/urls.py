from django.urls import path
from . import views

urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
    path("/", views.IndexView.as_view(), name="index"),
    path("terms/", views.IndexView.as_view(), name="terms"),
    path("privacy/", views.IndexView.as_view(), name="privacy"),
]
