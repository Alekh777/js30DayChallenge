let panel = document.querySelectorAll('.panel');

function addOpen(){
    this.classList.toggle('open');
}

panel.forEach(p => p.addEventListener('click', addOpen));