// =====================================================================
// TABLA DE LETRAS — emoji e imagen siempre concuerdan con la palabra
// =====================================================================
const LS = [
  {l:'A', e:'🦅', w:'Águila'},
  {l:'B', e:'🐝', w:'Abeja'},
  {l:'C', e:'🐴', w:'Caballo'},
  {l:'D', e:'🐬', w:'Delfín'},
  {l:'E', e:'🐘', w:'Elefante'},
  {l:'F', e:'🍓', w:'Fresa'},
  {l:'G', e:'🐱', w:'Gato'},
  {l:'H', e:'🌿', w:'Hierba'},
  {l:'I', e:'🦎', w:'Iguana'},
  {l:'J', e:'🦒', w:'Jirafa'},
  {l:'L', e:'🦁', w:'León'},
  {l:'M', e:'🐒', w:'Mono'},
  {l:'N', e:'🍊', w:'Naranja'},
  {l:'O', e:'🐑', w:'Oveja'},
  {l:'P', e:'🦜', w:'Pájaro'},
  {l:'R', e:'🐸', w:'Rana'},
  {l:'S', e:'🐍', w:'Serpiente'},
  {l:'T', e:'🐢', w:'Tortuga'},
  {l:'U', e:'🍇', w:'Uvas'},
  {l:'V', e:'🐄', w:'Vaca'},
  {l:'Z', e:'🦊', w:'Zorro'},
  {l:'Ch',e:'🐐', w:'Chivo'},
  {l:'Ll',e:'🦙', w:'Llama'},
  {l:'Ñ', e:'🌾', w:'Ñame'},
];

// =====================================================================
// EJERCICIO ADIVINA — emoji siempre muestra exactamente la palabra
// =====================================================================
const WLEVELS = [
  // Nivel 1
  [
    {e:'🐱', w:'GATO',     a:'G', o:['G','P','T','B']},
    {e:'🐸', w:'RANA',     a:'R', o:['L','R','N','T']},
    {e:'🦜', w:'PÁJARO',   a:'P', o:['B','P','T','D']},
    {e:'🐒', w:'MONO',     a:'M', o:['N','A','M','S']},
    {e:'🌻', w:'SOL',      a:'S', o:['S','C','Z','T']},
  ],
  // Nivel 2
  [
    {e:'🦅', w:'ÁGUILA',   a:'A', o:['E','O','A','I']},
    {e:'🐝', w:'ABEJA',    a:'A', o:['A','E','U','O']},
    {e:'🐢', w:'TORTUGA',  a:'T', o:['T','P','D','C']},
    {e:'🐘', w:'ELEFANTE', a:'E', o:['E','I','A','O']},
    {e:'🦁', w:'LEÓN',     a:'L', o:['L','N','R','M']},
  ],
  // Nivel 3
  [
    {e:'🍓', w:'FRESA',    a:'F', o:['F','B','G','S']},
    {e:'🍇', w:'UVAS',     a:'U', o:['A','E','U','O']},
    {e:'🦒', w:'JIRAFA',   a:'J', o:['G','J','H','Z']},
    {e:'🐍', w:'SERPIENTE',a:'S', o:['S','C','Z','X']},
    {e:'🦊', w:'ZORRO',    a:'Z', o:['S','Z','C','X']},
  ],
  // Nivel 4
  [
    {e:'🐬', w:'DELFÍN',   a:'D', o:['D','B','T','G']},
    {e:'🐴', w:'CABALLO',  a:'C', o:['C','K','G','T']},
    {e:'🦋', w:'MARIPOSA', a:'M', o:['M','N','P','B']},
    {e:'🐄', w:'VACA',     a:'V', o:['V','B','P','D']},
    {e:'🐑', w:'OVEJA',    a:'O', o:['A','E','I','O']},
  ],
  // Nivel 5 — palabras colombianas
  [
    {e:'🦜', w:'GUACAMAYO',a:'G', o:['G','J','H','C']},
    {e:'🍌', w:'BANANO',   a:'B', o:['B','V','P','D']},
    {e:'🌴', w:'PALMA',    a:'P', o:['B','P','T','D']},
    {e:'🦙', w:'LLAMA',    a:'L', o:['L','N','R','M']},
    {e:'🌾', w:'ÑAME',     a:'Ñ', o:['Ñ','N','M','L']},
  ],
];

