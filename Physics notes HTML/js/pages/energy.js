// energy page: h() gives the html, go() runs on load and whenever an input changes
PAGES.energy={t:'Energy',h:()=>`<h1>Energy</h1>
<p>Energy isn't made or destroyed, it just changes form. Drop something and gravitational potential energy turns into kinetic. The total stays put (ignoring air).</p>
<div class="f">KE = ½mv²</div><div class="f">GPE = mgh</div><div class="f">W = Fd cos θ</div><div class="f">P = W / t</div>
<div class="card">${rng('eh','Height above ground (m) — mass 2 kg, dropped from 10 m',0,10,10,.5)}<div class="out" id="o"></div><svg id="g" viewBox="0 0 400 160" width="520"></svg>
<small>Conservation: mg(10) = mgh + ½mv². Solve it for v and you get v = √(2g(10−h)), no kinematics needed.</small></div>`,
go(){const h=N('eh'),m=2,pe=m*G*h,tot=m*G*10,ke=tot-pe,v=Math.sqrt(2*ke/m);
$('#o').innerHTML=`GPE=<b>${f2(pe)}</b> J &nbsp; KE=<b>${f2(ke)}</b> J &nbsp; v=<b>${f2(v)}</b> m/s`;
const w=360*pe/tot; // bar width = share of the total energy
$('#g').innerHTML=`<text x="20" y="30" fill="${css('--fg')}" font-size="13">GPE</text><rect x="20" y="36" width="${w}" height="26" fill="${css('--ac2')}"/>
<text x="20" y="92" fill="${css('--fg')}" font-size="13">KE</text><rect x="20" y="98" width="${360-w}" height="26" fill="${css('--ac')}"/>
<rect x="20" y="36" width="360" height="26" fill="none" stroke="${css('--fg')}"/><rect x="20" y="98" width="360" height="26" fill="none" stroke="${css('--fg')}"/>`}};
