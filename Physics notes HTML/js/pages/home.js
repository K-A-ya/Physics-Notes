// home page: h() gives the html, go() runs on load and whenever an input changes
PAGES.home={t:'Start',h:()=>`<h1>Physics, on graph paper.</h1>
<p>Notes for high school physics with the formulas up front, diagrams you can poke, and calculators that show their work. Pick a topic:</p>
<div class="grid">
${['motion|Motion|Speed, acceleration and the SUVAT equations','proj|Projectiles|Launch things and watch the parabola','forces|Forces|Newton\'s laws and a block on a ramp','energy|Energy|Work, KE, PE and why they trade','waves|Waves|Frequency, wavelength and speed','circuits|Circuits|Ohm\'s law, series and parallel','quiz|Quiz|Check what stuck'].map(s=>{const[a,b,c]=s.split('|');return`<a href="#${a}"><b>${b}</b>${c}</a>`}).join('')}</div>
<div class="card"><b>How to use this</b><br>Every page has the idea, the formula, a worked picture, then a calculator. Change the numbers and watch the picture move. <small>Take g = 9.8 m/s² everywhere.</small></div>`};
