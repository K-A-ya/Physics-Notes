// motion page: h() gives the html, go() runs on load and whenever an input changes
PAGES.motion={t:'Motion',h:()=>`<h1>Motion</h1>
<p><b>Displacement</b> is how far you ended up from where you started, with a direction. <b>Velocity</b> is displacement per second. <b>Acceleration</b> is how fast velocity changes.</p>
<div class="f">v = u + at</div><div class="f">s = ut + ½at²</div><div class="f">v² = u² + 2as</div>
<p><small>u = start speed, v = end speed, a = acceleration, t = time, s = displacement. Use these only when a is constant.</small></p>
<h2>Try it</h2><div class="card"><div class="row">${inp('u','u (m/s)',2)}${inp('a','a (m/s²)',3)}${inp('t','t (s)',5)}</div>
<div class="out" id="o"></div><svg id="g" viewBox="0 0 360 190" width="520"></svg>
<small>The shaded area under a v–t graph IS the displacement. That's where s = ut + ½at² comes from (rectangle + triangle).</small></div>`,
go(){const u=N('u'),a=N('a'),t=Math.max(N('t'),.1),v=u+a*t,s=u*t+.5*a*t*t;
$('#o').innerHTML=`v = <b>${f2(v)}</b> m/s &nbsp; s = <b>${f2(s)}</b> m`;
const lo=Math.min(0,u,v),hi=Math.max(0,u,v)||1,Y=x=>160-(x-lo)/(hi-lo||1)*130,X=30; // Y flips the graph so up is positive
const x1=330;
$('#g').innerHTML=`<polygon points="${X},${Y(0)} ${X},${Y(u)} ${x1},${Y(v)} ${x1},${Y(0)}" fill="${css('--ac2')}" opacity=".35"/>
<line x1="${X}" y1="${Y(u)}" x2="${x1}" y2="${Y(v)}" stroke="${css('--ac')}" stroke-width="3"/>
<line x1="${X}" y1="10" x2="${X}" y2="180" stroke="${css('--fg')}"/><line x1="${X}" y1="${Y(0)}" x2="350" y2="${Y(0)}" stroke="${css('--fg')}"/>
<text x="${X+4}" y="18" fill="${css('--fg')}" font-size="12">v</text><text x="338" y="${Y(0)-5}" fill="${css('--fg')}" font-size="12">t</text>
<text x="${x1-60}" y="${Y(v)-6}" fill="${css('--fg')}" font-size="12">v=${f2(v)}</text>`}};
