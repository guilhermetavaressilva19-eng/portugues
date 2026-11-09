"use strict";

/* ==========================================
   SITE DE FORMATURA — TURMA 2026
   Arquivo: js/script.js
========================================== */

/* ==========================================
   1. LINHA DO TEMPO ESCOLAR
========================================== */

const escolas = [
  {
    nome: "Interagino",
    periodo: "Jardim de Infância",
    texto: "Minha trajetória escolar começou na Interagi, onde vivi meus primeiros momentos como estudante. Foi nessa fase que comecei a descobrir o mundo das letras, das brincadeiras e das amizades. Cada experiência foi importante para o início da minha caminhada.",
    foto: "assets/interagi.jpg"
  },
  {
    nome: "Energia ativa",
    periodo: "Primeiros anos escolares",
    texto: "Depois da Interagi, fui para a Energetiva. Uma nova escola, novos professores e novas amizades fizeram parte dessa etapa da minha vida. Foi um período de aprendizado e adaptação, que contribuiu para meu crescimento.",
    foto: "assets/energetiva.jpg"
  },
  {
    nome: "Colégio Nossa Senhora de Fátima",
    periodo: "Trajetória escolar",
    texto: "Minha jornada continuou no Colégio Nossa Senhora de Fátima. Nesse ambiente, tive novas experiências, conheci pessoas e continuei desenvolvendo meus conhecimentos. Cada fase deixou lembranças que fazem parte da minha história.",
    foto: "assets/fatima.jpg"
  },
  {
    nome: "Colégio Estadual Inês",
    periodo: "Trajetória escolar",
    texto: "Mais tarde, estudei no Colégio Estadual Inês. Essa mudança trouxe novos desafios, oportunidades e aprendizados. Foi mais uma etapa importante na construção da pessoa que sou hoje.",
    foto: "assets/ines.jpg"
  },
  {
    nome: "Colégio Estadual Teobaldo",
    periodo: "Trajetória escolar",
    texto: "Depois, passei pelo Colégio Estadual Teobaldo. Durante esse período, continuei amadurecendo, construindo amizades e adquirindo experiências que contribuíram para minha formação pessoal e escolar.",
    foto: "assets/teobaldo.jpg"
  },
  {
    nome: "Colégio Moreli",
    periodo: "Conclusão do Ensino Médio — 2026",
    texto: "Por fim, cheguei ao Colégio Moreli, onde encerro minha trajetória no Ensino Médio. Ao olhar para trás, percebo o quanto cada escola, professor e colega fez parte dessa caminhada. Agora, levo comigo os aprendizados e as memórias, preparado para iniciar um novo capítulo.",
    foto: "assets/moreli.jpg"
  }
];

/* ==========================================
   2. PORTFÓLIO — 12 REDAÇÕES
========================================== */

