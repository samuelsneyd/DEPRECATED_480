from django.test import TestCase
from django.urls import reverse, resolve
from api.views import MainApiTestView, EmailView


class TestApiUrls(TestCase):
    def setUp(self):
        return

    def test_main_url_is_resolved(self):
        resolver = resolve(reverse("api:api_test"))
        self.assertEqual(resolver.func.view_class, MainApiTestView)

    def test_email_url_is_resolved(self):
        resolver = resolve(reverse("api:email"))
        self.assertEqual(resolver.func.view_class, EmailView)

    def tearDown(self):
        return
