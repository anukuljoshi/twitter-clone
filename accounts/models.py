from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save

User = get_user_model()


class Follow(models.Model):
    user_profile = models.ForeignKey('Profile', on_delete=models.CASCADE, related_name='profile')
    followed_by = models.ForeignKey('Profile', on_delete=models.CASCADE, related_name='follower_user')
    timestamp = models.DateTimeField(auto_now_add=True)

    # def __str__(self):
    #     return super().__str__()


class Profile(models.Model):
    SEX = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    bio = models.CharField(max_length=128, default='', blank=True)
    date_of_birth = models.DateField(blank=True, null=True)
    sex = models.CharField(max_length=1, choices=SEX, blank=True, null=True)
    followers = models.ManyToManyField(
        'Profile', 
        related_name='following', 
        blank=True, 
        through=Follow,
    )
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.username} profile'


def create_profile(sender, instance, created, *args, **kwargs):
    user = instance
    if(created):
        profile = Profile(user=user)
        profile.save()


post_save.connect(create_profile, sender=User)