const redacoes = [
  {
    titulo: "El Niño e os Desafios Climáticos",
    texto: `As mudanças climáticas representam um dos maiores desafios da sociedade contemporânea. Nesse contexto, o fenômeno El Niño, caracterizado pelo aquecimento anormal das águas do Oceano Pacífico Equatorial, pode intensificar eventos climáticos extremos, como secas, enchentes e ondas de calor. No Brasil, esses acontecimentos afetam milhares de pessoas e evidenciam a falta de preparação da sociedade. Dessa forma, a ausência de infraestrutura adequada e a pouca conscientização da população dificultam o enfrentamento desses problemas.

Em primeiro lugar, a precariedade da infraestrutura urbana aumenta os impactos dos eventos climáticos extremos. Em diversas cidades brasileiras, a falta de sistemas eficientes de drenagem, o descarte irregular de lixo e a ocupação de áreas de risco contribuem para enchentes e deslizamentos. Como consequência, muitas famílias perdem suas casas e enfrentam dificuldades para reconstruir suas vidas. Assim, torna-se necessário ampliar os investimentos públicos em prevenção e planejamento urbano.

Além disso, a falta de educação ambiental também prejudica a preparação da sociedade. Muitas pessoas desconhecem os riscos relacionados às mudanças climáticas e não sabem como agir em situações de emergência. Nesse sentido, as escolas e os meios de comunicação possuem papel fundamental na divulgação de informações sobre prevenção, sustentabilidade e segurança. Portanto, conscientizar a população é essencial para diminuir os danos causados por esses fenômenos.

Diante disso, é fundamental que o Governo Federal, em parceria com estados e municípios, desenvolva políticas públicas de prevenção aos desastres climáticos. Para isso, devem ser realizados investimentos em infraestrutura, sistemas de alerta e fiscalização de áreas de risco. Além disso, o Ministério da Educação deve promover campanhas e projetos escolares sobre mudanças climáticas, por meio de palestras e atividades educativas. Dessa maneira, será possível construir uma sociedade mais preparada, consciente e segura diante dos eventos extremos.`
  },

  {
    titulo: "Migração e Acolhimento",
    texto: `A migração é um fenômeno presente em diversos países e ocorre por motivos como guerras, crises econômicas e busca por melhores condições de vida. Nesse contexto, a Declaração Universal dos Direitos Humanos, criada pela Organização das Nações Unidas (ONU), estabelece que todos os indivíduos possuem direitos fundamentais, independentemente de sua origem. Entretanto, na sociedade contemporânea, muitos migrantes enfrentam dificuldades de acolhimento e preconceito nos países de destino. Dessa forma, a discriminação e a falta de políticas públicas eficientes representam desafios para a convivência em contextos globais.

Em primeiro lugar, o preconceito contra imigrantes dificulta sua integração social. Isso acontece porque muitos estrangeiros são vistos de maneira negativa devido às diferenças culturais, linguísticas e religiosas. Como consequência, essas pessoas podem sofrer exclusão social e encontrar obstáculos para conseguir emprego, moradia e acesso à educação. Assim, a intolerância prejudica tanto os migrantes quanto a construção de uma sociedade mais justa e respeitosa.

Além disso, a insuficiência de políticas públicas de acolhimento agrava essa situação. A falta de assistência governamental, de oportunidades de trabalho e de acesso aos serviços básicos dificulta a adaptação dos recém-chegados. Nesse sentido, é fundamental que os países desenvolvam medidas que garantam condições dignas de vida aos migrantes, contribuindo para sua inclusão e para a redução das desigualdades sociais.

Portanto, é necessário enfrentar os desafios relacionados à migração e ao acolhimento. Para isso, os governos devem ampliar as políticas públicas de assistência aos imigrantes, por meio da oferta de cursos de idiomas, oportunidades de emprego e acesso à educação e à saúde. Ademais, as escolas e os meios de comunicação devem promover campanhas de conscientização sobre o respeito às diferenças culturais. Dessa maneira, será possível construir uma sociedade mais acolhedora, na qual a diversidade seja valorizada e os direitos humanos sejam respeitados.`
  },

  {
    titulo: "Conservação da Fauna Brasileira",
    texto: `A conservação da fauna brasileira é um desafio importante para a preservação do meio ambiente. Nesse sentido, o Brasil possui uma grande diversidade de espécies, porém muitas estão ameaçadas de extinção devido às ações humanas. Entre as principais causas desse problema estão o desmatamento e a caça ilegal, que prejudicam o equilíbrio ecológico e colocam em risco a biodiversidade.

Em primeiro lugar, o desmatamento é um dos principais fatores que ameaçam os animais brasileiros. A destruição de florestas para a expansão agropecuária e urbana reduz os habitats naturais, dificultando a sobrevivência de diversas espécies. Como consequência, ocorre a diminuição da biodiversidade e o desequilíbrio das cadeias alimentares, prejudicando o funcionamento dos ecossistemas.

Além disso, a caça ilegal e o tráfico de animais silvestres contribuem para o desaparecimento de espécies. A retirada desses animais da natureza afeta a reprodução e o controle das populações, causando impactos ambientais. Dessa forma, a falta de fiscalização e de conscientização da sociedade agrava o problema e dificulta a conservação da fauna brasileira.

Portanto, é necessário combater a extinção de espécies e preservar o equilíbrio ecológico. Para isso, o Governo Federal, por meio dos órgãos ambientais, deve ampliar a fiscalização e combater o desmatamento e o tráfico de animais. Além disso, as escolas e os meios de comunicação devem promover campanhas de conscientização sobre a importância da biodiversidade. Assim, será possível proteger a fauna brasileira e garantir a preservação dos ecossistemas para as futuras gerações.`
  },

  {
    titulo: "Exploração Espacial no Século XXI",
    texto: `Desde o início da corrida espacial, no século XX, a humanidade passou a ampliar seus conhecimentos sobre o Universo e a desenvolver tecnologias capazes de transformar a vida em sociedade. No século XXI, esse processo ganhou ainda mais força com o crescimento de empresas privadas e de novas missões espaciais. Entretanto, embora a exploração do espaço represente importantes avanços científicos, ela também apresenta desafios relacionados à desigualdade social e aos impactos ambientais. Dessa forma, torna-se necessário conciliar o progresso científico com a responsabilidade social.

Em primeiro lugar, é importante destacar que os investimentos na exploração espacial podem contribuir para o desenvolvimento tecnológico. Tecnologias criadas para missões espaciais podem posteriormente ser utilizadas em áreas como comunicação, meteorologia e monitoramento ambiental. Nesse sentido, o avanço científico pode trazer benefícios para a sociedade. Contudo, quando os investimentos são concentrados em projetos de alto custo enquanto problemas básicos, como pobreza, fome e falta de acesso à educação, permanecem, surge um questionamento sobre a distribuição dos recursos e das prioridades sociais.

Além disso, a intensificação das atividades espaciais gera impactos que não podem ser ignorados. O aumento do número de satélites e lançamentos contribui para a formação de detritos espaciais, que podem colocar outras missões em risco e dificultar a utilização sustentável da órbita terrestre. Assim, o desenvolvimento tecnológico precisa estar acompanhado de medidas de controle e cooperação internacional, evitando que a busca pelo conhecimento provoque novos problemas ambientais e tecnológicos.

Portanto, é fundamental buscar um equilíbrio entre exploração espacial e responsabilidade social. Para isso, governos e organizações internacionais devem estabelecer normas para controlar os impactos ambientais das atividades espaciais, além de fiscalizar empresas privadas do setor. Paralelamente, os investimentos científicos devem promover benefícios sociais, direcionando parte dos recursos e das tecnologias desenvolvidas para áreas como educação, comunicação e preservação ambiental. Dessa maneira, será possível garantir que a exploração espacial avance sem deixar de considerar as necessidades da sociedade e a preservação do planeta.`
  },

  {
    titulo: "Preservação dos Monumentos Históricos",
    texto: `Os monumentos históricos são importantes para a sociedade, pois representam acontecimentos, culturas e costumes que fazem parte da história de um país. No Brasil, existem diversos patrimônios que ajudam a preservar a memória nacional. Porém, muitos deles enfrentam problemas relacionados à falta de manutenção, ao abandono e à ação do próprio ser humano. Nesse contexto, a falta de investimentos e de conscientização da população são alguns dos principais desafios para a preservação desses espaços.

Primeiramente, a falta de investimentos é um dos fatores que prejudicam a conservação dos monumentos históricos. Muitos locais precisam de reformas e cuidados constantes para evitar sua deterioração. Entretanto, quando não existem recursos suficientes para realizar essas ações, os patrimônios podem sofrer danos que, com o tempo, tornam sua recuperação mais difícil e cara. Dessa forma, é fundamental que o poder público dê maior atenção à preservação desses locais.

Além disso, a falta de conscientização da população também contribui para esse problema. Atos de vandalismo, pichações e descarte inadequado de lixo podem danificar monumentos que possuem grande importância cultural. Muitas vezes, isso acontece porque parte da sociedade não conhece o valor histórico desses espaços. Por isso, a educação pode contribuir para formar cidadãos mais conscientes sobre a importância de proteger o patrimônio histórico brasileiro.

Portanto, é necessário que o poder público, em parceria com as escolas e instituições culturais, desenvolva ações voltadas à preservação dos monumentos históricos. O Governo deve ampliar os investimentos em restauração e manutenção, enquanto as escolas podem promover projetos e visitas educativas que mostrem aos estudantes a importância desses patrimônios. Assim, será possível reduzir os danos causados pelo abandono e pela falta de conscientização, garantindo que a história e a cultura brasileira sejam preservadas para as próximas gerações.`
  },

  {
    titulo: "Hiper-realidade e Algoritmos",
    texto: `Segundo o filósofo Jean Baudrillard, a hiper-realidade ocorre quando representações passam a influenciar indivíduos sobre aquilo que é real. Essa ideia pode estar relacionada com a prática de consumo da sociedade que muitas das vezes é influenciada pela mídia. Diante disso, percebe-se prioritariamente que as redes sociais são as principais causadoras da desinformação agregada ao estilo de vida, juntamente com as inteligências artificiais usadas como auxílio para a criação de imagens e vídeos.

Em primeiro lugar, algoritmos são projetados para entreter o público de conforme os conteúdos consumidos por aquele indivíduo, contribuindo para expandir o acesso a essa ferramenta capaz de alterar o modo de vida. Dessa forma, quanto mais uma pessoa consome determinado conteúdo, maior é a possibilidade de receber publicações semelhantes, isso pode influenciar as suas escolhas, seus interesses e até mesmo sua forma de enxergar a realidade, visto que o indivíduo passa a ter contato frequente com determinadas referências. Assim, os algoritmos podem contribuir para a criação de uma realidade personalizada, onde os conteúdos apresentados passam a afetar os hábitos da sociedade.

Além disso, a utilização das inteligências artificiais na criação de imagens e vídeos também contribui para esse problema. Atualmente, conteúdos produzidos ou modificados por essas ferramentas podem apresentar situações que não correspondem necessariamente com a realidade. Como consequência, a circulação dessas produções nas redes sociais pode dificultar a identificação entre informações verdadeiras e falsas. Nesse sentido, a ideia de hiper-realidade apresentada por Jean Baudrillard permanece evidente, pois representações divulgadas pela mídia podem adquirir uma influência maior do que a própria realidade. Dessa maneira, a sociedade pode ser influenciada por referências digitais na construção de seus pensamentos, comportamentos e hábitos de consumo.

Portanto, é necessário buscar formas de diminuir os impactos causados pela influência dos algoritmos na sociedade. Para isso, as plataformas digitais, em parceria com órgãos responsáveis pela educação e comunicação, devem promover campanhas de conscientização sobre o funcionamento dos algoritmos e a identificação de conteúdo produzidos ou modificados por inteligência artificial. Essa ação deve ocorrer por meio das próprias redes sociais, com vídeos informativos e avisos sobre conteúdos que podem ser potencialmente manipulados, a fim de desenvolver maior capacidade de análise entre os usuários. Sendo assim, será possível reduzir os efeitos da desinformação e permitir que a sociedade tenha uma relação mais consciente com a mídia e com os conteúdos consumidos diariamente.`
  },

  {
    titulo: "Cultura Fitness e Padrões de Beleza",
    texto: `A busca por saúde e bem-estar ganhou um espaço sem precedentes na sociedade moderna. Academias lotadas, alimentação equilibrada e a rotina de exercícios físicos são celebrados como pilares de uma vida longa e funcional. No entanto, existe uma linha tênue entre a cultura fitness voltada para o autocuidado e a obsessão pela busca de uma estética inatingível.

Impulsionada pelas redes sociais, a indústria do corpo perfeito frequentemente vende padrões irrealistas, moldados por filtros, ângulos estudados e, em muitos casos, procedimentos estéticos não revelados. Essa comparação constante transforma o cuidado com a saúde em uma fonte de frustração e ansiedade. Quando o valor de uma pessoa passa a ser medido pelo percentual de gordura ou pela definição muscular, o bem-estar físico e mental é comprometido.

A verdadeira cultura fitness deve focar na funcionalidade, na energia e na longevidade, respeitando a diversidade de corpos e limites de cada indivíduo. Cuidar de si mesmo é um ato de respeito ao próprio corpo, e não uma punição para alcançar um ideal fabricado. Encontrar o equilíbrio entre metas saudáveis e a aceitação pessoal é o único caminho sustentável para o real bem-estar.`
  },

  {
    titulo: "Inclusão Digital no Brasil",
    texto: `Segundo o filósofo Pierre Lévy, as tecnologias digitais ampliam as possibilidades de participação social compartilhamento de conhecimento. No entanto, essa realidade ainda não é acessível a todos os brasileiros. Embora a Internet tenha se tornado indispensável para atividades como educação, trabalho e comunicação, parte da população permanece excluída desse cenário. Diante dessa perspectiva, discutir os caminhos e desafios da inclusão digital do Brasil é essencial para compreender os impactos da desigualdade social e da insuficiência de investimentos em infraestrutura tecnológica.

Em primeiro lugar, a desigualdade socioeconômica constitui um dos principais entraves à inclusão digital no Brasil. A esse respeito, a Constituição Federal de 1988 assegura a todos os cidadãos o direito à igualdade de oportunidades. Entretanto, essa garantia não é amplamente concretizada visto que muitas famílias de baixa renda não possuem acesso a dispositivos eletrônicos e à Internet de qualidade. Por conseguinte, parcela significativa da população encontra dificuldades para estudar, buscar emprego e acessar serviços essenciais, perpetuando esse cenário de marginalização tecnológica.

Além disso, a insuficiência da infraestrutura tecnológica contribui para a manutenção do problema. Sob essa ótica, Marshall McLuhan desenvolveu o conceito de "aldeia global", segundo o qual os avanços tecnológicos aproximam pessoas e facilitam a circulação de informações. Todavia, essa realidade não contempla todos os brasileiros, visto que diversas regiões do país ainda enfrentam dificuldades relacionadas a cobertura e à qualidade de rede. Essa carência de investimentos impede que os benefícios da conectividade alcancem a toda população.

Portanto, torna-se imprescindível a adoção de medidas que promovam a inclusão digital no Brasil. Para isso, o Ministério das Comunicações, em parceria com as empresas de telecomunicações, deve ampliar a infraestrutura de Internet em regiões periféricas e rurais, através de investimentos e incentivos fiscais destinados à expansão da cobertura de rede. Ademais, o Ministério da Educação deve implementar programas de capacitação tecnológica nas escolas públicas, com oferta de equipamentos e cursos de letramento digital aos estudantes. Dessa maneira, será possível democratizar o acesso às tecnologias, reduzir as desigualdades sociais e garantir uma participação mais efetiva dos cidadãos na sociedade contemporânea.`
  },

  {
    titulo: "Apostas Esportivas e Endividamento",
    texto: `O livro "O Jogador" de Fiódor Dostoiévski, narra a trajetória de um homem cuja a vida é arruinada pela dependência nos jogos, retratando a realidade de muitos jovens brasileiros acerca das bets. Com isso, o endividamento e a influência exercida pelas mídias digitais apresenta-se como desafios relevantes na sociedade brasileira.

Nesse contexto, grande parte das famílias brasileiras enfrentam algum nível de endividamento, e o perfil mais vulnerável é composto por homens e famílias de baixa renda, o que evidência os métodos usados para o ganho de renda de forma fácil, como as bets. Dessa maneira, colaborando para o endividamento dos jovens brasileiros, que muita das vezes são influenciados por criadores de conteúdo famosos, prometendo diversão e, em simultâneo, ganho financeiro.

Diante disso, influenciadores digitais contribuem significativamente para o sucesso dos jogos de azar. Ademais, o crescimento contínuo da Internet contribui para expandir abruptamente a facilidade de apostar, com vários sites e plataformas, mas com mecanismos de proteção ainda insuficientes.

Portanto, o Governo Federal deve ampliar a fiscalização das plataformas de apostas e regulamentar a divulgação nas redes sociais, por meio da criação de leis mais rigorosas e campanhas de conscientização, de modo ao endividamento e a dependência associados aos jogos de azar.`
  },

  {
    titulo: "Mudanças no Ciclo da Água",
    texto: `O filme O Dia Depois de Amanhã dirigido por Roland Emmerich ilustra eventos climáticos decorrent do desequilíbrio ambiental, demonstrando como as mudanças no ciclo hidrológico podem causar prejuízos econômicos e desestruturação social. Nesse contexto, observa-se que tal problemática se baseia, sobretudo, na desintegração ecológica e na disfunção social relacionadas ao meio ambiente.

Diante desse cenário a degradação ambiental está diretamente relacionada à ação humana dentro da natureza, negligenciando seu estado constante como o ciclo da água. Acerca disso, o Estado deve ter seu devido papel em preservar o meio ambiente onde há habitat de múltiplas espécies que atuam em cooperação umas com as outras, sendo assim, uma vez que a remoção de vegetação do solo ocorre, a água deixa de se infiltrar no ambiente, o que intensifica períodos de seca e favorece a ocorrência de enchentes.

Nesse sentido, a atuação da sociedade no cenário, exprime negligência quanto à preservação ambiental, evidenciando o descaso coletivo diante da degradação da natureza. Dessa forma, priorizam-se os interesses econômicos de grupos privilégiados em detrimento da sustentabilidade, intensificando os impactos hidrológicos e contribuindo para o agravamento da desigualdade social sobretudo em áreas mais vulneráveis.

Em suma, as mudanças no ciclo hídrico e a intensificação da seca evidenciam a necessidade de intervenção estatal, nesse sentido cabe o governo promover investimentos em infraestrutura, além de implementar campanhas educativas com o objetivo de conscientização. Dessa forma, será possível promover o equilíbrio do ciclo hidrológico e reduzir as desigualdades sociais, principalmente em áreas vulneráveis.`
  },

  {
    titulo: "Uso Indevido de Canetas Emagrecedoras",
    texto: `Segundo Bauman, a sociedade contemporânea valoriza soluções rápidas, o que contribui para o uso indevido de métodos para o emagrecimento, como canetas emagrecedoras. Neste contexto, a saúde populacional e a interferência da mídia na aparência estética, apresenta-se como problema principal.

Diante disso, a pressão dos indivíduos para obterem o "corpo perfeito", leva a terem ansiedade, depressão e cometerem o abuso de certas substâncias, como Ozempic, sem prescrições médicas, o que é perigoso para a saúde.

No entanto, a influência midiática na sociedade, relacionada ao padrão de corpo ideal, gera insegurança em pessoas de estatura comum, levando-as a buscar soluções imediatistas e, muitas vezes, prejudiciais à saúde. Nesse cenário, a propagação de conteúdos nas redes sociais intensifica a comparação entre indivíduos? reforçando um modelo estético irreal e excludente. Como consequência, muitos recorrem ao uso indevido de medicamentos sem orientação profissional, ignorando os riscos envolvidos.

Além disso, a falta de informação adequada sobre os efeitos colaterais desses substâncias agrava o problema. Sem acompanhamento médico, o uso dessas canetas pode desencadear complicações sérias, comprometendo o bem-estar físico e mental dos usuários.

Portanto, tornar-se necessário combater o uso indiscriminado de métodos de emagrecimento na sociedade. Para isso, o Ministério da Saúde, em parceria com as mídias digitais, deve promover campanhas de informativas por meio das redes sociais e de anúncios televisivos, esclarecendo os riscos do uso indevido de medicamentos e incentivando a buscar por orientação profissional. Além disso, as escolas devem abordar a temática da saúde mental e da aceitação corporal em projetos pedagógicos, a fim de reduzir a influência de padrões estéticos irreais. Dessa forma, será possível minimizar os impactos negativos dessa problemática na saúde da população.`
  },

  {
    titulo: "Inteligência Artificial e Deepfakes",
    texto: `O uso das inteligências artificiais têm impactado a rotina da sociedade, embora sejam utilizadas de forma positiva, o uso das mesmas distorcem figuras políticas e culturais por meio de imagens e vídeos alterados, manipulando indivíduos desinformados e gerando suspeita sobre aqueles que tem conhecimento sobre os conteúdos produzidos.

Nesse contexto, Jean Baudrillard afirma que vivemos em um mundo de "hiper-realidade", onde a simulação torna-se mais realista do que é a realidade. Com isso, pessoas fragilizadas são influenciadas pelas deepfakes, passando a confiar ou até investir financeiramente conteúdos falsos, sendo manipulados por tecnologias que apresentam facilidade na criação de materiais altamente convincentes.

Diante disso, percebe-se que a falta de educação midiática contribui significativamente para a disseminação desses conteúdos. Grande parte da população não possui conhecimento suficiente para identificar informações manipuladas, o que favorece a propagação de notícias falsas e golpes virtuais. Além disso, a rápida evolução das inteligências artificiais supera a capacidade de fiscalização de órgãos responsáveis, ampliando ainda mais os riscos sociais.

Portanto, tornar-se essencial a adoção de medidas para mitigar os impactos negativos das inteligências artificiais. O governo deve investir em políticas públicas voltadas à educação digital, promovendo senso crítico na população. Bem como, as empresas de tecnologia devem aprimorar sistemas de verificação e detecção de conteúdos manipulados. Igualmente, cabe ao indivíduo adotar uma postura crítica diante das informações consumidas, verificando fontes e evitando o compartilhamento de conteúdos duvidosos. Assim, com a atuação conjunta entre o Estado, empresas e sociedade, será possível reduzir a influência de conteúdos falsos e preservar a confiabilidade no ambiente digital.`
  },

  {
    titulo: "Redação 13 — A adicionar",
    texto: "",
    pendente: true
  },
  {
    titulo: "Redação 14 — A adicionar",
    texto: "",
    pendente: true
  },
  {
    titulo: "Redação 15 — A adicionar",
    texto: "",
    pendente: true
  }
];

