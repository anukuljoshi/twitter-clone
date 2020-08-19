from django.contrib import admin

from .models import Profile, Follow
# from .models import Profile


class FollowInline(admin.TabularInline):
    model = Follow
    fk_name = 'user_profile'


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    # search_fields = ['user__username__startswith']
    # fields = [
    #     'user',
    #     'bio',
    #     'date_of_birth',
    #     'sex',
    #     # 'following'
    # ]
    inlines = [
        FollowInline
    ]