// projectiles page: h() gives the html, go() runs on load and whenever an input changes
PAGES.proj={t:'Projectiles',h:()=>`<h1>Projectiles</h1>
<p>Trick: split the motion in two. Sideways nothing pushes, so speed stays constant. Up and down, gravity pulls at 9.8 m/s² the whole time. They don't affect each other.</p>
<div class="f">v<sub>x</sub> = v cos θ &nbsp;&nbsp; v<sub>y</sub> = v sin θ</div>
<div class="f">Range R = v² sin 2θ / g</div><div class="f">Max height H = (v sin θ)² / 2g</div><div class="f">Flight time T = 2v sin θ / g</div>
<div class="card">${rng('pv','Launch speed (m/s)',5,40,22)}${rng('pa','Angle (°)',5,85,45)}<div class="out" id="o"></div><canvas id="cv" width="760" height="320"></canvas>
<small>Try 45° (max range on flat ground) and then 30° vs 60°: same range, different height. Neat symmetry.</small></div>`,
go(){const v=N('pv'),th=rad(N('pa')),R=v*v*Math.sin(2*th)/G,T=2*v*Math.sin(th)/G,H=(v*Math.sin(th))**2/(2*G);
$('#o').innerHTML=`R = <b>${f2(R)}</b> m &nbsp; H = <b>${f2(H)}</b> m &nbsp; T = <b>${f2(T)}</b> s`;
const c=$('#cv').getContext('2d'),W=760,Hh=320,sc=Math.min((W-60)/R,(Hh-60)/(H||1),12); // scale so the whole arc always fits
c.clearRect(0,0,W,Hh);c.strokeStyle=css('--fg');c.lineWidth=2;c.beginPath();c.moveTo(0,Hh-30);c.lineTo(W,Hh-30);c.stroke();
c.strokeStyle=css('--ac');c.lineWidth=3;c.beginPath();
for(let i=0;i<=60;i++){const t=T*i/60,x=30+v*Math.cos(th)*t*sc,y=Hh-30-(v*Math.sin(th)*t-.5*G*t*t)*sc;i?c.lineTo(x,y):c.moveTo(x,y)}c.stroke();
c.fillStyle=css('--ac2');c.beginPath();c.arc(30+R*sc/2,Hh-30-H*sc,7,0,7);c.fill();c.fillStyle=css('--fg');c.font='15px sans-serif';c.fillText('apex',30+R*sc/2+10,Hh-30-H*sc-6)}};
