from django.test import TestCase
from django.urls import reverse, resolve
from api.views import MainApiTestView


class TestApiUrls(TestCase):
    def setUp(self) -> None:
        return

    def test_main_url_is_resolved(self) -> None:
        resolver = resolve(reverse("api:api_test"))
        self.assertEqual(resolver.func.view_class, MainApiTestView)

    def tearDown(self) -> None:
        return
