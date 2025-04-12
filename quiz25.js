// =======================================================================
// 1) Barra de Progresso (Pergunta X de N)
// 2) Timer de 90 segundos
// 3) Modo Revisão das Questões
// 4) Acessibilidade e Responsividade (simples)
// 5) Mensagens Finais / Conquistas
// =======================================================================

// (Opcional) Sons de acerto e erro
const acertoSound = new Audio('acerto.mp3');
const erroSound = new Audio('erro.mp3');

// Exemplo de 40 perguntas (você pode colar as suas aqui):
const questions = [
  {
    question: "1. Qual é a principal função dos neutrófilos na imunidade inata?",
    options: [
      "Produzir anticorpos",
      "Estimular linfócitos T CD8+",
      "Fagocitar patógenos e liberar EROs",
      "Apresentar antígenos via MHC II"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: Neutrófilos fagocitam bactérias e liberam espécies reativas de oxigênio (ERO),
destruindo o patógeno (Abbas, cap. 4).

a) Anticorpos são produzidos por plasmócitos (linfócitos B).
b) Linfócitos T CD8+ são ativados por MHC I, não por neutrófilos.
d) Quem apresenta antígeno via MHC II são células como macrófagos, B e dendríticas.`
  },
  {
    question: "2. Como a imunidade inata reconhece microrganismos?",
    options: [
      "Através de anticorpos específicos",
      "Por recombinação somática de genes",
      "Pelo sistema HLA",
      "Por receptores como TLRs que reconhecem PAMPs"
    ],
    answer: 3, // d
    explanation: `Gabarito: d
Justificativa: A imunidade inata usa receptores padrão como TLRs que reconhecem PAMPs (Abbas, cap. 4).

a) Anticorpos fazem parte da imunidade adaptativa.
b) A recombinação somática é exclusiva da imunidade adaptativa.
c) O sistema HLA é parte do MHC e atua na apresentação de antígenos.`
  },
  {
    question: "3. Qual é a principal função dos linfócitos T CD8+?",
    options: [
      "Ativar macrófagos",
      "Produzir IgE",
      "Matar células infectadas por vírus",
      "Produzir citocinas inflamatórias"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: Os linfócitos T CD8+ matam células infectadas por vírus via liberação de granzimas
e perforina (Abbas, cap. 11).

a) Quem ativa macrófagos são os T CD4+ Th1.
b) Produção de IgE envolve células B com auxílio de T CD4+ Th2.
d) T CD4+ (Th1, Th17) são grandes produtores de citocinas.`
  },
  {
    question: "4. O que diferencia imunidade celular da humoral?",
    options: [
      "Apenas a humoral possui memória",
      "A celular age fora das células",
      "A celular elimina células infectadas, a humoral atua com anticorpos",
      "A humoral reconhece apenas vírus"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: A imunidade celular (T CD8+) mata células infectadas, enquanto a humoral (B)
age com anticorpos contra patógenos extracelulares (Abbas, cap. 1).

a) Ambas possuem memória.
b) A imunidade celular atua dentro das células (eliminando células infectadas).
d) A humoral atua também contra bactérias e toxinas.`
  },
  {
    question: "5. O MHC I apresenta antígenos para quais células?",
    options: [
      "Linfócitos B",
      "T CD4+",
      "T CD8+",
      "Células NK"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: O MHC I apresenta antígenos endógenos para linfócitos T CD8+ (Abbas, cap. 6).

a) Linfócitos B não reconhecem MHC.
b) T CD4+ reconhecem MHC II.
d) NK não usam MHC I para ativação específica.`
  },
  {
    question: "6. O sistema HLA é importante no transplante porque:",
    options: [
      "É responsável pela produção de anticorpos",
      "Ativa as células NK do receptor",
      "Pode ser reconhecido como estranho pelo sistema imune",
      "Neutraliza toxinas no enxerto"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: O sistema HLA (equivalente ao MHC) pode ser reconhecido como não próprio,
gerando rejeição (Abbas, cap. 17).

a) Anticorpos são função de células B.
b) A ativação de NK no transplante é menos significativa que a de T.
d) A neutralização de toxinas não é a função do HLA.`
  },
  {
    question: "7. Qual é a função principal dos linfócitos B?",
    options: [
      "Eliminar células tumorais",
      "Produzir anticorpos",
      "Apresentar antígenos via MHC I",
      "Recrutar neutrófilos"
    ],
    answer: 1, // b
    explanation: `Gabarito: b