// =====================================================================
// EJERCICIO COMPLETA — emoji siempre coincide con la palabra
// =====================================================================
const COMPL = [
  {e:'🐱', w:'GATO',    answer:'T', opts:['T','R','S','N'], display:'GA _ O'},
  {e:'🐸', w:'RANA',    answer:'N', opts:['M','N','L','R'], display:'RA _ A'},
  {e:'🦜', w:'LORO',    answer:'O', opts:['A','E','I','O'], display:'L _ RO'},
  {e:'🌻', w:'ROSA',    answer:'S', opts:['S','Z','C','T'], display:'RO _ A'},
  {e:'🐝', w:'ABEJA',   answer:'J', opts:['J','G','H','Y'], display:'ABE _ A'},
  {e:'🍇', w:'UVAS',    answer:'V', opts:['B','V','F','P'], display:'U _ AS'},
  {e:'🐘', w:'ELEFANTE',answer:'F', opts:['F','P','B','T'], display:'ELE _ ANTE'},
  {e:'🦋', w:'MARIPOSA',answer:'R', opts:['R','L','N','S'], display:'MA _ IPOSA'},
  {e:'🍌', w:'BANANO',  answer:'N', opts:['M','N','L','R'], display:'BA _ ANO'},
  {e:'🐄', w:'VACA',    answer:'A', opts:['A','E','I','O'], display:'V _ CA'},
];

// =====================================================================
// EJERCICIO ORDENA — emoji siempre coincide con la palabra
// =====================================================================
const ORDEN = [
  {e:'🐱', w:'GATO',    letters:['G','A','T','O']},
  {e:'🐸', w:'RANA',    letters:['R','A','N','A']},
  {e:'🦁', w:'LEON',    letters:['L','E','O','N']},
  {e:'🌻', w:'ROSA',    letters:['R','O','S','A']},
  {e:'🐍', w:'PUMA',    letters:['P','U','M','A']},
  {e:'🐒', w:'MONO',    letters:['M','O','N','O']},
  {e:'🦋', w:'PINO',    letters:['P','I','N','O']},
  {e:'🍌', w:'LIMA',    letters:['L','I','M','A']},
  {e:'🦜', w:'LORO',    letters:['L','O','R','O']},
  {e:'🐄', w:'VACA',    letters:['V','A','C','A']},
];

// =====================================================================
// CUENTOS COLOMBIANOS
// =====================================================================
const STORIES = [
  {
    title:'La tortuga Tita y el río Magdalena', img:'🐢💧',
    text:'Tita era una tortuga que vivía cerca del río Magdalena. Un día quiso cruzar al otro lado. El agua estaba fría y brillante. Tita respiró profundo y nadó poco a poco. Al llegar encontró muchas flores amarillas. Tita estaba muy feliz.',
    q:'¿En qué río vivía Tita?',
    opts:['En el río Amazonas','En el río Magdalena','En el mar Caribe','En el lago Tota'],
    ans:1
  },
  {
    title:'El loro Pío en la selva amazónica', img:'🦜🌿',
    text:'Pío era un loro de colores que vivía en la selva amazónica colombiana. Sabía repetir muchas palabras. Un día aprendió a decir buenos días. Todos los animales del bosque aplaudieron. Pío se puso muy contento y siguió aprendiendo palabras nuevas.',
    q:'¿Qué aprendió a decir Pío?',
    opts:['Buenas noches','Buenos días','Hola amigos','Hasta luego'],
    ans:1
  },
  {
    title:'El niño y las estrellas de Bogotá', img:'⭐👦',
    text:'Camilo era un niño de Bogotá. Cada noche miraba las estrellas desde su ventana en los cerros. Una noche contó veinte estrellas brillantes. Su mamá le dijo que cada estrella tiene un nombre. Camilo soñó que volaba entre ellas.',
    q:'¿Desde dónde miraba Camilo las estrellas?',
    opts:['Desde el parque','Desde su ventana','Desde la escuela','Desde el río'],
    ans:1
  },
  {
    title:'La mariposa del Valle del Cauca', img:'🦋🌸',
    text:'En el Valle del Cauca vivía una mariposa llamada Lila. Tenía las alas de color morado y amarillo. Todos los días visitaba las flores del jardín. Un día encontró una flor nueva muy perfumada. Lila bailó de alegría alrededor de la flor.',
    q:'¿De qué color eran las alas de Lila?',
    opts:['Rojo y verde','Azul y blanco','Morado y amarillo','Naranja y negro'],
    ans:2
  },
  {
    title:'El pescador de Cartagena', img:'🎣🌊',
    text:'Don Pedro vivía en Cartagena y salía a pescar cada mañana en su canoa. Un día el mar Caribe estaba muy tranquilo y brillante. Pescó muchos peces de colores. En la tarde regresó a casa con su familia. Cocinaron un sancocho delicioso.',
    q:'¿Qué cocinó la familia de Don Pedro?',
    opts:['Arroz con leche','Un sancocho','Tamales vallunos','Arepas'],
    ans:1
  },
];

