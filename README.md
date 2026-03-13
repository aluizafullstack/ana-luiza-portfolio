<div align="center">
 
# 💻 Portfólio - Ana Luiza

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)

Portfólio pessoal desenvolvido para apresentar meus projetos, habilidades e trajetória como **Desenvolvedora Full Stack em desenvolvimento**.

O site possui uma interface diferenciada que combina uma página tradicional com um **terminal interativo**, permitindo navegação através de comandos e criando uma experiência inspirada em ambientes de desenvolvimento.
</div>

---

# 📑 Sumário

* [Sobre mim](#-sobre-mim)
* [Sobre o projeto](#-sobre-o-projeto)
* [Funcionalidades principais](#-funcionalidades-principais)
* [Interface e interatividade](#-interface-e-interatividade)
* [Apresentação dos projetos](#-apresentação-dos-projetos)
* [Skill Tree Animada](#-skill-tree-animada)
* [Evolução do projeto](#-evolução-do-projeto)
* [Tecnologias utilizadas](#-tecnologias-utilizadas)
* [Design](#-design)
* [Desafios do desenvolvimento](#-desafios-do-desenvolvimento)
* [Aprendizados com o projeto](#-aprendizados-com-o-projeto)
* [Estrutura do projeto](#-estrutura-do-projeto)
* [Como executar o projeto](#-como-executar-o-projeto)
* [Objetivo do projeto](#-objetivo-do-projeto)
* [Autora](#-autora)

---

# 🧑‍💻 Sobre mim

Olá! Meu nome é **Ana Luiza** e estou em processo de formação na área de **desenvolvimento de software**, com interesse em atuar futuramente como **Desenvolvedora Full Stack**.

Tenho buscado desenvolver minhas habilidades através de cursos, projetos práticos e estudo constante de documentação técnica. Acredito que a prática através da construção de projetos é uma das formas mais eficazes de consolidar conhecimentos na programação.

Este portfólio foi criado como parte desse processo de aprendizado, permitindo aplicar conceitos de **HTML, CSS e JavaScript**, além de explorar novas ideias de interface e interatividade.

Durante o desenvolvimento do projeto procurei ir além do conteúdo apresentado em aula, pesquisando soluções em **documentações oficiais** e experimentando recursos como **animações em CSS**, **efeitos 3D** e **interações com JavaScript**.

Meu objetivo é continuar evoluindo na área de desenvolvimento, aprofundando conhecimentos em tecnologias web e participando de projetos que contribuam para meu crescimento profissional.

---

# ✨ Sobre o projeto

Este projeto possui **duas versões principais**.

A **primeira versão** foi desenvolvida durante as aulas das **Trilhas Rápidas**, como parte das atividades práticas de aprendizado em desenvolvimento web.

Posteriormente, o projeto foi **evoluído e atualizado**, utilizando como referência os conteúdos estudados nas **20 horas do curso Introdução à Programação Front-End e Back-End**.

Nesta atualização foram aplicadas melhorias na estrutura do código, organização do layout e interatividade da interface.

Além disso, durante o desenvolvimento da nova versão, foram implementados **recursos que não haviam sido abordados diretamente nas aulas**, exigindo pesquisa em **documentações de HTML, CSS e JavaScript**.

---

# ⚙️ Funcionalidades principais

O portfólio apresenta diversas funcionalidades interativas desenvolvidas com **HTML, CSS e JavaScript**, buscando criar uma experiência diferenciada para o usuário.

### 🖥️ Terminal interativo

* Terminal lateral inspirado em interfaces de desenvolvimento
* Navegação através de comandos
* Comandos disponíveis: `sobre`, `projetos`, `habilidades` e `contato`

### 📐 Layout dinâmico

* Estrutura dividida em **conteúdo principal (70%)** e **terminal (30%)**
* Possibilidade de **fechar o terminal**
* Quando fechado, o site **se expande para 100% da largura**
* Botão que permite **reabrir o terminal e restaurar o layout original**

### 🎴 Apresentação de projetos em 3D

* Cards de projetos organizados em estrutura tridimensional
* Animação onde os projetos **giram entre si**
* Efeito **flip ao passar o mouse**
* No verso do card aparece o **título e o resumo do projeto**

### 🌱 Skill Tree animada

* Apresentação das habilidades em formato de **árvore de conhecimento**
* Animação representando o **crescimento das habilidades**
* A animação inicia quando o usuário **chega à seção da página**

---

# 🖥️ Interface e interatividade

O layout do portfólio é dividido em duas áreas principais:

* **70% da tela → Conteúdo principal do site**
* **30% da tela → Terminal interativo**

O terminal pode ser **aberto ou fechado dinamicamente**, criando uma experiência inspirada em ambientes de desenvolvimento.

Comandos disponíveis no terminal:

sobre
projetos
habilidades
contato

---

# 🧩 Apresentação dos projetos

Os projetos são apresentados utilizando **efeitos visuais em 3D**.

Recursos implementados:

* Cards organizados em **estrutura tridimensional**
* Animação onde os projetos **giram entre si**
* Efeito **flip (rotação do card)** ao passar o mouse
* No verso do card são exibidos:

  * título do projeto
  * breve descrição do projeto

Esses efeitos foram desenvolvidos utilizando propriedades de CSS como:

* `transform`
* `rotate`
* `perspective`
* `transition`

---

# 🌱 Skill Tree Animada

Na versão inicial do site, as habilidades eram apresentadas utilizando **tabelas**.

Na versão atual, essa seção foi evoluída para uma **Skill Tree animada**, representando o crescimento das habilidades ao longo do aprendizado.

Funcionamento da animação:

1. Uma **semente** aparece na base da seção
2. O **tronco da árvore cresce gradualmente**
3. Surgem os **galhos** representando áreas de conhecimento
4. As **habilidades aparecem nos galhos**

A animação é iniciada apenas quando o usuário chega à seção, utilizando **Intersection Observer em JavaScript**.

---

# 📈 Evolução do projeto

O projeto foi desenvolvido em etapas, acompanhando o processo de aprendizado.

### Versão 1 – Desenvolvimento inicial

Criada durante as aulas das **Trilhas Rápidas**.

Nesta versão já existia a proposta principal do site:

* Interface dividida entre **site e terminal**
* Conteúdo do site e terminal exibidos simultaneamente
* Estrutura inicial das seções do portfólio
* Habilidades apresentadas em **tabelas**

Essa versão teve como objetivo aplicar **os primeiros conceitos de HTML e CSS aprendidos em aula**.

### Versão 2 – Evolução do projeto

Após os estudos do curso **Introdução à Programação Front-End e Back-End**, o projeto foi atualizado.

Uma das principais melhorias foi a interação entre **site e terminal**:

* Implementação de **animação de fechamento do terminal**
* Quando fechado, o **site se expande para 100% da largura**
* Um **botão permite reabrir o terminal**
* Ao abrir novamente, o layout retorna para:

  * **70% site**
  * **30% terminal**

Também foram adicionados:

* efeitos **3D para projetos**
* **animações em CSS**
* **Skill Tree animada**

---

# 🛠️ Tecnologias utilizadas

### Estrutura

* **HTML5**

### Estilização

* **CSS3**
* Flexbox
* Animações e transições
* Transformações 3D

### Interatividade

* **JavaScript**
* Manipulação de DOM
* Controle de animações
* Intersection Observer

### Tipografia

* **Google Fonts**
* **JetBrains Mono**

---

# 🎨 Design

Características do design:

* Gradiente radial no fundo
* Barra superior fixa
* Terminal lateral animado
* Tipografia moderna
* Paleta com tons de roxo

---

# 🧠 Desafios do desenvolvimento

Principais desafios enfrentados:

* Criar um layout dividido entre **site e terminal**
* Desenvolver **animações 3D**
* Evoluir a apresentação de habilidades
* Iniciar animações apenas quando visíveis
* Integrar **HTML, CSS e JavaScript**

---

# 📚 Aprendizados com o projeto

Durante o desenvolvimento deste portfólio foi possível consolidar diversos conhecimentos relacionados ao desenvolvimento web.

Entre os principais aprendizados obtidos com este projeto estão:

* Aplicação prática de **HTML semântico para organização de páginas**
* Utilização de **CSS para criação de layouts modernos e animações**
* Implementação de **efeitos visuais utilizando transformações 3D**
* Integração entre **HTML, CSS e JavaScript** para criação de interatividade
* Uso de **JavaScript para manipulação de classes e controle da interface**
* Utilização do **Intersection Observer** para iniciar animações apenas quando os elementos aparecem na tela
* Importância da **documentação oficial** como ferramenta de aprendizado e resolução de problemas

Além dos conhecimentos técnicos, o desenvolvimento deste projeto também contribuiu para aprimorar habilidades como **organização do código, planejamento de interface e evolução progressiva de um projeto ao longo do aprendizado**.

Para  ser possivel implementar algumas funcionalidades do site foi necessário utilizar de algumas tecnicas que ainda estou aprendendo, como:

⚙️ Arquitetura e Lógica de Interface

    Design Procedural com attr(id): Você faz o CSS "ler" o HTML para gerar conteúdo automático. Isso evita repetição de código (DRY - Don't Repeat Yourself).

    Lógica de Estado Global: Uso de classes no topo da árvore (.layout-mestre.fechado) para disparar uma reação em cadeia em elementos distantes, como o footer e o site-conteudo.

    Controle de UX com pointer-events: Desabilitar a interação do mouse em elementos decorativos (none) e forçar em elementos críticos (all !important) para garantir que o usuário consiga clicar em links dentro de animações 3D.

    Unidades de Medida Dinâmicas (ch): Uso da unidade baseada na largura do caractere para criar um input de terminal que parece real.

📐 Engenharia de Espaço e Geometria 3D

    Matemática de Posicionamento Circular: O uso de rotateY(calc(var(--i) * 90deg)) translateZ(350px) para criar um carrossel. Você calculou o raio e o ângulo de cada elemento no espaço tridimensional.

    Contexto de Perspectiva: Definição de perspective e transform-style: preserve-3d para que o navegador processe profundidade real, não apenas sombras.

    Técnica de Flip Card Profissional: Uso de backface-visibility: hidden para gerenciar o que acontece quando um elemento "mostra as costas", essencial para o efeito de virada de carta.

🎬 Animação e Motion Design

    Orquestração de Timelines (Cascata): Uso sequencial de transition-delay para criar uma coreografia visual onde cada parte da árvore nasce no tempo certo.

    Física do Movimento com Cubic-bezier: Substituição de movimentos robóticos por curvas de aceleração orgânicas que simulam inércia e velocidade real.

    Animações Cíclicas com infinite: Criação de loops de balanço suave (balancarFolha) que dão vida ao site sem exigir processamento constante de JavaScript.

    Gerenciamento de Estado de Animação: Uso de animation-play-state: paused no hover para permitir que o usuário interaja com um elemento que está em movimento.

💎 Estilização e Renderização Moderna

    Glassmorphism (Efeito Vidro): Uso de backdrop-filter: blur() com camadas de rgba para criar interfaces que parecem flutuar sobre o conteúdo.

    Iluminação Dinâmica: Uso de radial-gradient posicionado (circle at top left) para simular uma fonte de luz única no cenário escuro.

    Otimização de GPU: Uso extensivo de transform e opacity para animações. Isso faz com que o navegador use a placa de vídeo, mantendo o site rodando a 60 FPS (quadros por segundo).


---

# 📂 Estrutura do projeto

```
portfolio/

index.html  
style.css  
script.js  
Ana-Luiza.jpeg
projetos.png
README.md
```

---

# 🚀 Como executar o projeto

Como este projeto foi enviado em formato **.zip**, siga os passos abaixo para executá-lo:

1. **Extraia o arquivo .zip** em uma pasta no seu computador.

2. Após extrair, abra a pasta do projeto:

```
portfolio/
```

3. Localize o arquivo:

```
index.html
```

4. **Clique duas vezes no arquivo `index.html`** ou abra-o diretamente em um navegador (Google Chrome, Edge, Firefox, etc.).

O site será carregado localmente no navegador e todas as funcionalidades poderão ser visualizadas normalmente.

5. Para navegar entre as sessões do site, utilize o terminal, nele contem explicações de como é realizado.
* clique o cursor piscando e digite help. Após isso, terá explicações de como funcionada o terminal

---

# 📈 Objetivo do projeto

Este projeto foi criado para:

* Apresentar meus projetos
* Demonstrar minhas habilidades em desenvolvimento web
* Aplicar conhecimentos aprendidos em cursos
* Explorar novos conceitos através de **documentação técnica**

---


# 👩‍💻 Autora

**Ana Luiza**

Desenvolvedora Full Stack em desenvolvimento
