from django.urls import path
from .views import *


urlpatterns = [
    path('', home, name='home'),
    path('formulario/',form_view, name='formulario')
    
]