// Mayúsculas y minúsculas
const MM_PAIRS = [
  {up:'A',lo:'a'},{up:'B',lo:'b'},{up:'C',lo:'c'},{up:'D',lo:'d'},
  {up:'E',lo:'e'},{up:'F',lo:'f'},{up:'G',lo:'g'},{up:'H',lo:'h'},
  {up:'M',lo:'m'},{up:'N',lo:'n'},{up:'P',lo:'p'},{up:'R',lo:'r'},
  {up:'S',lo:'s'},{up:'T',lo:'t'},{up:'L',lo:'l'},{up:'O',lo:'o'},
];

const VOWELS  = ['A','E','I','O','U'];
const SYLS    = ['MA','ME','MI','MO','MU','PA','PE','PI','PO','PU','SA','SE','SI','SO','SU',
                 'LA','LE','LI','LO','LU','TA','TE','TI','TO','TU','CA','CO','CU',
                 'NA','NO','NU','RA','RE','RI','RO','RU','GA','GO','GU'];
const COLORS  = ['#E53935','#FB8C00','#FDD835','#43A047','#1E88E5','#5E35B1','#E91E63','#795548','#37474F','#ffffff'];
const CNAMES  = ['Rojo','Naranja','Amarillo','Verde','Azul','Morado','Rosado','Café','Gris','Blanco'];
const CLETTERS= ['A','B','C','E','G','L','M','N','O','P','R','S','T','U'];

// =====================================================================
// SISTEMA DE VOZ MEJORADO — evita Helena y voces robóticas
// Orden de preferencia: voces naturales latinoamericanas primero
// =====================================================================
let esVoice = null;

// Voces NO deseadas (Microsoft robóticas)
const BLOCKED_VOICES = ['helena','pablo','jorge','microsoft'];

function scoreVoice(v) {
  const name = v.name.toLowerCase();
  const lang = (v.lang||'').toLowerCase();
  // Bloquear voces no deseadas
  if (BLOCKED_VOICES.some(b => name.includes(b))) return -1;
  let score = 0;
  // Preferir español colombiano
  if (lang === 'es-co') score += 100;
  // Luego latinoamericanas
  if (['es-mx','es-ar','es-us','es-419'].includes(lang)) score += 60;
  // Luego cualquier español
  if (lang.startsWith('es')) score += 30;
  // Penalizar Microsoft (muchas son robóticas)
  if (name.includes('microsoft')) score -= 20;
  // Premiar voces que parecen naturales/neurales
  if (name.includes('neural') || name.includes('natural')) score += 40;
  // Premiar Google (generalmente buenas)
  if (name.includes('google')) score += 25;
  return score;
}

