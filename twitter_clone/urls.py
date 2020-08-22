from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('tweets.urls')),
    path('api/tweets/',include('tweets.api.urls')),
    path('',include('accounts.urls')),
    path('api/accounts/',include('accounts.api.urls')),
]
