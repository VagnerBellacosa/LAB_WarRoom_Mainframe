# 📟 IBM MVS Operations War Room

## 🧑‍💻 Manual do Operador — Guia de Uso do Simulador 3270 / SDSF

Bem-vindo ao **Centro de Operações MVS em Modo de Crise**.

Este documento descreve como operar o simulador, interpretar eventos, utilizar comandos e responder a incidentes como um verdadeiro **System Programmer (SysProg)**.

> ⚠️ Este ambiente simula condições críticas. Proceda como se sistemas reais estivessem em risco.

------

## 🛰️ 1. Visão Geral da Interface

O simulador é dividido em três áreas principais:

### 🟥 Painel de Status (Topo)

Representa o estado do “hardware” e subsistemas.

**LEDs Indicadores**

| LED       | Significado                |
| --------- | -------------------------- |
| 🔴 CPU     | Atividade de processamento |
| 🟡 CHANNEL | Uso de canais de I/O       |
| 🟢 I/O     | Operação de dispositivos   |
| 🔵 VTAM    | Rede/SNA ativa             |
| ⚪ SPOOL   | Filas JES2                 |
| 🟠 TAPE    | Requisição de fita montada |

👉 LEDs podem piscar, apagar ou ativar conforme incidentes.

------

### 🌍 Painel GLOBAL OPS PRESENCE

Mostra o número total de acessos ao sistema.

- Contador global real
- Atualização periódica
- Representa presença operacional mundial

------

### 🖥️ Console Principal — Terminal 3270

Área de operação onde:

- Incidentes são exibidos
- Jobs são listados
- Mensagens críticas aparecem
- Comandos são executados

------

### ⌨️ Linha de Comando

Localizada na parte inferior do terminal:

```
===> _
```

Digite comandos e pressione **ENTER**.

------

## 🆘 2. Teclas Funcionais

### PF1 (F1) — HELP

Exibe o painel de ajuda operacional estilo ISPF.

------

## 🚨 3. Sistema de Incidentes

O simulador gera automaticamente situações críticas.

### 🧠 Tipos de Incidentes

#### 🔧 Batch / JES2

- Spool crítico
- Jobs em HOLD
- Filas bloqueadas
- Initiators inativos
- Output preso

------

#### 💥 ABENDs

Exemplos simulados:

- S0C4 — Storage violation
- S0C7 — Data exception
- S322 — Time limit exceeded
- SB37 — Falta de espaço
- S806 — Module not found

------

#### 💾 Storage e I/O

- Volume offline
- Dataset bloqueado
- Falhas de dispositivo
- Tape mount pendente
- Falta de espaço

------

#### 🌐 Subsistemas

- VTAM inativo
- CICS indisponível
- Falhas de subsistema
- Degradação sistêmica

------

#### 🔐 Segurança

- Violação de acesso
- Problemas RACF simulados
- Falhas de autorização

------

#### 🧯 Situações Críticas

- Flood de console
- Deadlock
- Contentions
- Necessidade de IPL
- WTOR aguardando operador

------

## ⏱️ 4. Nível de Crise (Crisis Level)

O sistema aumenta progressivamente a gravidade:

- Incidentes mais frequentes
- Impacto maior
- Sensação de degradação operacional

------

## ⌨️ 5. Comandos Operacionais Suportados

Digite os comandos exatamente como abaixo.

------

### 📊 Comandos SDSF

```
ST
```

Mostra/atualiza o status do sistema.

```
DA
```

Lista usuários ativos.

```
LOG
```

Exibe mensagens do sistema.

------

### 🛠️ Comandos de Operador JES2

```
/CANCEL jobname
```

Cancela um job ativo.

------

```
$P jobname
```

Coloca job em HOLD.

------

```
$A jobname
```

Libera job para execução.

------

### 🧭 Comandos de Diagnóstico

```
D U
```

Mostra status de dispositivos.

------

```
IPL
```

Tentativa de reinicialização do sistema
 (geralmente não autorizada no simulador).

------

## ❌ 6. Comandos Inválidos

Comandos não reconhecidos retornam:

```
UNKNOWN COMMAND
```

------

## 🧠 7. Estratégias de Troubleshooting

### 🔎 Quando ocorrer ABEND

1. Verifique o job afetado
2. Consulte logs (LOG)
3. Libere recursos ou cancele job se necessário

------

### 💾 Quando houver problemas de storage

- Verifique volumes
- Cheque dispositivos (D U)
- Libere datasets bloqueados

------

### 📼 Quando houver TAPE MOUNT REQUIRED

- Simular ação do operador
- Após novo incidente, LED de fita pode apagar

------

### 📊 Quando spool estiver crítico

- Cancelar jobs desnecessários
- Liberar output
- Reduzir carga

------

### 🧯 Quando houver WTOR

- Execute comandos apropriados
- Aguarde atualização do sistema

------

## 🧑‍🚀 8. Boas Práticas Operacionais

✔ Priorize incidentes críticos
 ✔ Evite comandos aleatórios
 ✔ Observe padrões nas mensagens
 ✔ Mantenha a calma sob pressão
 ✔ Pense como um SysProg real

------

## 🥚 9. Easter Eggs do Sistema

O simulador contém comportamentos ocultos para operadores atentos.

### 🕶️ Modo Clássico

Certas sequências de comandos podem revelar mensagens especiais.

------

### 🛰️ Mensagens Raras

Em níveis altos de crise, eventos incomuns podem surgir.

------

### 👀 Dica

Operadores experientes costumam testar comandos de diagnóstico mesmo sem instrução explícita.

------

## ⚠️ 10. Aviso Importante

Este é um ambiente educacional.

- Nenhum sistema real é afetado
- Nenhum comando é enviado a mainframes
- Não substitui treinamento oficial IBM

------

## 🏁 11. Objetivo do Operador

Manter o sistema operacional e evitar colapso total.

> 💬 “A ausência de mensagens é o maior sinal de sucesso.”

------

## 🛰️ 12. Procedimento de Emergência (Simulado)

Se a situação parecer fora de controle:

1. Avalie logs
2. Reduza carga
3. Libere recursos
4. Considere reinicialização (IPL)
5. Continue monitorando

------

## 🧭 13. Filosofia do War Room

Você não está apenas executando comandos.

Você está:

- Protegendo sistemas críticos
- Mantendo serviços essenciais
- Atuando sob pressão
- Representando a última linha de defesa operacional

------

## 🛰️ “Stay calm. Observe. Diagnose. Act.”