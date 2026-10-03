// circuits page: h() gives the html, go() runs on load and whenever an input changes
PAGES.circuits={t:'Circuits',h:()=>`<h1>Circuits</h1>
<p>Voltage pushes charge, current is the flow of charge, resistance fights the flow.</p>
<div class="f">V = IR</div><div class="f">P = IV = I²R</div>
<div class="f">Series: R<sub>T</sub> = R₁ + R₂ &nbsp;&nbsp; Parallel: 1/R<sub>T</sub> = 1/R₁ + 1/R₂</div>
<div class="card"><div class="row">${inp('cv_','Battery V',12)}${inp('r1','R₁ (Ω)',4)}${inp('r2','R₂ (Ω)',6)}</div><div class="out" id="o"></div>
<svg viewBox="0 0 400 150" width="480"><g fill="none" style="stroke:var(--fg)" stroke-width="2.5"><path d="M40 75V20H150M250 20H360V130H250M150 130H40V75"/><rect x="150" y="8" width="100" height="24" style="fill:var(--card)"/><rect x="150" y="118" width="100" height="24" style="fill:var(--card)"/><path d="M30 60h20M36 90h8" style="stroke:var(--ac)" stroke-width="4"/></g>
<g style="fill:var(--fg)" font-size="14"><text x="190" y="25">R₁</text><text x="190" y="135">R₂</text><text x="56" y="78">V</text></g></svg>
<small>Drawn as series. In series current is the same everywhere and voltages add. In parallel voltage is the same and currents add.</small></div>`,
go(){const V=N('cv_'),a=N('r1'),b=N('r2'),s=a+b,p=a*b/(a+b||1);
$('#o').innerHTML=`<b>Series</b>: R<sub>T</sub>=${f2(s)} Ω, I=${f2(V/s)} A, P=${f2(V*V/s)} W<br><b>Parallel</b>: R<sub>T</sub>=${f2(p)} Ω, I=${f2(V/p)} A, P=${f2(V*V/p)} W`}};
