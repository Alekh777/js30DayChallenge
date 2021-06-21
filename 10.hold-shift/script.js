let index = [-1, -1];

let shiftPressed = false;
document.addEventListener("keydown", (e) => {
    if (e.key === "Shift")
        shiftPressed = true;
});

document.addEventListener("keyup", (e) => {
    if (e.key === "Shift")
        shiftPressed = false;
});

const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
checkBoxes.forEach((checkBox, i) => {
    checkBox.addEventListener("click", function checked(e){
        if(shiftPressed){
            if(index[0] == -1) {
                console.log("i put", i);
                index[0] = i;
            }
            else{
                 index[1] = i;
                console.log("i put", i);
            }
            console.log("Clicked and Shift Pressed")
            if(index[1] != -1)
                markAll();
        }
    });
});

function markAll(){
    let start, end;
    end = Math.max(index[0], index[1]);
    start = Math.min(index[0], index[1]);
    console.log(start, end);
    for(let i = start; i <= end; i++)
        checkBoxes[i].setAttribute('checked', 'true');
}