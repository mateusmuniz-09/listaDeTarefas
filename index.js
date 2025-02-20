
function adicionarTarefa() {

    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    const mensagem = document.getElementById("mensagem")
    let mensagemErro = "Digite uma tarefa para adicioná-la à sua lista!";
    let mensagemSucesso = "Tarefa adicionada com sucesso!";

    if (tarefa == "") {

        mensagem.textContent = mensagemErro;
        mensagem.style.color = 'red'
        mensagem.style.display = "flex";


    } else {
        let listaTarefas = document.getElementById("listaTarefas");
        let container = document.createElement('div');

        container.classList.add('conatiner');

        let novaTarefa = document.createElement("li");

        novaTarefa.textContent = tarefa;

        let concluirTrefa = document.createElement("button");

        concluirTrefa.textContent = "Concluir";
        novaTarefa.classList.add('novaTarefa');

        let removerTarefa = document.createElement('button');
        removerTarefa.textContent = "Remover";

        listaTarefas.appendChild(container)
        container.appendChild(novaTarefa);

        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = 'green';

        container.appendChild(concluirTrefa);
        container.appendChild(removerTarefa)

        concluirTrefa.addEventListener('click', () => {

            novaTarefa.style.textDecoration = "line-through";
            novaTarefa.style.background = "#28a7469d";
            novaTarefa.style.color = "#00000060"



        });

        removerTarefa.addEventListener('click', () => {

            listaTarefas.removeChild(container);


        })

        mensagem.style.display = "flex";


    }
    setTimeout(() => {
        mensagem.style.display = "none";
    }, 2000);

    inputTarefa.value = "";

}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registrado com sucesso:', registration);
        })
        .catch((error) => {
          console.log('Falha ao registrar o Service Worker:', error);
        });
    });
  }
  