/* ==========================================
   3. EXIBIR LINHA DO TEMPO
========================================== */

const timeline = document.getElementById("timeline");

if (timeline) {
  escolas.forEach((escola, indice) => {
    const item = document.createElement("article");
    item.className = "timeline-item";

    const card = document.createElement("div");
    card.className = "timeline-card";

    const periodo = document.createElement("span");
    periodo.className = "periodo";
    periodo.textContent = escola.periodo;

    const titulo = document.createElement("h3");
    titulo.textContent = escola.nome;

    const descricao = document.createElement("p");
    descricao.textContent = escola.texto;

    const foto = document.createElement("img");
    foto.src = escola.foto;
    foto.alt = "Memória escolar: " + escola.nome;
    foto.loading = "lazy";

    const placeholder = document.createElement("div");
    placeholder.className = "foto-placeholder";
    placeholder.textContent =
      "📷 Adicione uma foto desta etapa escolar";

    foto.addEventListener("load", () => {
      placeholder.remove();
    });

    foto.addEventListener("error", () => {
      foto.remove();
    });

    card.append(periodo, titulo, descricao, foto, placeholder);
    item.appendChild(card);
    timeline.appendChild(item);
  });
}

/* ==========================================
   4. CARDS DAS REDAÇÕES
========================================== */

