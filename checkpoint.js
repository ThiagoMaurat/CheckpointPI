//Thiago Maurat Martins Dias

//Declaração da função recebendo dois parâmetros: Tempo e prato
function esquentar(tempo, prato) {
  /**
   * Menu
   */
  tempo_do_prato = "";
  mensagem = "";
  menu = false;

  //Caso o prato seja equivalente a pipoca, será atribuído 10s e menu = true;
  if (prato == "pipoca") {
    tempo_do_prato = 10;
    menu = true;
  }

  //Caso o prato seja equivalente a macarrão, será atribuído 10s e menu = true;
  if (prato == "macarrao") {
    tempo_do_prato = 8;
    menu = true;
  }

  //Caso o prato seja equivalente a carne, será atribuído 15s e menu = true;
  if (prato == "carne") {
    tempo_do_prato = 15;
    menu = true;
  }

  //Caso o prato seja equivalente a feijão, será atribuído 12s e menu = true;
  if (prato == "feijao") {
    tempo_do_prato = 12;
    menu = true;
  }

  //Caso o prato seja equivalente a brigadeiro, será atribuído 8s e menu = true;
  if (prato == "brigadeiro") {
    tempo_do_prato = 8;
    menu = true;
  }

  //Caso o menu seja falso, ou seja, diferente dos cinco pratos acima descritos, mensagem será prato inexistente
  if (menu == false) {
    mensagem = "prato inexistente";
  }

  /**
   * Condições
   */

  // caso seja selecionado um dos cinco pratos descritos:
  if (menu == true) {
    mensagem = "Prato pronto 🍽, bom apetite 🤤";

    /* dentro da condicional menu = true, se o tempo (primeiro parâmetro) for maior que o 
        tempo do prato vezes dois, imprimirá queimou */
    if (tempo > tempo_do_prato * 2) {
      mensagem = "queimou 🔥";
    }

    /* dentro da condicional menu = true, se o tempo (primeiro parâmetro) for maior que o 
    tempo do prato vezes três, imprimirá kabumm */
    if (tempo > tempo_do_prato * 3) {
      mensagem = "kabummm 💣";
    }

    /* dentro da condicional menu = true, se o tempo (primeiro parâmetro) for menor que o tempo do prato, imprimirá kabumm */
    if (tempo < tempo_do_prato) {
      mensagem = "tempo insuficiente ⏰";
    }
  }

  //imprimir na tela quando chamar a função e a mensagem
  console.log(`${prato} - ${mensagem}`);
}
