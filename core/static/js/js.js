document.addEventListener("DOMContentLoaded", function () {
    const cidadeInput = document.getElementById("cidade");
    const listaCidades = document.getElementById("lista-cidades");

    async function buscarCidades() {
        try {
            const resposta = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/municipios");
            const cidades = await resposta.json();
            return cidades.map(cidade => cidade.nome);
        } catch (error) {
            console.error("Erro ao buscar cidades:", error);
            return [];
        }
    }

    async function configurarAutocomplete() {
        const cidades = await buscarCidades();

        cidadeInput.addEventListener("input", function () {
            const termo = cidadeInput.value.toLowerCase();
            listaCidades.innerHTML = "";

            if (termo.length < 2) {
                listaCidades.style.display = "none";
                return;
            }

            const cidadesFiltradas = cidades.filter(cidade => cidade.toLowerCase().includes(termo)).slice(0, 10);

            cidadesFiltradas.forEach(cidade => {
                const div = document.createElement("div");
                div.textContent = cidade;
                div.addEventListener("click", function () {
                    cidadeInput.value = cidade;
                    listaCidades.innerHTML = "";
                    listaCidades.style.display = "none";
                });
                listaCidades.appendChild(div);
            });

            listaCidades.style.display = cidadesFiltradas.length ? "block" : "none";
        });

        document.addEventListener("click", function (e) {
            if (!cidadeInput.contains(e.target) && !listaCidades.contains(e.target)) {
                listaCidades.style.display = "none";
            }
        });
    }

    configurarAutocomplete();
});

document.addEventListener('DOMContentLoaded', () => {
    const fadeIns = document.querySelectorAll('.fade-in');

    function handleScroll() {
        fadeIns.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 50 && rect.bottom > 0;

            if (isVisible) {
                element.classList.add('appear');
            } else {
                element.classList.remove('appear'); 
            }
        });
    }

    
    window.addEventListener('scroll', handleScroll);

    
    handleScroll();
});

window.onload = function() {
    const bolhasContainer = document.querySelector('.bolhas');

    for (let i = 0; i < 50; i++) {
        let bolha = document.createElement('div');
        bolha.classList.add('bolha');

        const size = Math.random() * (60 - 30) + 30;
        bolha.style.width = `${size}px`;
        bolha.style.height = `${size}px`;

        const randomLeft = Math.random() * 100;
        bolha.style.left = `${randomLeft}vw`;

        bolhasContainer.appendChild(bolha);

        const randomDuration = Math.random() * (15 - 10) + 10;
        const randomDelay = Math.random() * (5 - 0) + 0;
        bolha.style.animationDuration = `${randomDuration}s`;
        bolha.style.animationDelay = `${randomDelay}s`;

        const randomHorizontalMovement = Math.random() * (10 - -10) + -10;
        bolha.style.animation = `cair ${randomDuration}s linear infinite`;

        const keyframes = `@keyframes cair {
            0% {
                transform: translateY(-10vh) translateX(${randomHorizontalMovement}vw);
            }
            100% {
                transform: translateY(100vh) translateX(${randomHorizontalMovement}vw);
            }
        }`;

        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
};


document.addEventListener("DOMContentLoaded", function () {
    var openModal = document.getElementById("openModal");
    var myModal = new bootstrap.Modal(document.getElementById("instaModal"));

    openModal.addEventListener("click", function () {
        myModal.show();
    });
});