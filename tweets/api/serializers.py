from rest_framework import serializers

from tweets.models import Tweet
from accounts.api.serializers import UserSerializer

class TweetSerializer(serializers.ModelSerializer):
    author = UserSerializer()
    class Meta:
        model = Tweet
        fields = '__all__'

class TweetCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = [
            'content'
        ]