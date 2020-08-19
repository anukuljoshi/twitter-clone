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
    class Meta:
        model = Profile
        fields = '__all__'
        # fields = [
        #     'id',
        #     'user',
        #     'date_of_birth',
        #     'bio',
        #     'user',
        #     'following'
        # ]

    def get_id(self, obj):
        return obj.user.id