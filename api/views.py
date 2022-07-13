from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from api.models import Email, Image
from api.serializers import EmailSerializer, ImageSerializer
from api import util


class MainApiTestView(APIView):
    test_message = {"message": "test"}

    def get(self, request) -> Response:
        return Response(self.test_message, status=status.HTTP_200_OK)


class EmailView(APIView):
    """An API View for creating emails"""

    bad_request_message = {"message": "bad request"}
    default_subject = "Inquiry about Retreat 480"

    def post(self, request) -> Response:
        """Creates and sends an email."""

        snake_case_data = util.snake_case_dict(request.data)
        snake_case_data["sender"] = snake_case_data["email"]
        snake_case_data["recipient"] = settings.RECIPIENT_EMAIL or ""
        snake_case_data["subject"] = self.default_subject
        serializer = EmailSerializer(data=snake_case_data)

        if serializer.is_valid():
            email: Email = serializer.save()
            email.send()

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(self.bad_request_message, status=status.HTTP_400_BAD_REQUEST)


class ImageView(APIView):
    """An API view for a single image."""

    not_found_message = {"message", "image not found"}

    def get(self, request, image_id) -> Response:
        """Gets a single image by ID"""

        try:
            image = Image.objects.get(pk=image_id)
            serializer = ImageSerializer(image)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Image.DoesNotExist:
            return Response(self.not_found_message, status.HTTP_404_NOT_FOUND)


class ImagesView(APIView):
    """An API view for multiple images"""

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.images = Image.objects.all().order_by("priority")

    def get(self, request) -> Response:
        """Gets all images, or images that match the keyword arguments."""

        if "tag" in request.GET:
            tag = request.GET.get("tag", "").upper()
            self.images = list(filter(lambda image: tag in image.tags, self.images))

        serializer = ImageSerializer(self.images, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
