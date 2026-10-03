// forces page: h() gives the html, go() runs on load and whenever an input changes
PAGES.forces={t:'Forces',h:()=>`<h1>Forces</h1>
<p><b>Newton 1:</b> no net force, no change in motion. <b>Newton 2:</b> net force makes mass accelerate. <b>Newton 3:</b> every push has an equal push back on the other object.</p>
<div class="f">F<sub>net</sub> = ma</div><div class="f">W = mg</div><div class="f">f ≤ μN</div>
<h2>Block on a ramp</h2><p>Gravity gets split in two: one part along the slope (makes it slide) and one into the slope (balanced by the normal force).</p>
<div class="f">W<sub>∥</sub> = mg sin θ &nbsp;&nbsp; N = W<sub>⊥</sub> = mg cos θ</div>
<div class="card">${rng('fa','Ramp angle (°)',5,70,30)}${inp('fm','Mass (kg)',5)}${inp('fu','Friction μ',0.2,.05)}<div class="out" id="o"></div><svg id="g" viewBox="0 0 400 230" width="560"></svg></div>`,
go(){const th=rad(N('fa')),m=N('fm'),mu=N('fu'),W=m*G,par=W*Math.sin(th),N_=W*Math.cos(th),fr=mu*N_,a=Math.max(0,(par-fr)/m);
$('#o').innerHTML=`W∥=<b>${f2(par)}</b> N &nbsp; N=<b>${f2(N_)}</b> N &nbsp; friction max=<b>${f2(fr)}</b> N<br>${par>fr?`slides, a = <b>${f2(a)}</b> m/s²`:'<b>stays put</b> (friction wins)'}`;
const L=300,x0=40,y0=200,x1=x0+L*Math.cos(th),y1=y0-L*Math.sin(th),mx=x0+L*.55*Math.cos(th),my=y0-L*.55*Math.sin(th),d=Math.min(W/4,80),k=d/W;
const ar=(x,y,dx,dy,col,l)=>`<line x1="${x}" y1="${y}" x2="${x+dx}" y2="${y+dy}" stroke="${col}" stroke-width="3"/><circle cx="${x+dx}" cy="${y+dy}" r="4" fill="${col}"/><text x="${x+dx+6}" y="${y+dy+4}" fill="${col}" font-size="13">${l}</text>`;
// rotate(-deg) tilts the block so it sits flat on the slope
$('#g').innerHTML=`<polygon points="${x0},${y0} ${x1},${y0} ${x1},${y1}" fill="${css('--bd')}" stroke="${css('--fg')}" stroke-width="2"/>
<g transform="translate(${mx},${my}) rotate(${-N('fa')})"><rect x="-22" y="-36" width="44" height="36" fill="${css('--ac2')}" opacity=".7" stroke="${css('--fg')}"/></g>
${ar(mx,my-18*Math.cos(th),0,W*k*1.1,css('--ac'),'W')}${ar(mx,my-18*Math.cos(th),-N_*k*1.1*Math.sin(th),-N_*k*1.1*Math.cos(th),css('--ac2'),'N')}`}};
