const links = [

"https://eljefemidnightlunch.blogspot.com/2010/11/rexx-hardcore-no-zos-automacao-controle.html",
"https://eljefemidnightlunch.blogspot.com/2010/11/smpe-for-zos-uma-revisao.html",
"https://eljefemidnightlunch.blogspot.com/2010/12/ibm-mainframe-storage-management-no-zos.html",
"https://eljefemidnightlunch.blogspot.com/2010/12/os-50-principais-abends-em-cics.html",
"https://eljefemidnightlunch.blogspot.com/2026/02/50-erros-que-voce-pode-capturar-com-if.html",
"https://eljefemidnightlunch.blogspot.com/2026/02/ibm-champion-2026-once-again.html",
"https://eljefemidnightlunch.blogspot.com/2026/02/mainframe-meu-caro-ou-o-clube-do-blazer.html",
"https://eljefemidnightlunch.blogspot.com/2026/02/mainframe-nao-e-legado-e-estrategia.html",
"https://eljefemidnightlunch.blogspot.com/2026/02/o-dia-em-que-decretaram-morte-do.html",
"https://eljefemidnightlunch.blogspot.com/2026/02/se-voce-ainda-usa-subscript-o-batch-ja.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/badge-ibm-champion-class-2026-gratidao.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/bellacosa-mainframe-simulator-mainframe.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/call-sabedoria-using-padawan-o-guia.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/como-analisar-otimizar-e-evoluir-seu.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/da-sala-gelada-do-mainframe-nuvem.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/do-copy-ao-core-bancario-jornada-jedi.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/do-jcl-ao-kubernetes-como-um-padawan.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/do-racf-ao-zero-trust-o-manual-secreto.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/e-se-o-mainframe-pudesse-saltar-para-o.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/e-se-os-trolls-estivessem-treinando.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/e-se-voce-nunca-tivesse-escolhido-nada.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/ipl-simulator.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/manual-do-sysprog-moderno-python-no-zos.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/o-dia-em-que-um-padawan-cobol-enfrentou.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/o-maestro-invisivel-do-mainframe-como-o.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/o-mainframe-nao-morreu-ele-aprendeu.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/scotty-teletransporte-ja-o-dia-em-que-o.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/se-voce-nao-domina-sort-em-cobol-o.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/seu-cerebro-cobol-esta-pronto-para.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/seu-cobol-nao-esta-obsoleto-ele-so-nao.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/voce-nao-sabe-cobol-ainda-o-caminho.html",
"https://eljefemidnightlunch.blogspot.com/2026/03/zos-nao-e-cpu-o-poder-invisivel-que.html"

];

const tabela = document.getElementById("tabelaLinks");

for (let i = 0; i < links.length; i += 2){

  const tr = document.createElement("tr");

  for (let j = 0; j < 2; j++){

    const index = i + j;
    if(index >= links.length) break;

    const url = links[index];
    const titulo = decodeURIComponent(
      url.split("/").pop().replace(".html","")
    ).replace(/-/g," ");

    const td = document.createElement("td");

    td.innerHTML = `
      <b>${titulo}</b>

      <iframe class="preview" src="${url}"></iframe>

      <a target="_blank"
         class="btn btn-primary open-btn"
         href="${url}">
         Abrir em nova aba
      </a>
    `;

    tr.appendChild(td);
  }

  tabela.appendChild(tr);
}


/* 🔹 Rodapé com todos os links */

const rodape = document.getElementById("rodape");

rodape.innerHTML = `
<b>🔗 Links diretos:</b><br><br>
${links.map(l => `<a target="_blank" href="${l}">• Artigo</a>`).join("")}
`;