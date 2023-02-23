from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import Usuario

class  UserCreateForm(UserCreationForm):
    username = forms.CharField(max_length=50, required=True)
    intereses = forms.CharField(max_length=255, required=True)

    class Meta:
        model = Usuario
        fields = ('username', 'intereses')

