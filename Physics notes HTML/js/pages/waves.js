// waves page: h() gives the html, go() runs on load and whenever an input changes
PAGES.waves={t:'Waves',h:()=>`<h1>Waves</h1>
<p>A wave moves energy, not matter. <b>Frequency</b> counts crests per second (Hz). <b>Wavelength</b> is crest to crest. Speed is how fast a crest travels.</p>
<div class="f">v = fλ</div><div class="f">T = 1 / f</div>
<div class="card">${rng('wf','Frequency (Hz)',1,8,3)}${rng('wA','Amplitude',10,80,50)}<div class="out" id="o"></div><canvas id="cv" width="760" height="260"></canvas>
<small>Wave speed is fixed here at 12 m/s (the medium decides speed). Raise f and λ must shrink. Louder = bigger amplitude, higher pitch = higher f.</small></div>`,
go(){const f=N('wf'),A=N('wA'),v=12;$('#o').innerHTML=`λ = v/f = <b>${f2(v/f)}</b> m &nbsp; T = <b>${f2(1/f)}</b> s`;
cancelAnimationFrame(raf);const c=$('#cv').getContext('2d');
(function L(now){if(!$('#cv'))return;c.clearRect(0,0,760,260);c.strokeStyle=css('--ac');c.lineWidth=3;c.beginPath();
for(let x=0;x<=760;x+=4){const y=130-A*Math.sin(2*Math.PI*(x/(v/f*40)-f*now/1000)); // 40px = 1m on screen
x?c.lineTo(x,y):c.moveTo(x,y)}c.stroke();raf=requestAnimationFrame(L)})(0)}};