function loadVoices() {
  const vs = window.speechSynthesis.getVoices();
  if (!vs.length) return;

  const candidates = vs
    .map(v => ({ v, score: scoreVoice(v) }))
    .filter(x => x.score >= 0 && x.v.lang && x.v.lang.toLowerCase().startsWith('es'))
    .sort((a, b) => b.score - a.score);

  esVoice = candidates.length ? candidates[0].v : null;

  const el = document.getElementById('vstatus');
  if (esVoice) {
    el.textContent = '🔊 Voz activa: ' + esVoice.name + ' (' + esVoice.lang + ')';
    el.style.color = '#2E7D32';
    el.style.background = '#C8E6C9';
  } else {
    el.textContent = '⚠️ Sin voz en español. Actívala en los ajustes del dispositivo.';
    el.style.color = '#B71C1C';
    el.style.background = '#FFCDD2';
  }
}

if (window.speechSynthesis) {
  // Intentar cargar inmediatamente y también esperar el evento
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
  // Reintento por si el navegador tarda
  setTimeout(loadVoices, 500);
  setTimeout(loadVoices, 1500);
}

function say(txt, rate, pitch) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(txt);
  // Forzar español colombiano
  u.lang = 'es-CO';
  if (esVoice) u.voice = esVoice;
  u.rate  = rate  || 0.80;
  u.pitch = pitch || 1.05;
  // Pequeño delay para que cancel() surta efecto en Chrome
  setTimeout(() => speechSynthesis.speak(u), 80);
}

function stopStory() { speechSynthesis.cancel(); }
function setMsg(m)   { document.getElementById('hmsg').textContent = m; }

// =====================================================================
// LÓGICA DEL JUEGO
// =====================================================================
let curLetter=LS[0], stars=1, gameLevel=1, ptsVal=0;
let wordLvl=0, wordIdx=0, complIdx=0, ordenIdx=0, mmIdx=0, curStory=0;
let combo=[], curColor='#E53935', curColorLetter='A', drawing=false, brushSize=14;
let esVoiceLoaded=false, ordenPlaced=[];

function show(n,btn){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('on'));
  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('on'));
  document.getElementById('screen-'+n).classList.add('on');
  btn.classList.add('on');
  if(n==='colorear') setTimeout(drawLetter,80);
}

function addPts(n){
  ptsVal+=n; document.getElementById('pts').textContent=ptsVal+' pts';
  if(stars<5){
    stars++;
    for(let i=0;i<5;i++){
      const el=document.getElementById('s'+i);
      el.style.opacity=i<stars?'1':'0.2';
      if(i===stars-1){el.style.animation='none';void el.offsetWidth;el.style.animation='starpop .35s';}
    }
    document.getElementById('pbar').style.width=Math.min(97,8+stars*18)+'%';
    if(stars===5){
      gameLevel++; document.getElementById('lvnum').textContent=gameLevel;
      setTimeout(()=>{
        stars=1;
        for(let i=0;i<5;i++) document.getElementById('s'+i).style.opacity=i===0?'1':'0.2';
        document.getElementById('pbar').style.width='12%';
        setMsg('¡Subiste al Nivel '+gameLevel+'! ¡Eres muy listo!');
        say('Felicitaciones. Subiste de nivel.');
      },500);
    }
  }
}

function confetti(id){
  const w=document.getElementById(id); if(!w) return;
  const cls=['#3F51B5','#FDD835','#E53935','#43A047','#E91E63','#1E88E5'];
  for(let i=0;i<24;i++){
    const el=document.createElement('div'); el.className='cf';
    el.style.cssText='left:'+(5+Math.random()*90)+'%;top:-14px;background:'+cls[i%cls.length]
      +';animation-delay:'+(Math.random()*.45)+'s;animation-duration:'+(0.7+Math.random()*.5)+'s';
    w.appendChild(el);
  }
  setTimeout(()=>w.innerHTML='',1500);
}

