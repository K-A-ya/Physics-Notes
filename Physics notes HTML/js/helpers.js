// shared stuff every page file uses (load this FIRST)
// tiny helpers: $ grabs stuff, N reads a number input (0 if blank), f2 rounds
const $=q=>document.querySelector(q), N=id=>parseFloat($('#'+id).value)||0, f2=x=>(+x).toFixed(2), G=9.8;
const inp=(id,l,v,s=1)=>`<label>${l}<input id=${id} type=number value=${v} step=${s}></label>`;
const rng=(id,l,a,b,v,s=1)=>`<label>${l}: <b id=${id}O>${v}</b><input id=${id} type=range min=${a} max=${b} value=${v} step=${s}></label>`;
// canvas can't read css vars directly, so we pull the colours out by hand
const css=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const rad=d=>d*Math.PI/180;
let raf=0;


// each file in js/pages/ adds itself to this
const PAGES={};
