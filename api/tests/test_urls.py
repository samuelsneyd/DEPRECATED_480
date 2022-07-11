from django.test import TestCase
from django.urls import reverse, resolve
from api.views import MainApiTestView, EmailView, ImageView, ImagesView


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

    def tearDown(self):
        return