/* LETRAS */
const lgrid=document.getElementById('lgrid');
LS.forEach((lt,i)=>{
  const d=document.createElement('div');
  d.className='lcard'+(i===0?' sel':'');
  d.textContent=lt.l;
  d.onclick=()=>{
    document.querySelectorAll('.lcard').forEach(c=>c.classList.remove('sel'));
    d.classList.add('sel'); curLetter=lt;
    document.getElementById('lc').textContent=lt.l;
    document.getElementById('le').textContent=lt.e;
    document.getElementById('lw').textContent=lt.l+' de '+lt.w;
    say(lt.l+'. '+lt.w); addPts(2);
    setMsg('La letra '+lt.l+' es de '+lt.w+'. ¡Muy bien!');
  };
  lgrid.appendChild(d);
});
function speakCur(){ say(curLetter.l+'. '+curLetter.w); }

/* MAY/MIN */
let mmShuffle=[...MM_PAIRS].sort(()=>Math.random()-.5);
function loadMM(){
  const p=mmShuffle[mmIdx%mmShuffle.length];
  document.getElementById('mm-big').textContent=p.up;
  document.getElementById('mm-fb').textContent=''; document.getElementById('mm-fb').className='fb';
  document.getElementById('mm-next').style.display='none';
  const opts=document.getElementById('mm-opts'); opts.innerHTML='';
  const wrongs=MM_PAIRS.filter(x=>x.lo!==p.lo).sort(()=>Math.random()-.5).slice(0,3).map(x=>x.lo);
  [...[p.lo,...wrongs]].sort(()=>Math.random()-.5).forEach(lo=>{
    const b=document.createElement('div'); b.className='mm-card'; b.textContent=lo;
    b.onclick=()=>{
      document.querySelectorAll('.mm-card').forEach(x=>{x.classList.remove('ok','no');x.style.pointerEvents='auto';});
      const fb=document.getElementById('mm-fb');
      if(lo===p.lo){
        b.classList.add('ok');
        fb.textContent='¡Correcto! '+p.up+' mayúscula y '+p.lo+' minúscula.'; fb.className='fb ok';
        say('Correcto. La letra '+p.up+' en minúscula es '+p.lo+'. Muy bien.'); addPts(8);
        document.getElementById('mm-next').style.display='inline-block';
      } else {
        b.classList.add('no'); fb.textContent='¡Inténtalo de nuevo!'; fb.className='fb no';
        say('Inténtalo de nuevo.');
      }
      document.querySelectorAll('.mm-card').forEach(x=>x.style.pointerEvents='none');
    };
    opts.appendChild(b);
  });
  say('La letra '+p.up+'. Cuál es su minúscula.',0.8,1.0);
}
function nextMM(){ mmIdx++; loadMM(); }

/* SÍLABAS */
const vg=document.getElementById('vowgrid');
VOWELS.forEach(v=>{
  const d=document.createElement('div'); d.className='syc vow'; d.textContent=v;
  d.onclick=()=>{ say(v,0.6,1.1); addCombo(v,d); setMsg('¡La vocal '+v+'! ¡Muy bien!'); };
  vg.appendChild(d);
});
const sg=document.getElementById('sylgrid');
SYLS.forEach(s=>{
  const d=document.createElement('div'); d.className='syc con'; d.textContent=s;
  d.onclick=()=>{ say(s,0.6,1.0); addCombo(s,d); };
  sg.appendChild(d);
});
function addCombo(t,el){
  combo.push(t); el.classList.add('blink'); setTimeout(()=>el.classList.remove('blink'),400);
  document.getElementById('combo-txt').textContent=combo.join('-'); addPts(1);
}
function playCombo(){ if(combo.length) say(combo.join(''),0.65,1.0); }
function clearCombo(){ combo=[]; document.getElementById('combo-txt').textContent='—'; }

