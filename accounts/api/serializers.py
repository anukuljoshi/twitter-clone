from django.contrib.auth import get_user_model
from rest_framework import serializers

from accounts.models import Profile

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'first_name',
            'last_name'
        ]


class ProfileSerializer(serializers.ModelSerializer):
    id = serializers.SerializerMethodField()
    user = UserSerializer()
    follower_count = serializers.SerializerMethodField()
    following_count = serializers.SerializerMethodField()
    tweet_count = serializers.SerializerMethodField()
    class Meta:
        model = Profile
        fields = '__all__'

    def get_id(self, obj):
        return obj.user.id

    def get_follower_count(self, obj):
        temp = obj.followers.all()
        return temp.count()

    def get_following_count(self, obj):
        temp = obj.following.all()
        return temp.count()

    def get_tweet_count(self, obj):
        user = obj.user
        count = user.user_tweets.all().count()
        return count