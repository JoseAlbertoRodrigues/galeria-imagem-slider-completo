let radio = document.querySelector('.manual-btn')
let count = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    nextImage()
}, 2000)

function nextImage() {
    count++
    if (count > 3) {
        count = 1
    }

    document.getElementById('radio'+count).checked = true
}