/* ADIVINA */
function loadWord(){
  const level=WLEVELS[Math.min(wordLvl,WLEVELS.length-1)];
  const w=level[wordIdx%level.length];
  document.getElementById('wlvl').textContent=wordLvl+1;
  document.getElementById('w-em').textContent=w.e;
  document.getElementById('w-hint').textContent=w.w.split('').map((c,i)=>i===0?'_':c).join(' ');
  document.getElementById('w-fb').textContent=''; document.getElementById('w-fb').className='fb';
  document.getElementById('w-next').style.display='none'; document.getElementById('conf-wrap').innerHTML='';
  const opts=document.getElementById('w-opts'); opts.innerHTML='';
  [...w.o].sort(()=>Math.random()-.5).forEach(opt=>{
    const b=document.createElement('button'); b.className='obt'; b.textContent=opt;
    b.onclick=()=>checkWord(opt,w,b); opts.appendChild(b);
  });
}
function checkWord(ch,w,btn){
  const fb=document.getElementById('w-fb');
  if(ch===w.a){
    btn.classList.add('ok'); fb.textContent='¡Genial! La letra es '+w.a; fb.className='fb ok';
    document.getElementById('w-hint').textContent=w.w.split('').join(' ');
    document.getElementById('w-next').style.display='inline-block';
    document.querySelectorAll('.obt').forEach(b=>b.style.pointerEvents='none');
    say('Muy bien. La letra es '+w.a+'. '+w.w+'.');
    confetti('conf-wrap'); addPts(10);
    setMsg('¡Encontraste la letra '+w.a+'! ¡Eres una estrella!');
  } else {
    btn.classList.add('no'); fb.textContent='¡Inténtalo de nuevo! 💪'; fb.className='fb no';
    say('Inténtalo de nuevo.'); setTimeout(()=>btn.classList.remove('no'),500);
  }
}
function nextWord(){
  wordIdx++;
  if(wordIdx>0&&wordIdx%5===0&&wordLvl<WLEVELS.length-1){
    wordLvl++; setMsg('¡Nuevo nivel de palabras '+(wordLvl+1)+'!'); say('Nuevo nivel.');
  }
  loadWord();
}

/* COMPLETAR */
function loadCompl(){
  const c=COMPL[complIdx%COMPL.length];
  document.getElementById('cpl-em').textContent=c.e;
  document.getElementById('cpl-word').textContent=c.display;
  document.getElementById('cpl-fb').textContent=''; document.getElementById('cpl-fb').className='fb';
  document.getElementById('cpl-next').style.display='none'; document.getElementById('conf-wrap2').innerHTML='';
  const opts=document.getElementById('cpl-opts'); opts.innerHTML='';
  [...c.opts].sort(()=>Math.random()-.5).forEach(opt=>{
    const b=document.createElement('button'); b.className='copt'; b.textContent=opt;
    b.onclick=()=>{
      document.querySelectorAll('.copt').forEach(x=>{x.classList.remove('ok','no');x.style.pointerEvents='auto';});
      const fb=document.getElementById('cpl-fb');
      if(opt===c.answer){
        b.classList.add('ok'); fb.textContent='¡Correcto! La palabra es '+c.w; fb.className='fb ok';
        document.getElementById('cpl-word').textContent=c.w;
        document.getElementById('cpl-next').style.display='inline-block';
        say('Correcto. La palabra es '+c.w+'.'); confetti('conf-wrap2'); addPts(12);
        setMsg('¡Completaste la palabra '+c.w+'!');
      } else {
        b.classList.add('no'); fb.textContent='¡Inténtalo de nuevo!'; fb.className='fb no';
        say('Inténtalo de nuevo.');
      }
      document.querySelectorAll('.copt').forEach(x=>x.style.pointerEvents='none');
    };
    opts.appendChild(b);
  });
  say('Qué letra falta en la palabra.',0.8,1.0);
}
function nextCompl(){ complIdx++; loadCompl(); }

