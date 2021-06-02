let panel = document.querySelectorAll('.panel');

function addOpen(){
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
}

panel.forEach(p => p.addEventListener('click', addOpen));
panel.forEach(panel => panel.addEventListener('transitionend', toggleActive));