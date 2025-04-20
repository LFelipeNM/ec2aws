from django.contrib import admin
from .models import FormData

class FormDataAdmin(admin.ModelAdmin):
    list_display = ('nome', 'sobrenome', 'email', 'telefone', 'cidade')
    search_fields = ('nome', 'sobrenome', 'email')
    list_filter = ('cidade',)
    list_per_page = 10

admin.site.register(FormData, FormDataAdmin)
