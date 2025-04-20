from django.shortcuts import render, redirect
from .forms import FormDataForm
from django.http import HttpResponse
from .models import FormData
from django.core.mail import send_mail


def home(request):
    return render(request, 'home.html')


def form_view(request):
    if request.method == "POST":
        nome = request.POST.get("nome")
        sobrenome = request.POST.get("sobrenome")
        email = request.POST.get("email")
        telefone = request.POST.get("telefone")
        cidade = request.POST.get("cidade")
        servicos_ids = request.POST.getlist("servicos")

        servicos_str = ",".join(servicos_ids)

        if FormData.objects.filter(email=email).exists() or FormData.objects.filter(telefone=telefone).exists():
            return render(request, "home.html", {
                "message": "Email ou telefone já cadastrado. Tente novamente com outro email ou telefone."
            })

        form_data = FormData.objects.create(
            nome=nome,
            sobrenome=sobrenome,
            email=email,
            telefone=telefone,
            cidade=cidade,
            servicos=servicos_str
        )

       
        assunto = "Novo contato recebido pelo formulário"
        mensagem = (
            f"Novo contato recebido:\n\n"
            f"Nome: {nome} {sobrenome}\n"
            f"E-mail: {email}\n"
            f"Telefone: {telefone}\n"
            f"Cidade: {cidade}\n"
            f"Serviços selecionados: {servicos_str}\n"
        )
        destinatario = ["luisxmarques08@gmail.com"]  

        send_mail(
            assunto,
            mensagem,
            "luisxmarques08@gmail.com",  
            destinatario,
            fail_silently=False,
        )

        return render(request, "home.html", {
            "message": "Obrigado pelo seu contato! Nossa equipe entrará em contato com você em breve para fornecer todo o suporte necessário."
        })

    return render(request, "home.html")





