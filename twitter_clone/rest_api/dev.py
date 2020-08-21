from django.contrib.auth import get_user_model
from rest_framework import authentication

User = get_user_model()

class DevAuthentication(authentication.BasicAuthentication):

    def authenticate(self, request):
        user = User.objects.filter(id=1).first()
        return (user, None)
