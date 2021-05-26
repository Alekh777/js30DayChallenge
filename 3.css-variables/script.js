const inputs = document.querySelectorAll('.controls input');

function setValue(){
    let suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)
}

inputs.forEach(input => input.addEventListener('change', setValue));
inputs.forEach(input => input.addEventListener('mousemove', setValue));