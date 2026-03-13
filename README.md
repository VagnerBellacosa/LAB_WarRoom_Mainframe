# 🛰️ IBM MVS Operations War Room — 3270 SysProg Crisis Simulator

Um simulador avançado de troubleshooting para ambientes **IBM Mainframe (MVS / z/OS)**, reproduzindo um centro de operações em modo de crise com interface estilo **terminal 3270 + SDSF**.

Projetado para treinamento de **SysProg, operadores e profissionais de infraestrutura**, o projeto oferece um laboratório interativo totalmente web, sem necessidade de acesso a um mainframe real.

------

# 🛰️ IBM MVS Operations War Room — 3270 SysProg Crisis Simulator

![Version](https://img.shields.io/badge/version-1.0-blue)
![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Web-black)
![Mainframe](https://img.shields.io/badge/IBM-Z%20Compatible-ff9900)
![Language](https://img.shields.io/badge/HTML%2FCSS%2FJS-Vanilla-yellow)
![Training](https://img.shields.io/badge/use-Training-blueviolet)
![Crisis Mode](https://img.shields.io/badge/mode-CRISIS-red)

## 🎯 Objetivo

Fornecer um ambiente realista para:

- 🧠 Treinamento de troubleshooting em z/OS
- 🎓 Capacitação de operadores e SysProgs
- 🧪 Simulação de incidentes críticos
- 🏫 Uso educacional em cursos e workshops
- 🎮 Aprendizado gamificado sem risco operacional

------

## 🖥️ Visão Geral

O simulador reproduz um **War Room corporativo** com:

- Painel de status estilo hardware MVS
- Console 3270 interativo
- Tela SDSF simulada
- Incidentes aleatórios e escaláveis
- Comandos operacionais
- Mensagens críticas (WTOR-like)
- Contador global de presença
- Interface retro-industrial realista

------

## ✨ Principais Funcionalidades

### 🟢 Painel MVS com LEDs dinâmicos

Simula indicadores físicos de operação:

- CPU activity
- Channel utilization
- I/O status
- VTAM
- JES2 Spool
- Tape mount required

Os LEDs mudam conforme eventos simulados.

------

### 🟩 Terminal 3270 / SDSF Realista

- Layout fiel ao estilo texto do 3270
- Linha de comando operacional
- Execução via ENTER
- Mensagens do sistema no display
- Sensação autêntica de console mainframe

------

### 🚨 Simulação de Incidentes

Inclui dezenas de cenários inspirados em situações reais:

- ABENDs clássicos (S0C4, S0C7, etc.)
- Spool crítico
- Falhas de subsistemas
- Problemas de storage
- Segurança (RACF-like)
- I/O errors
- Deadlocks e contenção de recursos
- Necessidade de IPL
- Flood de console
- WTOR (mensagens aguardando operador)

Eventos podem escalar ao longo do tempo (Crisis Level).

------

### ⌨️ Comandos Operacionais Suportados

Exemplos implementados:

```
ST        → Status
DA        → Active Users
LOG       → System Log
/CANCEL   → Cancel job
$P job    → Hold job
$A job    → Release job
D U       → Display units
IPL       → Attempt IPL (bloqueado)
```

------

### 🆘 Painel de Ajuda (PF1)

Pressionar **F1** exibe um painel de ajuda estilo ISPF com os comandos disponíveis.

------

### 🌍 Contador Global de Visitantes (REAL)

Utiliza API externa para contabilizar acessos reais ao simulador:

- Persistente globalmente
- Não depende de cookies locais
- Atualização automática
- Visual estilo painel NOC

------

### 🎚️ Crisis Mode Progressivo

O sistema aumenta gradualmente o nível de crise:

- Incidentes mais frequentes
- Complexidade crescente
- Sensação de degradação operacional

------

## 🧱 Arquitetura Técnica

O projeto é totalmente client-side:

- HTML5
- CSS3 (animações e efeitos visuais)
- JavaScript puro (Vanilla JS)
- Sem dependências externas obrigatórias
- Funciona offline (exceto contador real)

------

## 📂 Estrutura do Projeto

```
/mvs-warroom-simulator
│
├── index.html      # Interface principal
├── warroom.css     # Estilo visual
├── warroom.js      # Lógica do simulador
└── README.md       # Documentação
```

------

## 🚀 Como Executar

### Método simples

1. Baixe ou clone o projeto
2. Abra o arquivo `index.html` no navegador
3. Comece a operar o console

Nenhuma instalação é necessária.

------

## 🌐 Hospedagem Recomendada

Funciona perfeitamente em:

- GitHub Pages
- Blogspot (Blogger)
- Netlify
- Vercel
- Servidores web estáticos
- Ambientes educacionais offline

------

## 👨‍💻 Casos de Uso

### 🎓 Educação

- Cursos técnicos de mainframe
- Universidades
- Treinamento corporativo
- Workshops

### 🏢 Empresas

- Onboarding de operadores
- Simulação de incidentes
- Treinamento sem impacto em produção

### 🎥 Conteúdo e Comunidade

- Demonstrações didáticas
- Vídeos educacionais
- Divulgação tecnológica
- Preservação histórica da computação

------

## ⚠️ Limitações

Este simulador:

- Não substitui ferramentas reais de operação
- Não executa comandos z/OS reais
- Não se conecta a sistemas IBM
- É uma simulação educacional

------

## 🔮 Possíveis Evoluções

Arquitetura permite expansão para:

- Simulação completa de SDSF (ST/DA/I/O/H)
- MCS Console
- CICS operator panel
- RACF incident simulator
- DB2 alerts
- Sistema de missões
- Pontuação e certificação
- Multiplayer cooperativo
- Integração com LMS
- Dashboard NOC avançado
- Digital Twin de datacenter IBM Z

------

## 🏛️ Público-Alvo

- System Programmers (SysProg)
- Operadores de mainframe
- Especialistas em z/OS
- Instrutores técnicos
- Entusiastas de computação clássica
- Profissionais de infraestrutura crítica

------

## 📜 Licença

Projeto educacional de código aberto.
 Sinta-se livre para usar, modificar e adaptar para fins não comerciais ou acadêmicos.

Se copiar apenas peço que faça referência a este projeto.

Evolua e inclua novas situações.

------

## 🙌 Créditos

Inspirado na operação real de ambientes IBM Mainframe e nos centros de controle corporativos que sustentam sistemas críticos ao redor do mundo.

Experiencia de Vagner R. Bellacosa e apoio de amigos e colaboradores.

------

## ⭐ Contribuições

Sugestões, melhorias e novos cenários são bem-vindos.

Se for util para você, divulgue, deixe estrela e um dia me pague um café.

------

## 🛰️ “Operate as if production depends on you.”

Porque, no mundo real… depende.