const grid = document.getElementById("redacoesGrid");
const busca = document.getElementById("busca");
const contador = document.getElementById("contador");

const leitor = document.getElementById("leitor");
const modalTitulo = document.getElementById("modalTitulo");
const modalTexto = document.getElementById("modalTexto");
const fechar = document.getElementById("fechar");

function abrirRedacao(redacao) {
  if (!leitor || redacao.pendente) return;

  modalTitulo.textContent = redacao.titulo;
  modalTexto.textContent = redacao.texto;

  if (!leitor.open) {
    leitor.showModal();
  }
}

function criarCard(redacao, indice) {
  const card = document.createElement("article");
  card.className = "redacao-card";

  if (redacao.pendente) {
    card.classList.add("pendente");
  }

  const numero = document.createElement("span");
  numero.className = "numero";
  numero.textContent =
    "REDAÇÃO " + String(indice + 1).padStart(2, "0");

  const titulo = document.createElement("h3");
  titulo.textContent = redacao.titulo;

  const resumo = document.createElement("p");

  resumo.textContent = redacao.pendente
    ? "Espaço reservado para uma nova produção textual."
    : redacao.texto.slice(0, 145).trim() + "...";

  const botao = document.createElement("button");
  botao.type = "button";

  if (redacao.pendente) {
    botao.textContent = "Aguardando texto";
    botao.disabled = true;
  } else {
    botao.textContent = "Ler redação →";
    botao.addEventListener("click", () => {
      abrirRedacao(redacao);
    });
  }

  card.append(numero, titulo, resumo, botao);
  return card;
}

