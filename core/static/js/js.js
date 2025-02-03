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