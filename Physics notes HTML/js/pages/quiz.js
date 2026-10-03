// quiz page: h() gives the html, go() runs on load and whenever an input changes
PAGES.quiz={t:'Quiz',h:()=>`<h1>Quiz</h1><div id="qz"></div>`,
go(){if($('#qz').dataset.on)return;$('#qz').dataset.on=1;
const Q=[['A car goes 0 → 20 m/s in 5 s. What is a?',['2 m/s²','4 m/s²','100 m/s²'],1],
['A ball is thrown at 45°. At the very top, its vertical velocity is…',['9.8 m/s','0','equal to horizontal'],1],
['A 10 N force acts on 2 kg. Acceleration?',['5 m/s²','20 m/s²','0.2 m/s²'],0],
['Two 6 Ω resistors in parallel give…',['12 Ω','3 Ω','6 Ω'],1],
['Doubling speed makes KE…',['2× bigger','4× bigger','the same'],1]];
let i=0,sc=0;const show=()=>{if(i>=Q.length){$('#qz').innerHTML=`<div class="card out">Score: <b>${sc}/${Q.length}</b><br><button onclick="location.reload()">Retry</button></div>`;return}
const[q,o,a]=Q[i];$('#qz').innerHTML=`<div class="card q"><b>${i+1}. ${q}</b>${o.map((t,k)=>`<button data-k="${k}">${t}</button>`).join('')}</div>`;
document.querySelectorAll('.q button').forEach(b=>b.onclick=()=>{const k=+b.dataset.k;b.classList.add(k==a?'ok':'no');if(k==a)sc++;
document.querySelectorAll('.q button').forEach(x=>x.disabled=true);setTimeout(()=>{i++;show()},900)})};show()}};
