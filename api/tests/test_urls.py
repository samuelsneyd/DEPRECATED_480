from django.test import TestCase
from django.urls import reverse, resolve
from api.views import (
    MainApiTestView,
    EmailView,
    ImageView,
    ImagesView,
    FeatureItemView,
    FeatureItemsView,
)


class TestApiUrls(TestCase):
    def setUp(self):
        return

    def test_main_url_is_resolved(self):
        resolver = resolve(reverse("api:api_test"))
        self.assertEqual(resolver.func.view_class, MainApiTestView)

    def test_email_url_is_resolved(self):
        resolver = resolve(reverse("api:email"))
        self.assertEqual(resolver.func.view_class, EmailView)

    def test_image_url_is_resolved(self):
        resolver = resolve(reverse("api:image", args=["1"]))
        self.assertEqual(resolver.func.view_class, ImageView)

    def test_images_url_is_resolved(self):
        resolver = resolve(reverse("api:images"))
        self.assertEqual(resolver.func.view_class, ImagesView)

    def test_feature_item_url_is_resolved(self):
        resolver = resolve(reverse("api:feature_item", args=["1"]))
        self.assertEqual(resolver.func.view_class, FeatureItemView)

    def test_feature_items_url_is_resolved(self):
        resolver = resolve(reverse("api:feature_items"))
        self.assertEqual(resolver.func.view_class, FeatureItemsView)

    def tearDown(self):
        return
