const arrowLeft = document.getElementById('arrowLeft')
const arrowRight = document.getElementById('arrowRight')
const slide = document.getElementById('slide')
const ImagesSlide = document.getElementsByClassName('slideImg')
const qtdImagesSlide = ImagesSlide.length
const miniatures = document.getElementById('miniatures').children

arrowRight.addEventListener('click', () => {

    const imageWidth = document.getElementsByClassName('slideImg')[0].width

    if (slide.style.marginLeft === "") {
        // Início do slide
        // As imagens têm 500px
        changeMiniatures(1)
        return slide.style.marginLeft = `-${imageWidth}px`
    }

    if (slide.style.marginLeft !== "") {
        // O Slide já andou
        // a variável margin pega o valor da margin atual
        // e a constante selectedImageSlide guarda qual a imagem atual está mostrando

        let margin = Number(slide.style.marginLeft.replace("px", ""))
        const selectedImageSlide = ((margin / imageWidth) * -1) + 1;

        changeMiniatures(selectedImageSlide)

        if (selectedImageSlide < qtdImagesSlide) {
            margin = margin - imageWidth

            return slide.style.marginLeft = margin + 'px'
        }
    }
})

arrowLeft.addEventListener('click', () => {

    const imageWidth = document.getElementsByClassName('slideImg')[0].width

    if (slide.style.marginLeft === "" || slide.style.marginLeft === "0px") {
        // Início do slide
        // As imagens têm 500px
        return
    }

    if (slide.style.marginLeft !== "") {
        // O Slide já andou
        // a variável margin pega o valor da margin atual
        // e a constante selectedImageSlide guarda qual a imagem atual está mostrando

        let margin = Number(slide.style.marginLeft.replace("px", ""))
        const selectedImageSlide = ((margin / imageWidth) * -1);

        changeMiniatures(selectedImageSlide, 1)

        if (selectedImageSlide <= qtdImagesSlide) {
            margin = margin + imageWidth
            return slide.style.marginLeft = margin + 'px'
        }
    }

})

Object.values(miniatures).map((element, key) => {
    element.addEventListener('click', () => {

        const imageWidth = document.getElementsByClassName('slideImg')[0].width

        Object.values(miniatures).map((element) => {
            element.style.background = '#e4e4e4'
            element.style.border = 'none'
        })

        //Estilizar a miniatura como selecionada
        element.style.background = 'none'
        element.style.border = '1px solid rgba(0,0,0,0.8)'

        return slide.style.marginLeft = -key * imageWidth + 'px'
    })
})

function changeMiniatures(selected, direction = 0) {
    if (selected > qtdImagesSlide - 1) {
        return
    }

    Object.values(miniatures).map((element) => {
        element.style.background = '#e4e4e4'
        element.style.border = 'none'
    })

    miniatures[selected - direction].style.background = 'none'
    miniatures[selected - direction].style.border = '1px solid rgba(0,0,0,0.8)'

}