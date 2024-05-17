function calculadoraObejeto() {
    // Cria um objeto 'calculadora' que contém todas as propriedades e métodos necessários para a calculadora.
    const calculadora = {
        // Seleciona o elemento de display da calculadora.
        display: document.querySelector('.display'),
        // Seleciona o botão de limpar display.
        btnClear: document.querySelector('.btn-clear'),
        
        // Método que inicializa a calculadora.
        inicia() {
            // Configura os eventos de clique nos botões.
            calculadora.cliqueBotoes();
            // Configura o evento de pressionar a tecla Enter no display.
            calculadora.pressionaEnter();
        },
    
        // Método que adiciona um evento ao display para detectar quando a tecla Enter é pressionada.
        pressionaEnter() {
            calculadora.display.addEventListener('keyup', e => {
                // Se a tecla Enter (código 13) for pressionada, realiza a conta.
                if (e.keyCode === 13) {
                    calculadora.realizaConta();
                }
            });
        },
    
        // Método que limpa o display.
        clearDisplay() {
            calculadora.display.value = '';
        },
    
        // Método que apaga o último caractere do display.
        apagaUm() {
            calculadora.display.value = calculadora.display.value.slice(0, -1);
        },
        
        // Método que realiza o cálculo.
        realizaConta() {
            // Pega a expressão do display.
            let conta = calculadora.display.value;
    
            try {
                // Avalia a expressão. 'eval' executa a expressão como código JavaScript.
                conta = eval(conta);
                // Se o resultado for falso (NaN, undefined, etc), exibe uma mensagem de erro.
                if(!conta) {
                    alert('Conta inválida');
                    calculadora.clearDisplay();
                    return;
                }
    
                // Se a conta for válida, mostra o resultado no display.
                calculadora.display.value = String(conta);
            } catch(e) {
                // Em caso de erro na avaliação da expressão, exibe uma mensagem de erro e limpa o display.
                alert('Conta inválida');
                calculadora.clearDisplay();
                return;
            }
        },
        
        // Método que configura os eventos de clique para os botões.
        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                // Captura o elemento clicado.
                const el = e.target;
    
                // Se for um botão de número, adiciona o valor ao display.
                if(el.classList.contains('btn-num')) {
                    calculadora.btnParaDisplay(el.innerText);
                }
                // Se for o botão de limpar, chama o método para limpar o display.
                if(el.classList.contains('btn-clear')) {
                    calculadora.clearDisplay();
                }
                // Se for o botão de apagar um caractere, chama o método correspondente.
                if(el.classList.contains('btn-dell')) {
                    calculadora.apagaUm();
                }
                // Se for o botão de igual, realiza a conta.
                if(el.classList.contains('btn-eq')) {
                    calculadora.realizaConta();
                }
                
            });
        },
    
        // Método que adiciona o valor de um botão ao display.
        btnParaDisplay(valor) {
            calculadora.display.value += valor;
        },
    };
    
    // Inicia a calculadora chamando o método 'inicia'.
    calculadora.inicia();
}

// Executa a função 'calculadoraObejeto' para inicializar a calculadora.
calculadoraObejeto();
