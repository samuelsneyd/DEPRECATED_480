from django.test import TestCase, Client
from api.models import Image, FeatureItem


class TestViews(TestCase):
    def setUp(self):
        Image.objects.create(
            name="name",
            alt="alt text",
            description="description",
            image="staticfiles/images/test_image.jpg",
            tags=["MISC"],
        )
        FeatureItem.objects.create(
            name="name",
            subtitle="subtitle",
            description="description",
            website="https://test.com",
            tags=["RESTAURANT"],
            image="staticfiles/images/test_image.jpg",
            alt="alt text",
        )
        self.client = Client()

    def test_image_view_returns_200_ok(self):
        response = self.client.get("/api/image/1")
        self.assertEqual(response.status_code, 200)

    def test_image_view_returns_404_not_found(self):
        response = self.client.get("/api/image/100")
        self.assertEqual(response.status_code, 404)

    def test_images_view_returns_200_ok(self):
        response = self.client.get("/api/images")
        self.assertEqual(response.status_code, 200)

    def test_feature_item_view_returns_200_ok(self):
        response = self.client.get("/api/feature_item/1")
        self.assertEqual(response.status_code, 200)

    def test_feature_item_view_returns_404_not_found(self):
        response = self.client.get("/api/feature_item/100")
        self.assertEqual(response.status_code, 404)

    def test_feature_items_view_returns_200_ok(self):
        response = self.client.get("/api/feature_items")
        self.assertEqual(response.status_code, 200)

    def tearDown(self):
        Image.objects.all().delete()
