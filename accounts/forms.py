from django import forms
from django.contrib.auth import get_user_model

from .models import Profile

User = get_user_model()

class UserCreateForm(forms.ModelForm):
    username = forms.CharField(
                    required=True,
                    widget=forms.TextInput(attrs={
                        'class' : 'input-custom',
                        'placeholder' : ' ',
                        'autocomplete' : 'off'
                    })
                )
    password = forms.CharField(
                    required=True,
                    widget=forms.PasswordInput(attrs={
                        'class' : 'input-custom',
                        'placeholder' : ' ',
                        'autocomplete' : 'off'
                    })
                )
    password2 = forms.CharField(
                    required=True,
                    widget=forms.PasswordInput(attrs={
                        'class' : 'input-custom',
                        'placeholder' : ' ',
                        'autocomplete' : 'off'
                    })
                )
    first_name = forms.CharField(
                    required=True,
                    widget=forms.TextInput(attrs={
                        'class' : 'input-custom',
                        'placeholder' : ' ',
                        'autocomplete' : 'off'
                    })
                )
    last_name = forms.CharField(
                    required=True,
                    widget=forms.TextInput(attrs={
                        'class' : 'input-custom',
                        'placeholder' : ' ',
                        'autocomplete' : 'off'
                    })
                )
    email = forms.CharField(
                    required=True,
                    widget=forms.EmailInput(attrs={
                        'class' : 'input-custom',
                        'placeholder' : ' ',
                        'autocomplete' : 'off'
                    })
                )

    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'password',
            'password2',
            'email',
        ]

# class RegistrationForm(forms.ModelForm):
#     user = UserCreateForm()
#     class Meta:
#         model = Profile
#         fields = [
#             'user',
#             'bio'
#         ]
    

class LoginForm(forms.Form):
    username = forms.CharField(
                    required=True,
                    widget=forms.TextInput(attrs={
                        'class' : 'input-custom',
                        'placeholder' : ' ',
                        'autocomplete' : 'off'
                    })
                )
    password = forms.CharField(
                    required=True,
                    widget=forms.PasswordInput(attrs={
                        'class' : 'input-custom',
                        'placeholder' : ' ',
                        'autocomplete' : 'off'
                    })
                )
    fields = [
        'username',
        'password'
    ]
