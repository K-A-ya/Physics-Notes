// router + nav + theme toggle (load this LAST)

// the hash (#motion etc) picks the page, no server needed
function route(){const k=PAGES[location.hash.slice(1)]?location.hash.slice(1):'home',p=PAGES[k];
cancelAnimationFrame(raf);$('#app').innerHTML=p.h();
document.querySelectorAll('#nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')=='#'+k));
const run=()=>{document.querySelectorAll('input[type=range]').forEach(r=>{const o=$('#'+r.id+'O');if(o)o.textContent=r.value});p.go&&p.go()};
$('#app').oninput=run;run();scrollTo(0,0)}
$('#nav').innerHTML=Object.entries(PAGES).map(([k,p])=>`<a href="#${k}">${p.t}</a>`).join('')+'<button id="th" aria-label="Toggle theme">◐</button>';
// flips light/dark by hand, wrapped in try just in case
$('#th').onclick=()=>{const d=document.documentElement,dark=getComputedStyle(d).getPropertyValue('--bg').trim()=='#0d1a30';d.dataset.theme=dark?'light':'dark';route()};
addEventListener('hashchange',route);route();
