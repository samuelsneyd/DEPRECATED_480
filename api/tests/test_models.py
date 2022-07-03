from django.test import TestCase
from api.models import Email


class TestModels(TestCase):
    def setUp(self):
        self.email = Email.objects.create(
            sender="sender@test.com",
            recipient="recipient@test.com",
            subject="This is the email subject",
            message="This is the email body",
            status="PENDING",
        )

    def test_send_email(self):
        emails_sent = self.email.send()
        self.assertEqual(emails_sent, 1)

    def test_skip_resend_email(self):
        initial_emails_sent = self.email.send()
        duplicate_emails_sent = self.email.send()
        self.assertEqual(initial_emails_sent, 1)
        self.assertEqual(duplicate_emails_sent, 0)

    def test_resend_email(self):
        initial_emails_sent = self.email.send_force()
        duplicate_emails_sent = self.email.send_force()
        self.assertEqual(initial_emails_sent, 1)
        self.assertEqual(duplicate_emails_sent, 1)

    def test_email_status_update_on_send(self):
        self.assertEqual(self.email.status, "PENDING")
        self.email.send()
        self.assertEqual(self.email.status, "SENT")

    def tearDown(self):
        self.email.delete()