function renderizarRedacoes(filtro = "") {
  if (!grid) return;

  grid.replaceChildren();

  const termo = filtro.trim().toLocaleLowerCase("pt-BR");

  const resultados = redacoes
    .map((redacao, indice) => ({ redacao, indice }))
    .filter(({ redacao }) =>
      redacao.titulo.toLocaleLowerCase("pt-BR").includes(termo)
    );

  resultados.forEach(({ redacao, indice }) => {
    grid.appendChild(criarCard(redacao, indice));
  });

  if (resultados.length === 0) {
    const aviso = document.createElement("p");
    aviso.className = "sem-resultados";
    aviso.textContent = "Nenhuma redação encontrada.";
    grid.appendChild(aviso);
  }

  if (contador) {
    contador.textContent =
      resultados.length + " de " + redacoes.length + " redações";
  }
}

renderizarRedacoes();

if (busca) {
  busca.addEventListener("input", (evento) => {
    renderizarRedacoes(evento.target.value);
  });
}

/* ==========================================
   5. FECHAR JANELA DE LEITURA
========================================== */

if (fechar && leitor) {
  fechar.addEventListener("click", () => {
    leitor.close();
  });

  leitor.addEventListener("click", (evento) => {
    if (evento.target === leitor) {
      leitor.close();
    }
  });
}

/* ==========================================
   6. MENU PARA CELULARES
========================================== */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const aberto = nav.classList.toggle("ativo");

    menuBtn.setAttribute("aria-expanded", String(aberto));
    menuBtn.setAttribute(
      "aria-label",
      aberto ? "Fechar menu" : "Abrir menu"
    );

    menuBtn.textContent = aberto ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("ativo");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Abrir menu");
      menuBtn.textContent = "☰";
    });