Justificativa: Linfócitos B se diferenciam em plasmócitos e produzem anticorpos (Abbas, cap. 12).

a) Células T CD8+ são as citotóxicas.
c) Linfócitos B expressam MHC II (não I).
d) O recrutamento de neutrófilos é mediado por citocinas, não por B.`
  },
  {
    question: "8. A IgA atua principalmente:",
    options: [
      "No sangue, promovendo opsonização",
      "Em secreções mucosas, impedindo a entrada de patógenos",
      "No líquido amniótico",
      "Ativando células NK"
    ],
    answer: 1, // b
    explanation: `Gabarito: b
Justificativa: A IgA é abundante em secreções (saliva, leite, secreção intestinal) e protege
mucosas (Abbas, cap. 13).

a) O principal anticorpo no sangue é a IgG.
c) O líquido amniótico não é local clássico de atuação da IgA.
d) Células NK não são ativadas diretamente por IgA.`
  },
  {
    question: "9. O sistema complemento pode ser ativado por:",
    options: [
      "IgA e IgE",
      "IgG e IgM",
      "IgD e IgE",
      "Antígenos virais livres"
    ],
    answer: 1, // b
    explanation: `Gabarito: b
Justificativa: O complemento é ativado pela via clássica através da IgG ou IgM (Abbas, cap. 13).

