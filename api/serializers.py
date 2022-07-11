from rest_framework import serializers
from api.models import Email, Image


class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = "__all__"


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = "__all__"
