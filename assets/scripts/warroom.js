const screen = document.getElementById("screen");
const input = document.getElementById("cmdInput");
const tapeLed = document.getElementById("tapeLed");

let crisisLevel = 1;

const incidents = [
"SPOOL CRITICAL 98%",
"ABEND S0C4 IN PAYROLL",
"INITIATOR A DOWN",
"DATASET LOCKED DISP=OLD",
"WTOR REPLY REQUIRED",
"TAPE MOUNT VOL=T90001",
"VTAM MAJOR NODE INACTIVE",
"CICS REGION ABENDED",
"CPU SATURATION 99%",
"RACF DATABASE ERROR",
"CHANNEL PATH FAILURE",
"JES2 QUEUE BLOCKED",
"SECURITY VIOLATION",
"VOLUME OFFLINE",
"CATALOG CORRUPTION",
"I/O DEVICE ERROR",
"CONSOLE FLOODING",
"STORAGE SHORTAGE",
"TIME LIMIT EXCEEDED",
"IPL MAY BE REQUIRED",
"SYSLOG FULL",
"OUTPUT CLASS HELD",
"OPERATOR ACTION REQUIRED",
"SUBSYSTEM FAILURE",
"CHECKPOINT ERROR",
"ENQUEUE DEADLOCK",
"SWAP SHORTAGE",
"ADDRESS SPACE LOOP",
"RESOURCE CONTENTION",
"SYSTEM DEGRADED"
];

function showSDSFMenu(){

screen.textContent =
` SDSF PRIMARY OPTION MENU  SYS=ZOS1

 DA  Active users
 I   Input queue
 ST  Status of jobs
 O   Output queue
 H   Held output
 LOG System log
 INIT Initiators

 COMMAND INPUT ===>`;
}

function newIncident() {

  const msg = incidents[Math.floor(Math.random()*incidents.length)];

  if(msg.includes("TAPE")) tapeLed.classList.remove("off");
  else tapeLed.classList.add("off");

  screen.textContent =
`SDSF STATUS DISPLAY  SYS=ZOS1  CRISIS LEVEL ${crisisLevel}

NP JOBNAME  ID      OWNER  Q
   PAYROLL  12345   PAY    EXEC
   REPORTS  12346   REP    HOLD
   BACKUP   12347   SYS    EXEC

*** CRITICAL INCIDENT ***
${msg}

ENTER COMMAND ===>`;
}

setInterval(()=>{
  crisisLevel++;
  newIncident();
},20000);

newIncident();

input.addEventListener("keydown", e=>{
  if(e.key==="Enter") processCommand(input.value.toUpperCase().trim());
});

document.addEventListener("keydown", e=>{
  if(e.key==="F1"){ e.preventDefault(); showHelp(); }
});

function processCommand(cmd){

let reply="UNKNOWN COMMAND";

if(cmd==="ST") reply="STATUS REFRESHED";
else if(cmd==="DA") reply="ACTIVE USERS DISPLAYED";
else if(cmd==="LOG") reply="SYSLOG DISPLAYED";
else if(cmd.startsWith("/CANCEL")) reply="CANCEL SENT";
else if(cmd.startsWith("$P")) reply="JOB HELD";
else if(cmd.startsWith("$A")) reply="JOB RELEASED";
else if(cmd==="IPL") reply="IPL NOT AUTHORIZED";
else if(cmd==="D U") reply="DISPLAY UNITS OK";

screen.textContent += `\n\n> ${cmd}\n${reply}`;
input.value="";
}

function showHelp(){

screen.textContent =
`SDSF HELP PANEL — CRISIS MODE

Primary Commands
ST  Status
DA  Active Users
LOG System Log

Operator Commands
/CANCEL job
$P job  Hold
$A job  Release
D U     Display Units

Press ENTER to return`;
}

function visitorCounter(){

let base = localStorage.getItem("warVisitors") || 874321;

base = parseInt(base) + Math.floor(Math.random()*7)+1;

localStorage.setItem("warVisitors", base);

document.getElementById("visitorCounter")
.textContent = base.toString().padStart(9,"0");
}

visitorCounter();
setInterval(visitorCounter,3000);

async function realVisitorCounter(){

  const namespace = "mvs-warroom-simulator";
  const key = "global-visitors";

  try {
    const res = await fetch(
      `https://api.countapi.xyz/hit/${namespace}/${key}`
    );

    const data = await res.json();

    const count = data.value;

    document.getElementById("visitorCounter")
      .textContent = count.toString().padStart(9,"0");

  } catch {

    document.getElementById("visitorCounter")
      .textContent = "OFFLINE";
  }
}

realVisitorCounter();

realVisitorCounter();
setInterval(realVisitorCounter, 15000);

