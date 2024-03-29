from django.db import models
from django.core.mail import EmailMessage
from django.utils.translation import gettext_lazy as _
from multiselectfield import MultiSelectField
from smtplib import SMTPException
from django.conf import settings

MEDIA_URL = settings.MEDIA_URL.lstrip("/")


class Email(models.Model):
    """Emails sent by users via the "Contact Us" page."""

    class Status(models.TextChoices):
        SENT = "SENT", _("Sent")
        ERROR = "ERROR", _("Error")
        PENDING = "PENDING", _("Pending")

    sender = models.CharField(max_length=128)
    recipient = models.CharField(max_length=128)
    subject = models.CharField(max_length=256)
    message = models.CharField(max_length=4096)
    status = models.CharField(
        max_length=8, choices=Status.choices, default=Status.PENDING
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def send(self) -> int:
        """
        Sends an email, if it hasn't been sent before.
        Returns the number of emails sent successfully.
        """
        if self.status == "SENT":
            return 0

        return self.send_force()

    def send_force(self) -> int:
        """
        Sends an email, even if it has been sent before.
        Returns the number of emails it has sent successfully.
        """
        email = EmailMessage(
            self.subject,
            self.message,
            self.sender,
            [self.recipient],
            reply_to=[self.sender],
        )
        try:
            emails_sent = email.send(fail_silently=False)
        except (SMTPException, ConnectionRefusedError) as err:
            self.status = "ERROR"
            self.save()
            raise err

        if emails_sent > 0:
            self.status = "SENT"
            self.save()

        return emails_sent

    def __str__(self):
        return f"ID: {self.pk}, From: {self.sender}, To: {self.recipient}"


class Image(models.Model):
    """Images uploaded to the Django backend."""

    class Tags:
        tags = (
            ("AT-480", "At 480"),
            ("ABOUT", "About"),
            ("ACCOMMODATION", "Accommodation"),
            ("MISC", "Misc"),
            ("OCEAN", "Ocean"),
            ("OTHER", "Other"),
        )

    name = models.CharField(max_length=128)
    alt = models.CharField(max_length=128)
    description = models.CharField(max_length=2048)
    image = models.ImageField(upload_to=MEDIA_URL)
    tags = MultiSelectField(choices=Tags.tags)
    priority = models.IntegerField(default=10)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"ID: {self.pk}, Name: {self.name}"


class FeatureItem(models.Model):
    """Items that can be featured as a card item."""

    class Tags:
        tags = (
            ("RESTAURANTS", "Restaurants"),
            ("MISC", "Misc"),
        )

    name = models.CharField(max_length=256)
    subtitle = models.CharField(max_length=256)
    description = models.CharField(max_length=4096)
    website = models.CharField(max_length=128)
    tags = MultiSelectField(choices=Tags.tags)
    image = models.ImageField(upload_to=MEDIA_URL)
    alt = models.CharField(max_length=128)
    priority = models.IntegerField(default=10)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"ID: {self.pk}, Title: {self.name}"
