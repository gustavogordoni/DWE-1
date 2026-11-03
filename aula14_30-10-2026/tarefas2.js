const campo = document.querySelector('#tarefa');
const botao = document.querySelector('#adicionar');
const lista = document.querySelector('#lista');

botao.addEventListener('click', function() {
    if (campo.value.trim() === "") return;

    const item = document.createElement('li');
    item.textContent = campo.value;

    // item.addEventListener('click', function() {
    //     item.remove();
    // });

    item.addEventListener('click', function() {
        item.classList.toggle('concluida');
    });

    item.addEventListener('dblclick', function() {
        item.remove();
    });

    lista.append(item);
    campo.value = "";
    campo.focus();
});