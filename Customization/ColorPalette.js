function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}


let container = document.querySelector('.RColor')

let numBoxes = 5;

function generateColor(){
    for(let i = 0; i < numBoxes; i++){
        let color = randomColor()
        container.innerHTML += `
        <div class="RColor">
                <div class="ColorBox" style="background-color: ${color}"></div>
                <div class="colorRGB">
                    ${color}
                </div>
            </div>
        `
    }
}

function copyToClipboard(color){
    navigator.clipboard.writeText(color)
}

generateColor()