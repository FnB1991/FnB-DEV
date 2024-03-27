// FUNÇÃO PARA CARREGAR PÁGINA DENTRO DA SECTION CONTEÚDO //
function carregar(pagina) {
    if (pagina) {
        $.ajax({
            url: pagina,
            type: 'GET',
            dataType: 'html',
            success: function(data) {
                $("#conteudo").html(data);
            },
            error: function(xhr, status, error) {
                console.error("Erro ao carregar a página: " + error);
            }
        });
    } else {
        console.error("Nenhuma página fornecida para carregar.");
    }
}
// FIM DA FUNÇÃO //

// FUNÇÃO ATUALIZA ANO DO SITE
function atualizarAno() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}
    atualizarAno();
// FIM DA FUNÇÃO