/* ORDENAR */
let ordenWord=null;
function loadOrden(){
  const o=ORDEN[ordenIdx%ORDEN.length]; ordenWord=o; ordenPlaced=[];
  document.getElementById('ord-em').textContent=o.e;
  document.getElementById('ord-pista').textContent='Pista: '+o.letters.join(' - ');
  document.getElementById('ord-fb').textContent=''; document.getElementById('ord-fb').className='fb';
  document.getElementById('ord-next').style.display='none'; document.getElementById('conf-wrap3').innerHTML='';
  const slots=document.getElementById('ord-slots'); slots.innerHTML='';
  o.letters.forEach((_,i)=>{
    const s=document.createElement('div'); s.className='slot'; s.id='slot-'+i; slots.appendChild(s);
  });
  const lets=document.getElementById('ord-letters'); lets.innerHTML='';
  [...o.letters].sort(()=>Math.random()-.5).forEach((l,i)=>{
    const d=document.createElement('div'); d.className='oletter'; d.textContent=l; d.id='oletter-'+i;
    d.onclick=()=>placeOrden(l,i,d); lets.appendChild(d);
  });
  say('Ordena las letras para formar la palabra.',0.8,1.0);
}
function placeOrden(l,idx,el){
  if(ordenPlaced.length>=ordenWord.letters.length) return;
  el.classList.add('used');
  const pos=ordenPlaced.length;
  const slot=document.getElementById('slot-'+pos);
  slot.textContent=l; slot.classList.add('filled');
  ordenPlaced.push(l);
  if(ordenPlaced.length===ordenWord.letters.length){
    const formed=ordenPlaced.join('');
    const fb=document.getElementById('ord-fb');
    if(formed===ordenWord.w){
      fb.textContent='¡Perfecto! La palabra es '+ordenWord.w; fb.className='fb ok';
      document.getElementById('ord-next').style.display='inline-block';
      say('Perfecto. La palabra es '+ordenWord.w+'.'); confetti('conf-wrap3'); addPts(15);
      setMsg('¡Ordenaste la palabra '+ordenWord.w+'! ¡Muy inteligente!');
    } else {
      fb.textContent='¡Casi! Inténtalo de nuevo.'; fb.className='fb no';
      say('Intenta de nuevo.'); setTimeout(resetOrden,900);
    }
  }
}
function resetOrden(){ ordenPlaced=[]; loadOrden(); }
function nextOrden(){ ordenIdx++; loadOrden(); }

/* LECTURA */
const stsel=document.getElementById('story-sel');
STORIES.forEach((s,i)=>{
  const b=document.createElement('button'); b.className='stbtn'+(i===0?' on':'');
  b.textContent=s.img+' '+s.title;
  b.onclick=()=>{
    document.querySelectorAll('.stbtn').forEach(x=>x.classList.remove('on'));
    b.classList.add('on'); curStory=i; loadStory(i);
  };
  stsel.appendChild(b);
});
function loadStory(i){
  const s=STORIES[i];
  document.getElementById('st-title').textContent=s.title;
  document.getElementById('st-img').textContent=s.img;
  document.getElementById('st-text').innerHTML=s.text.split(' ').map(w=>`<span class="sw" onclick="speakW(this)">${w}</span> `).join('');
  document.getElementById('st-q').style.display='none';
  document.getElementById('sq-opts').innerHTML='';
  document.getElementById('sq-tit').textContent=s.q;
}
function speakW(el){
  document.querySelectorAll('.sw').forEach(x=>x.classList.remove('hl'));
  el.classList.add('hl'); say(el.textContent.replace(/[.,!¡¿?;:]/g,''),0.78,1.0);
  setTimeout(()=>el.classList.remove('hl'),700);
}
function readStory(){
  const s=STORIES[curStory]; say(s.text,0.78,1.0); addPts(5);
  setTimeout(()=>{
    document.getElementById('st-q').style.display='block';
    const optsEl=document.getElementById('sq-opts'); optsEl.innerHTML='';
    s.opts.forEach((o,i)=>{
      const b=document.createElement('button'); b.className='sqo'; b.textContent=o;
      b.onclick=()=>{
        document.querySelectorAll('.sqo').forEach(x=>{x.classList.remove('ok','no');x.style.pointerEvents='auto';});
        if(i===s.ans){ b.classList.add('ok'); say('Correcto. Muy bien.'); addPts(15); setMsg('¡Respondiste bien!'); }
        else          { b.classList.add('no'); say('Intenta otra respuesta.'); }
        document.querySelectorAll('.sqo').forEach(x=>x.style.pointerEvents='none');
      };
      optsEl.appendChild(b);
    });
  }, s.text.length*62);
}

