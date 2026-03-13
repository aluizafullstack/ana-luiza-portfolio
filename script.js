/* --- ELEMENTOS DA INTERFACE --- */
const layout = document.querySelector('.layout-mestre');
const abrirBotao = document.querySelector('.botao-terminal-abrir');
const terminalInput = document.getElementById('terminal-cmd');
const terminalContent = document.getElementById('terminal-content');
const display = document.getElementById('terminal-display');
const arvore = document.querySelector('.habilidades-arvore');

// Mapeamento de rotas para IDs do HTML
const caminhos = {
    '/sobre': 'sobre',
    '/projetos': 'projetos',
    '/habilidades': 'habilidades',
    '/contato': 'contato'
};

/* --- DICIONÁRIO DE COMANDOS (Lógica Simplificada) --- */
const acoesPeloComando = {
    'ls': () => {
        addMessage("user@visitante:~$ ls", 'user-cmd');
        addMessage(Object.keys(caminhos).join('   '), 'success-msg');
    },
    'help': () => {
        addMessage("[AJUDA] Comandos disponíveis:");
        addMessage("- cd /[comando]");
        addMessage("- ls: Lista diretórios");
        addMessage("- cd /[comando]: Navega até a seção");
        addMessage("Exemplo: cd /s + TAB -> irá completar o comando e aperte ENTER");
        addMessage("- clear: Limpa o terminal");
    },
    'clear': () => {
        if (terminalContent) terminalContent.innerHTML = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    'cd': (path) => {
        if (caminhos[path]) {
            executeNavigation(path, caminhos[path]);
        } else {
            addMessage(path ? `err: directory not found: ${path}` : "Uso: cd /diretorio", "error-msg");
        }
    }
};

/* --- LÓGICA DE ABRIR/FECHAR --- */
function toggleTerminal(setAberto) {
    layout?.classList.toggle('fechado', !setAberto);
    if (abrirBotao) abrirBotao.style.display = setAberto ? 'none' : 'block';
    if (setAberto) terminalInput?.focus();
}

document.getElementById('botao-fechar')?.addEventListener('click', () => toggleTerminal(false));
abrirBotao?.addEventListener('click', () => toggleTerminal(true));

/* --- ANIMAÇÃO DA ÁRVORE (INTERSECTION OBSERVER) --- */
const observarArvore = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("animacao");
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

if (arvore) observarArvore.observe(arvore);

/* --- FUNÇÕES AUXILIARES --- */
function addMessage(text, className = 'system-msg') {
    const msg = document.createElement('div');
    msg.className = className;
    msg.innerText = text;
    terminalContent?.appendChild(msg);
    if (display) display.scrollTop = display.scrollHeight;
}

async function executeNavigation(path, targetId) {
    addMessage(`user@visitante:~$ cd ${path}`, 'user-cmd');
    addMessage(`[INFO] Acessando ${path}...`);
    
    await new Promise(r => setTimeout(r, 200));
    
    const sessao = document.getElementById(targetId);
    if (sessao) {
        addMessage(`>> Movendo para ${path}`, 'success-msg');
        setTimeout(() => sessao.scrollIntoView({ behavior: 'smooth' }), 200);
    }
}

/* --- EVENTOS DO INPUT --- */
terminalInput?.addEventListener('keydown', function(event) {
    const fullCmd = this.value.trim().toLowerCase();
    const [command, path] = fullCmd.split(' ');

    // Autocompletar com TAB
    if (event.key === 'Tab') {
        event.preventDefault();
        if (command === 'cd' && path) {
            const typedPath = path.startsWith('/') ? path : '/' + path;
            const matches = Object.keys(caminhos).filter(s => s.startsWith(typedPath));
            if (matches.length === 1) {
                this.value = `cd ${matches[0]}`;
                this.style.width = (this.value.length + 1) + "ch";
            }
        }
    }

    // Executar com ENTER
    if (event.key === 'Enter') {
        if (acoesPeloComando[command]) {
            acoesPeloComando[command](path);
        } else if (command !== '') {
            addMessage(`sh: command not found: ${command}`, 'error-msg');
        }
        this.value = '';
        this.style.width = "10ch";
    }
});

// Ajuste dinâmico da largura conforme digita
terminalInput?.addEventListener('input', function() {
    this.style.width = (this.value.length + 1) + "ch";
});