const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container-fluid')

open.addEventListener('click', () => container.classList.add('show-nav'))
open.addEventListener('click', () => document.getElementById("open").style.display = "none");
open.addEventListener('click', () => document.getElementById("close").style.display = "block");

close.addEventListener('click', () => container.classList.remove('show-nav'))
close.addEventListener('click', () => document.getElementById("close").style.display = "none");
close.addEventListener('click', () => document.getElementById("open").style.display = "block");