from django.test import TestCase
from api import util


class TestApiUrls(TestCase):
    def setUp(self):
        return

    def test_snake_case_dict_returns_snake_case(self):
        camel_dict = {"keyOne": True, "keyTwo": True}
        expected = {"key_one": True, "key_two": True}
        snake_dict = util.snake_case_dict(camel_dict)

        for a, b in zip(snake_dict.items(), expected.items()):
            for aa, bb in zip(a, b):
                self.assertEqual(aa, bb)

    def test_snake_case_dict_skips_non_strings(self):
        camel_dict = {0: True, "keyTwo": True}
        expected = {0: True, "key_two": True}
        snake_dict = util.snake_case_dict(camel_dict)

        for a, b in zip(snake_dict.items(), expected.items()):
            for aa, bb in zip(a, b):
                self.assertEqual(aa, bb)

    def snake_case_dict_empty_dict(self):
        input_dict = {}
        snake_dict = util.snake_case_dict(input_dict)
        self.assertEqual(type(snake_dict), dict)

    def snake_case_dict_raises_value_error(self):
        try:
            util.snake_case_dict("not a dict")
            self.assertEqual(True, False)
        except ValueError:
            pass

    def tearDown(self):
        return
