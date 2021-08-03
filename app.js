const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container-fluid')
const myNav = document.querySelector('.myNav')

open.addEventListener('click', () => container.classList.add('show-nav'))
open.addEventListener('click', () => document.getElementById("open").style.display = "none");
open.addEventListener('click', () => document.getElementById("close").style.display = "block");
open.addEventListener('click', () => document.getElementById("myNav").style.visibility = "visible");
open.addEventListener('click', () => document.getElementById("myNav").style.opacity = "1");
open.addEventListener('click', () => document.getElementById("myNav").style.transition = "opacity 1s, visibility 1s");


close.addEventListener('click', () => container.classList.remove('show-nav'))
close.addEventListener('click', () => document.getElementById("close").style.display = "none");
close.addEventListener('click', () => document.getElementById("open").style.display = "block");
close.addEventListener('click', () => document.getElementById("myNav").style.visibility = "hidden");
close.addEventListener('click', () => document.getElementById("myNav").style.opacity = "0");
close.addEventListener('click', () => document.getElementById("myNav").style.transition = "opacity 0.3s, visibility 0.3s");