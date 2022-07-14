from django.urls import path
from api.views import (
    EmailView,
    ImageView,
    ImagesView,
    FeatureItemView,
    FeatureItemsView,
    MainApiTestView,
)

app_name = "api"

urlpatterns = [
    path("email", EmailView.as_view(), name="email"),
    path("image/<int:image_id>", ImageView.as_view(), name="image"),
    path("images", ImagesView.as_view(), name="images"),
    path("feature_item/<int:item_id>", FeatureItemView.as_view(), name="feature_item"),
    path("feature_items", FeatureItemsView.as_view(), name="feature_items"),
    path("", MainApiTestView.as_view(), name="api_test"),
]
