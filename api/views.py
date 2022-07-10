from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import Email
from api.serializers import EmailSerializer


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
