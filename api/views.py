from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import Email, Image
from api.serializers import EmailSerializer, ImageSerializer


class MainApiTestView(APIView):
    test_message = {"message": "test"}

    def get(self, request) -> Response:
        return Response(self.test_message, status=status.HTTP_200_OK)


class EmailView(APIView):
    bad_request_message = {"message": "bad request"}

    def post(self, request) -> Response:
        serializer = EmailSerializer(data=request.data)

        if serializer.is_valid():
            email: Email = serializer.save()
            # TODO - config email sending options
            # email.send()

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(self.bad_request_message, status=status.HTTP_400_BAD_REQUEST)


class ImageView(APIView):
    not_found_message = {"message", "image not found"}

    def get(self, request, image_id):
        try:
            image = Image.objects.get(pk=image_id)
            serializer = ImageSerializer(image)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Image.DoesNotExist:
            return Response(self.not_found_message, status.HTTP_404_NOT_FOUND)