a) IgA atua em mucosas; IgE em alergias.
c) IgD tem função incerta; IgE não ativa complemento.
d) Antígenos sozinhos não ativam complemento — precisam de anticorpos.`
  },
  {
    question: "10. Na imunidade adaptativa, a ativação de linfócitos ocorre:",
    options: [
      "Diretamente na corrente sanguínea",
      "Apenas na medula óssea",
      "Nos órgãos linfoides periféricos",
      "Apenas após a produção de IgE"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: A ativação de linfócitos ocorre nos órgãos linfoides secundários (linfonodos, baço)
após contato com APCs (Abbas, cap. 1).

a) Não ocorre diretamente no sangue.
b) A medula óssea é órgão linfoide primário.
d) A IgE não é necessária para ativação geral de linfócitos.`
  },
  {
    question: "11. O que é imunidade inata?",
    options: [
      "Uma resposta lenta e específica",
      "Uma resposta rápida e genérica",
      "Um tipo de vacina",
      "A produção de anticorpos"
    ],
    answer: 1, // b
    explanation: `Gabarito: b
Justificativa: A imunidade inata é a primeira defesa, rápida e sem especificidade (Abbas, cap. 1).`
  },
  {
    question: "12. Quem produz os anticorpos?",
    options: [
      "Linfócitos T",
      "Neutrófilos",
      "Plasmócitos (linfócitos B ativados)",
      "Macrófagos"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: Os plasmócitos são linfócitos B que secretam anticorpos (Abbas, cap. 12).`
  },
  {
    question: "13. Qual anticorpo está presente nas secreções (saliva, leite, lágrima)?",
    options: [
      "IgE",
      "IgG",
      "IgA",
      "IgM"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: A IgA protege mucosas como intestino, trato respiratório, leite materno etc.
(Abbas, cap. 13).`
  },
  {
    question: "14. O que é um antígeno?",
    options: [
      "Um tipo de célula",
      "Qualquer substância capaz de causar resposta imune",
      "Um anticorpo específico",
      "Um tipo de vírus"
    ],
    answer: 1, // b
    explanation: `Gabarito: b
Justificativa: Antígeno é toda substância capaz de ser reconhecida pelo sistema imune
(Abbas, cap. 1).`
  },
  {
    question: "15. Qual célula é especialista em “comer” bactérias?",
    options: [
      "Neurônio",
      "Linfócito B",
      "Neutrófilo",
      "Hemácia"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: Neutrófilos fazem fagocitose, especialmente de bactérias (Abbas, cap. 4).`
  },
  {
    question: "16. Qual é a principal função do linfócito T CD8+?",
    options: [
      "Produzir histamina",
      "Matar células infectadas por vírus",
      "Fazer anticorpos",
      "Capturar antígenos"
    ],
    answer: 1, // b
    explanation: `Gabarito: b
Justificativa: T CD8+ reconhecem células infectadas e induzem sua morte (Abbas, cap. 11).`
  },
  {
    question: "17. O que o MHC faz no sistema imune?",
    options: [
      "Mata vírus",
      "Produz anticorpos",
      "Apresenta antígenos aos linfócitos T",
      "Transporta oxigênio"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: O MHC é essencial para mostrar o antígeno às células T (Abbas, cap. 6).`
  },
  {
    question: "18. Como chamamos a resposta do corpo a uma infecção?",
    options: [
      "Lesão",
      "Degeneração",
      "Inflamação",
      "Fagocitose"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: Inflamação é o processo natural para combater infecções e reparar tecidos
(Abbas, cap. 4).`
  },
  {
    question: "19. Qual célula reconhece antígenos apresentados pelo MHC II?",
    options: [
      "T CD8+",
      "T CD4+",
      "B",
      "NK"
    ],
    answer: 1, // b
    explanation: `Gabarito: b
Justificativa: O MHC II ativa linfócitos T CD4+, que coordenam a resposta imune
(Abbas, cap. 6).`
  },
  {
    question: "20. O que é o sistema complemento?",
    options: [
      "Um conjunto de vírus",
      "Um grupo de proteínas que ajuda na defesa",
      "Um hormônio imune",
      "Uma célula de defesa"
    ],
    answer: 1, // b
    explanation: `Gabarito: b
Justificativa: O complemento é um sistema de proteínas que ajuda a destruir patógenos e ativar
a inflamação (Abbas, cap. 13).`
  },
  {
    question: "21. Como os linfócitos T CD8+ reconhecem células infectadas?",
    options: [
      "Através de anticorpos ligados ao vírus",
      "Pela apresentação de antígenos por MHC II",
      "Pelo reconhecimento direto de vírus livres",
      "Pela apresentação de antígenos por MHC I"
    ],
    answer: 3, // d
    explanation: `Gabarito: d
Justificativa: O MHC I apresenta antígenos endógenos para T CD8+, como proteínas virais
(Abbas, cap. 6).

a) Anticorpos não fazem esse reconhecimento.
b) MHC II apresenta para T CD4+.
c) Vírus livres são neutralizados por anticorpos, não reconhecidos por T CD8+.`
  },
  {
    question: "22. A principal função da célula dendrítica é:",
    options: [
      "Produzir anticorpos",
      "Ativar o complemento",
      "Apresentar antígenos aos linfócitos T",
      "Fagocitar e destruir parasitas"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: Dendríticas são as principais APCs e ativam linfócitos T naive (Abbas, cap. 6).

a) Anticorpos = função de B.
b) Complemento é ativado por anticorpos e patógenos.
d) Eosinófilos são os principais na defesa contra parasitas.`
  },
  {
    question: "23. O IgE tem papel importante em:",
    options: [
      "Ativação do sistema complemento",
      "Neutralização de toxinas bacterianas",
      "Reações alérgicas e defesa contra helmintos",
      "Proteção de mucosas"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: IgE se liga a mastócitos e basófilos, liberando histamina em alergias e atuando
contra parasitas (Abbas, cap. 13, 20).`
  },
  {
    question: "24. As citocinas IL-1, IL-6 e TNF-α têm como principal ação:",
    options: [
      "Induzir apoptose em células tumorais",
      "Ativar o sistema complemento",
      "Iniciar a inflamação e febre",
      "Estimular produção de IgE"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: Essas citocinas são liberadas por macrófagos e induzem inflamação sistêmica e
local (Abbas, cap. 4).`
  },
  {
    question: "25. A principal via de ativação do sistema complemento pela imunidade adaptativa é:",
    options: [
      "Via alternativa",
      "Via das lectinas",
      "Via clássica",
      "Via terminal"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: A via clássica é ativada por anticorpos IgG e IgM (Abbas, cap. 13).`
  },
  {
    question: "26. Qual célula da imunidade inata também participa da resposta antiviral sem reconhecimento específico de antígenos?",
    options: [
      "Linfócito B",
      "Célula NK",
      "T CD4+",
      "Basófilo"
    ],
    answer: 1, // b
    explanation: `Gabarito: b
Justificativa: Células NK reconhecem células infectadas por vírus e induzem apoptose sem uso
de MHC (Abbas, cap. 4).`
  },
  {
    question: "27. A resposta imune adaptativa é iniciada principalmente em:",
    options: [
      "Órgãos linfoides primários",
      "Tecido epitelial",
      "Medula óssea",
      "Órgãos linfoides secundários (linfonodos, baço)"
    ],
    answer: 3, // d
    explanation: `Gabarito: d
Justificativa: A ativação de linfócitos por APCs ocorre em órgãos linfoides secundários (Abbas,
cap. 1 e 2).`
  },
  {
    question: "28. O sistema HLA é geneticamente:",
    options: [
      "Herdado por recombinação somática",
      "Idêntico em todos os seres humanos",
      "Localizado no cromossomo 6 e altamente polimórfico",
      "Responsável pela produção de imunoglobulinas"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: O sistema HLA é o complexo gênico do MHC humano, com muita variabilidade
genética (Abbas, cap. 6, 17).`
  },
  {
    question: "29. A IgG materna protege o recém-nascido por meio de:",
    options: [
      "Amamentação exclusiva",
      "Transferência placentária",
      "Produção ativa do bebê",
      "Citocinas do líquido amniótico"
    ],
    answer: 1, // b
    explanation: `Gabarito: b
Justificativa: IgG é transferida pela placenta, conferindo imunidade passiva ao bebê (Abbas,
cap. 13).`
  },
  {
    question: "30. Qual das opções abaixo descreve corretamente os linfócitos T reguladores?",
    options: [
      "Ativam o complemento e estimulam inflamação",
      "Estimulam a produção de anticorpos",
      "Inibem a resposta imune e previnem autoimunidade",
      "Fagocitam bactérias e vírus"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: Os T reguladores mantêm a tolerância imunológica e evitam autoimunidade
(Abbas, cap. 10, 15).`
  },
  {
    question: "31. Qual é a principal razão para o polimorfismo das moléculas HLA influenciar a rejeição de transplantes?",
    options: [
      "Ele dificulta o reconhecimento de antígenos tumorais",
      "Ele reduz a capacidade de ativar células B",
      "Ele aumenta a probabilidade de reconhecimento como 'não próprio'",
      "Ele impede a fagocitose de células do enxerto"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: O polimorfismo do HLA faz com que o sistema imune do receptor reconheça o
enxerto como estranho, ativando resposta imune (Abbas, cap. 17).`
  },
  {
    question: "32. O que ocorre quando uma célula T CD4+ reconhece um antígeno apresentado pelo MHC II sem coestimulação adequada?",
    options: [
      "Produção intensa de citocinas",
      "Reversão para célula T CD8+",
      "Anergização ou apoptose",
      "Ativação de NKs"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: A ausência de coestimulação induz tolerância (anergia) ou morte celular (Abbas,
cap. 9).`
  },
  {
    question: "33. As células NK reconhecem células-alvo com base na:",
    options: [
      "Expressão aumentada de MHC I",
      "Presença de anticorpos da classe IgE",
      "Ausência ou redução de MHC I",
      "Ativação pelo sistema complemento"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: Células NK reconhecem e matam células com baixo MHC I, típico de células
tumorais ou infectadas (Abbas, cap. 4).`
  },
  {
    question: "34. A hipermutação somática ocorre em qual contexto e com qual objetivo?",
    options: [
      "Na medula óssea, para gerar diversidade dos TCRs",
      "Nos centros germinativos, para aumentar afinidade dos anticorpos",
      "Nos linfonodos, para criar novos linfócitos B naive",
      "No baço, para permitir troca de isotipo"
    ],
    answer: 1, // b
    explanation: `Gabarito: b
Justificativa: A hipermutação somática é um processo nos centros germinativos que aumenta a
afinidade dos anticorpos (Abbas, cap. 12).`
  },
  {
    question: "35. Qual é o papel funcional do TLR4 na imunidade inata?",
    options: [
      "Reconhecer vírus RNA e ativar células B",
      "Detectar lipopolissacarídeos (LPS) e ativar macrófagos",
      "Ativar a IgA nas mucosas",
      "Produzir granzimas nas células NK"
    ],
    answer: 1, // b
    explanation: `Gabarito: b
Justificativa: O TLR4 reconhece LPS de bactérias Gram-negativas e ativa resposta inflamatória
(Abbas, cap. 4).`
  },
  {
    question: "36. Em uma resposta inflamatória crônica sustentada, qual célula T é mais importante?",
    options: [
      "T CD8+",
      "T reguladora",
      "T CD4+ Th2",
      "T CD4+ Th17"
    ],
    answer: 3, // d
    explanation: `Gabarito: d
Justificativa: As Th17 produzem IL-17, recrutando neutrófilos e mantendo inflamação crônica
(Abbas, cap. 10).`
  },
  {
    question: "37. A troca de isotipo de anticorpos (ex.: de IgM para IgG) requer:",
    options: [
      "Receptor de IgD na célula T",
      "Enzima AID (activation-induced deaminase) e estímulo de T CD4+",
      "Exclusivamente estímulo antigênico repetido",
      "Ação direta de citocinas NK"
    ],
    answer: 1, // b
    explanation: `Gabarito: b
Justificativa: A troca de classe depende da AID e da interação com T CD4+ via CD40-CD40L
(Abbas, cap. 12).`
  },
  {
    question: "38. A função das células T foliculares (Tfh) é principalmente:",
    options: [
      "Ativar células NK",
      "Iniciar fagocitose",
      "Auxiliar linfócitos B na resposta humoral nos centros germinativos",
      "Promover citotoxicidade direta"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: Tfh atuam em centros germinativos, promovendo troca de isotipo e maturação de
afinidade (Abbas, cap. 12).`
  },
  {
    question: "39. A resposta imune contra vírus envolve simultaneamente:",
    options: [
      "Apenas linfócitos B e IgA",
      "Linfócitos T CD4+, CD8+ e anticorpos",
      "Apenas T CD8+",
      "Mastócitos e linfócitos T reguladores"
    ],
    answer: 1, // b
    explanation: `Gabarito: b
Justificativa: A defesa viral envolve T CD4+ (coordenação), CD8+ (citotoxicidade) e B
(anticorpos neutralizantes) (Abbas, cap. 16).`
  },
  {
    question: "40. Durante uma infecção viral, a produção de interferon tipo I (IFN-α/β):",
    options: [
      "Estimula produção de IgE",
      "Inibe linfócitos T",
      "Aumenta expressão de MHC I e antiviralidade celular",
      "Causa lise direta de vírus"
    ],
    answer: 2, // c
    explanation: `Gabarito: c
Justificativa: IFN tipo I aumenta MHC I e ativa mecanismos antivirais em células não infectadas
(Abbas, cap. 4).`
  }
];

// Frases de acerto e erro
const frasesAcerto = [
  “Acertouuu! Tá feliz por quê? Ainda tem mais pra responder...”,
  “Leu os slides? Grande coisa... Mas dessa vez deu certo.”,
  “Olha só, mandou bem! Talvez você não seja uma total decepção.”,
  “Eu poderia elogiar, mas com seu histórico é melhor não arriscar.”,
  “Acertar o básico não te faz um gênio, só pra constar.”,
  “Finalmente, uma luz no fim do túnel. Vamos ver se dura.”,
  “Nem parece você respondendo... mas tá certo!”,
  “Até que enfim algo certo! Melhor não se acostumar...”,
  “Você acertou, mas não se engane: ainda pode piorar.”,
  “Tá aí uma rara ocasião em que você não fez bobagem.”
];

const frasesErro = [
  “Tão ruim que até o Google se recusaria a sugerir algo.”,
  “Tá de sacanagem, né? A resposta tava na sua cara!”,
  “Tem certeza de que tá no curso certo?”,
  “Dá tempo de voltar pro ensino médio e repensar tudo.”,
  “Se errar fosse arte, você seria um Picasso.”,
  “Isso foi tão errado que o botão ‘responder’ devia ter travado.”,
  “Errou? Pra variar, né? Acertar que seria novidade.”,
  “Tô quase pedindo pro sistema te expulsar, de tanto erro.”,
  “Essa resposta foi tão fora que só pode ser piada.”,
  “Até um chute aleatório teria mais chance de acertar.”
];

// Variáveis globais de controle
let score = 0;
let current = 0;
let countdownInterval = null; // para armazenar o setInterval do timer
let timeLeft = 90; // tempo em segundos para cada pergunta
let userAnswers = Array(questions.length).fill(null); 
// Armazena o índice selecionado em cada pergunta (ou "null" se não respondeu/tempo esgotou)

// =======================================================================
// Carrega a pergunta da vez
// =======================================================================
function loadQuestion() {
  // Limpa qualquer contagem anterior antes de iniciar outra
  stopTimer();

  // Configura o texto de progresso
  const progressText = document.getElementById("progressText");
  progressText.innerText = `Pergunta ${current + 1} de ${questions.length}`;

  // Carrega a pergunta e opções
  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    const opt = document.createElement("div");
    opt.className = "option";
    opt.innerHTML = `
      <input type='radio' name='option' value='${index}' id='option${index}'>
      <label for='option${index}'> ${option}</label>`;
    optionsDiv.appendChild(opt);
  });

  // Esconde explicação, botão "Próxima", resultado, etc.
  document.getElementById("explanation").style.display = "none";
  document.getElementById("explanation").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("result").innerText = "";

  // Remove destaques anteriores
  const quizContainer = document.getElementById("quizContainer");
  quizContainer.classList.remove("highlight-correct", "highlight-wrong");

  // Mostra botão "Responder"
  document.getElementById("submitBtn").style.display = "block";

  // Inicia o timer de 90 segundos para responder
  startTimer(90);
}

// =======================================================================
// Inicia o cronômetro de X segundos
// =======================================================================
function startTimer(seconds) {
  timeLeft = seconds;
  document.getElementById("timer").textContent = timeLeft;

  countdownInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;

    if (timeLeft <= 0) {
      // Tempo esgotou!
      stopTimer();
      timeIsUp();
    }
  }, 1000);
}

// =======================================================================
// Para o cronômetro
// =======================================================================
function stopTimer() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
}

// =======================================================================
// Quando o tempo se esgota, conta como resposta errada automaticamente
// =======================================================================
function timeIsUp() {
  alert("Tempo esgotado! Resposta contada como errada.");

  // Marca a resposta do usuário como null (ou outro valor que indique “não respondeu”)
  userAnswers[current] = null;

  // Aplica visual de erro e mostra explicação
  forceWrongAnswer();
}

// =======================================================================
// Força o comportamento de "errou" sem ver se o usuário selecionou algo
// =======================================================================
function forceWrongAnswer() {
  const quizContainer = document.getElementById("quizContainer");
  quizContainer.classList.add("highlight-wrong");
  quizContainer.classList.add("shake");
  setTimeout(() => {
    quizContainer.classList.remove("shake");
  }, 1000);

  erroSound.play();

  // Mostra um feedback aleatório de erro
  const feedback = document.createElement("div");
  feedback.style.fontWeight = "bold";
  feedback.style.marginTop = "10px";
  feedback.classList.add("animate", "erro");
  const usada = frasesErro[Math.floor(Math.random() * frasesErro.length)];
  feedback.innerText = usada;
  document.getElementById("options").appendChild(feedback);

  // Mostrar explicação
  const explanation = questions[current].explanation || "Sem explicação para esta pergunta.";
  document.getElementById("explanation").innerText = explanation;
  document.getElementById("explanation").style.display = "block";

  // Exibir botão "Próxima"
  document.getElementById("nextBtn").style.display = "inline-block";
  // Ocultar botão "Responder"
  document.getElementById("submitBtn").style.display = "none";
}

// =======================================================================
// Dispara ao clicar em "Responder"
// =======================================================================
function submitAnswer() {
  // Interrompe o timer (se ainda estiver rodando)
  stopTimer();

  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Selecione uma opção!");
    // Reinicia o timer caso tenha parado antes do alerta
    // (Opcional: você pode optar por não reiniciar.)
    startTimer(timeLeft);
    return;
  }

  // Ocultar o botão "Responder"
  document.getElementById("submitBtn").style.display = "none";

  const selectedIndex = parseInt(selected.value);
  userAnswers[current] = selectedIndex; // salva escolha do usuário

  const correctIndex = questions[current].answer;
  const explanation = questions[current].explanation || "Sem explicação para esta pergunta.";
  const quizContainer = document.getElementById("quizContainer");

  if (selectedIndex === correctIndex) {
    score++;
    acertoSound.play();
    quizContainer.classList.add("highlight-correct");
  } else {
    erroSound.play();
    quizContainer.classList.add("highlight-wrong");
    quizContainer.classList.add("shake");
    setTimeout(() => {
      quizContainer.classList.remove("shake");
    }, 1000);
  }

  // Feedback de acerto ou erro
  const feedback = document.createElement("div");
  feedback.style.fontWeight = "bold";
  feedback.style.marginTop = "10px";
  feedback.classList.add("animate");
  feedback.classList.add(selectedIndex === correctIndex ? "acerto" : "erro");

  const usada = selectedIndex === correctIndex
    ? frasesAcerto[Math.floor(Math.random() * frasesAcerto.length)]
    : frasesErro[Math.floor(Math.random() * frasesErro.length)];

  feedback.innerText = usada;
  document.getElementById("options").appendChild(feedback);

  // Exibir explicação
  document.getElementById("explanation").innerText = explanation;
  document.getElementById("explanation").style.display = "block";

  // Botão "Próxima" visível
  document.getElementById("nextBtn").style.display = "inline-block";
}

// =======================================================================
// Quando clica em "Próxima"
// =======================================================================
function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    // Fim do quiz
    finishQuiz();
  }
}

// =======================================================================
// Final do quiz - exibir pontuação e mensagens de conquista
// =======================================================================
function finishQuiz() {
  document.getElementById("quiz").innerHTML = "";

  // Cálculo de pontos
  const totalQ = questions.length;
  const pontos = score * 10;
  const pct = (score / totalQ) * 100;

  let finalMsg = `
    Você acertou ${score} de ${totalQ} perguntas!<br>
    Pontuação final: ${pontos} pontos.<br><br>
  `;

  // Exemplo de conquista
  if (pct >= 80) {
    finalMsg += "Parabéns, você obteve um ótimo resultado!<br>";
  } else if (pct >= 50) {
    finalMsg += "Resultado razoável, mas ainda há espaço para melhorar.<br>";
  } else {
    finalMsg += "Não foi dessa vez. Bora estudar mais um pouquinho!<br>";
  }

  finalMsg += `<button onclick="showReview()">Revisar Respostas</button>`;

  document.getElementById("quiz").innerHTML = `
    <div class='result'>
      ${finalMsg}
    </div>
  `;
}

// =======================================================================
//  Modo Revisão: exibe todas as perguntas, a resposta do usuário e a correta
// =======================================================================
function showReview() {
  // Esconde o quizContainer
  document.getElementById("quizContainer").style.display = "none";

  // Mostra a reviewContainer
  const reviewContainer = document.getElementById("reviewContainer");
  reviewContainer.style.display = "block";

  const reviewContent = document.getElementById("reviewContent");
  reviewContent.innerHTML = "";

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const userAns = userAnswers[i];   // índice marcado
    const correctAns = q.answer;      // índice correto
    const isCorrect = (userAns === correctAns);
    
    // Montar texto das alternativas (A, B, C, D) etc.
    // Supondo que 0->A, 1->B, 2->C, 3->D
    const userAnsText = userAns !== null ? q.options[userAns] : "Não respondeu (Tempo Esgotado)";
    const correctAnsText = q.options[correctAns];

    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");

    reviewItem.innerHTML = `
      <div class="review-question">${i+1}. ${q.question}</div>
      <div><strong>Sua resposta:</strong> 
        <span class="${isCorrect ? 'review-correct' : 'review-wrong'}">
          ${userAnsText ?? "Nenhuma"}
        </span>
      </div>
      <div><strong>Resposta correta:</strong> ${correctAnsText}</div>
      <div><strong>Explicação:</strong> ${q.explanation ?? "Sem explicação"}</div>
    `;

    reviewContent.appendChild(reviewItem);
  }
}

// =======================================================================
// Inicial
// =======================================================================
window.onload = function() {
  loadQuestion();
};
