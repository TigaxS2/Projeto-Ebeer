document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#form-login");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#senha");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        console.log(emailInput.value, passwordInput.value); // Corrigido console.log

        // Verifica se o email está preenchido e se é válido
        if(emailInput.value.trim() === "" || !isEmailValid(emailInput.value)) {
            alert("Por favor, preencha o seu email corretamente!");
            return;
        }

        // Verifica se a senha está preenchida e tem no mínimo 8 caracteres
        if(passwordInput.value.trim().length < 8) {
            alert("A senha precisa ter no mínimo 8 caracteres!");
            return;
        }

        // Se todas as validações passarem, pode prosseguir com o envio do formulário ou fazer o que desejar aqui
        alert("Formulário válido! Você pode prosseguir com o envio.");
    });

    // Adiciona um event listener para o evento keydown no documento
    document.addEventListener("keydown", function(event) {
        // Verifica se a tecla pressionada é a tecla Enter
        if (event.key === "Enter") {
            // Evita o comportamento padrão (recarregar a página)
            event.preventDefault();
            // Simula o clique no botão de submissão do formulário
            form.dispatchEvent(new Event("submit"));
        }
    });

    // Função que valida e-mail
    function isEmailValid(email) {
        // Cria uma regex para validar o e-mail
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
});
