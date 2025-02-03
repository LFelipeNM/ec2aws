from django.db import models
from django.core.validators import RegexValidator

class FormData(models.Model):
    nome = models.CharField(max_length=100)
    sobrenome = models.CharField(max_length=100)
    email = models.EmailField()

    telefone_validator = RegexValidator(
        regex=r'^\d{2}\d{9}$',
        message="O número de telefone deve ter o formato DDD + número (sem espaços ou caracteres especiais)."
    )
    telefone = models.CharField(max_length=15, validators=[telefone_validator])
    cidade = models.CharField(max_length=100)

    # Serviços armazenados como uma string separada por vírgula
    servicos = models.CharField(max_length=500, help_text="Lista de serviços separados por vírgula")

    # Campo para armazenar a data e hora do envio do formulário
    data_envio = models.DateTimeField(auto_now_add=True)

    def __str__(self):  
        return f'{self.nome} {self.sobrenome}'