/* COLOREAR */
const pal=document.getElementById('pal');
COLORS.forEach((c,i)=>{
  const d=document.createElement('div'); d.className='cp'+(i===0?' sel':'');
  d.style.background=c; d.style.border='3px solid '+(i===0?'#212121':'#9FA8DA'); d.title=CNAMES[i];
  d.onclick=()=>{
    document.querySelectorAll('.cp').forEach(x=>{x.classList.remove('sel');x.style.border='3px solid #9FA8DA';});
    d.classList.add('sel'); d.style.border='3px solid #212121'; curColor=c; say(CNAMES[i],0.8,1.0);
  };
  pal.appendChild(d);
});
const brow=document.getElementById('brush-row');
[{s:7,l:'Fino'},{s:15,l:'Medio'},{s:26,l:'Grueso'}].forEach((b,i)=>{
  const btn=document.createElement('button'); btn.className='brbtn'+(i===1?' on':''); btn.textContent=b.l;
  btn.onclick=()=>{ brushSize=b.s; document.querySelectorAll('.brbtn').forEach(x=>x.classList.remove('on')); btn.classList.add('on'); };
  brow.appendChild(btn);
});
const cpick=document.getElementById('cpick');
CLETTERS.forEach(lt=>{
  const b=document.createElement('button'); b.className='cpbtn'+(lt==='A'?' on':''); b.textContent=lt;
  b.onclick=()=>{
    document.querySelectorAll('.cpbtn').forEach(x=>x.classList.remove('on'));
    b.classList.add('on'); curColorLetter=lt; drawLetter(); say(lt,0.7,1.0);
  };
  cpick.appendChild(b);
});
const cvs=document.getElementById('cvs'), ctx=cvs.getContext('2d');
function drawLetter(){
  ctx.clearRect(0,0,300,280); ctx.fillStyle='#f8f9ff'; ctx.fillRect(0,0,300,280);
  ctx.font='bold 210px Arial'; ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.strokeStyle='#9FA8DA'; ctx.lineWidth=5; ctx.strokeText(curColorLetter,150,148);
  ctx.fillStyle='rgba(159,168,218,0.13)'; ctx.fillText(curColorLetter,150,148);
}
function getPos(e){
  const r=cvs.getBoundingClientRect(), sx=cvs.width/r.width, sy=cvs.height/r.height;
  if(e.touches) return{x:(e.touches[0].clientX-r.left)*sx,y:(e.touches[0].clientY-r.top)*sy};
  return{x:(e.clientX-r.left)*sx,y:(e.clientY-r.top)*sy};
}
cvs.addEventListener('mousedown',e=>{drawing=true;const p=getPos(e);ctx.beginPath();ctx.moveTo(p.x,p.y);});
cvs.addEventListener('mousemove',e=>{
  if(!drawing)return; const p=getPos(e);
  ctx.lineTo(p.x,p.y); ctx.strokeStyle=curColor; ctx.lineWidth=brushSize;
  ctx.lineCap='round'; ctx.lineJoin='round'; ctx.stroke();
});
cvs.addEventListener('mouseup',()=>{drawing=false;});
cvs.addEventListener('mouseleave',()=>{drawing=false;});
cvs.addEventListener('touchstart',e=>{e.preventDefault();drawing=true;const p=getPos(e);ctx.beginPath();ctx.moveTo(p.x,p.y);},{passive:false});
cvs.addEventListener('touchmove',e=>{
  e.preventDefault(); if(!drawing)return; const p=getPos(e);
  ctx.lineTo(p.x,p.y); ctx.strokeStyle=curColor; ctx.lineWidth=brushSize;
  ctx.lineCap='round'; ctx.lineJoin='round'; ctx.stroke();
},{passive:false});
cvs.addEventListener('touchend',()=>{drawing=false;});
function clearCvs(){ drawLetter(); }
function saveCvs(){
  const a=document.createElement('a'); a.download='letra-'+curColorLetter+'.png';
  a.href=cvs.toDataURL('image/png'); a.click();
  setMsg('¡Guardaste tu letra '+curColorLetter+'! ¡Qué bonita quedó!'); addPts(5);
}

// Inicializar todo
loadStory(0); loadWord(); loadMM(); loadCompl(); loadOrden();
setTimeout(drawLetter,250);
