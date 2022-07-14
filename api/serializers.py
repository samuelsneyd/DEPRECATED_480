from rest_framework import serializers
from api import models


class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Email
        fields = "__all__"


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Image
        fields = "__all__"


class FeatureItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.FeatureItem
        fields = "__all__"
