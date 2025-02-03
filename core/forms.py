from django import forms
from .models import FormData

class FormDataForm(forms.ModelForm):
    servicos = forms.MultipleChoiceField(
        choices=[
            ('hospedagem', 'Hospedagem de sites'),
            ('criacao', 'Criação de sites profissionais'),
            ('sistemas', 'Sistemas digitais'),
            ('dominio', 'Compra de Domínio'),
        ],
        widget=forms.CheckboxSelectMultiple,
        required=True,
    )
    
    class Meta:
        model = FormData
        fields = ['nome', 'sobrenome', 'email', 'telefone', 'cidade', 'servicos']
