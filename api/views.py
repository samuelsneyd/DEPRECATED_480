from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class MainApiTestView(APIView):
    def get(self, request) -> Response:
        return Response({"message": "test"}, status=status.HTTP_200_OK)
