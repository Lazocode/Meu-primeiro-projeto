// Seleciona o campo de entrada de nova tarefa
const inputTarefa = document.querySelector('#nova-tarefa');

// Adiciona um ouvinte de evento ao botão "Adicionar Tarefa"
const botaoAdicionar = document.querySelector('#btn-adicionar');
botaoAdicionar.addEventListener('click', adicionarTarefa);

// Função para adicionar uma nova tarefa à lista de pendentes
function adicionarTarefa() {
    const tarefa = inputTarefa.value.trim();
    if (tarefa !== '') {
        const listaPendentes = document.querySelector('#pendentes ul');
        const novoItem = document.createElement('li');
        novoItem.textContent = tarefa;
        listaPendentes.appendChild(novoItem);
        inputTarefa.value = '';
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
}

// Adiciona um ouvinte de evento ao botão "Concluir Tarefa"
const botaoConcluir = document.querySelector('#btn-concluir');
botaoConcluir.addEventListener('click', concluirTarefa);

// Função para concluir uma tarefa selecionada
function concluirTarefa() {
    const listaPendentes = document.querySelector('#pendentes ul');
    const listaConcluidas = document.querySelector('#concluidas ul');
    const tarefaParaConcluir = listaPendentes.querySelector('li');
    if (tarefaParaConcluir) {
        listaConcluidas.appendChild(tarefaParaConcluir);
    } else {
        alert('Não há tarefas pendentes para concluir.');
    }
}

const botaoRemoverPendentes = document.querySelector('#btn-remover');
botaoRemoverPendentes.addEventListener('click', removerTarefaPendentes);

// Função para remover uma tarefa selecionada da lista de pendentes
function removerTarefaPendentes() {
    const listaPendentes = document.querySelector('#pendentes ul');
    const tarefaParaRemover = listaPendentes.querySelector('li');
    if (tarefaParaRemover) {
        listaPendentes.removeChild(tarefaParaRemover);
    } else {
        alert('Não há tarefas pendentes para remover.');
    }
}

// Adiciona um ouvinte de evento ao botão "Limpar Concluídas"
const botaoLimpar = document.querySelector('#btn-limpar');
botaoLimpar.addEventListener('click', limparConcluidas);

// Função para limpar todas as tarefas concluídas
function limparConcluidas() {
    const listaConcluidas = document.querySelector('#concluidas ul');
    if (listaConcluidas.children.length > 0) {
        listaConcluidas.innerHTML = '';
    } else {
        alert('Não há tarefas concluídas para limpar.');
    }
}


// fim do arquivo javascript/domDaPagina.js

