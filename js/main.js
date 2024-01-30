let ButtonOpen = document.querySelector("#buttonOpen")
let ButtonClose = document.querySelector("#buttonClose")
let Overlay = document.querySelector("#overlay")
let PodModal = document.querySelector("#podModal")

ButtonOpen.addEventListener('click' , (e) =>{
    e.preventDefault()
    PodModal.classList.add('modalpod-active')
    PodModal.classList.remove('modalpod')

    Overlay.classList.add('overlay')
    Overlay.classList.remove('overlay-none')
})
ButtonClose.addEventListener('click' , (e) =>{
    e.preventDefault()
    PodModal.classList.remove('modalpod-active')
    PodModal.classList.add('modalpod')

    Overlay.classList.remove('overlay')
    Overlay.classList.add('overlay-none')
})
Overlay.addEventListener('click' , (e) =>{
    e.preventDefault()
    PodModal.classList.remove('modalpod-active')
    PodModal.classList.add('modalpod')

    Overlay.classList.remove('overlay')
    Overlay.classList.add('overlay-none')
})
let ButtonOpen1 = document.querySelector("#buttonOpen1")
let ButtonClose1 = document.querySelector("#buttonClose1")
let Overlay1 = document.querySelector("#overlay1")
let PodModal1 = document.querySelector("#podModal1")

ButtonOpen1.addEventListener('click' , (e) =>{
    e.preventDefault()
    PodModal1.classList.add('modalpod1-active')
    PodModal1.classList.remove('modalpod1')

    Overlay1.classList.add('overlay1')
    Overlay1.classList.remove('overlay1-none')
})
ButtonClose1.addEventListener('click' , (e) =>{
    e.preventDefault()
    PodModal1.classList.remove('modalpod1-active')
    PodModal1.classList.add('modalpod1')

    Overlay1.classList.remove('overlay1')
    Overlay1.classList.add('overlay1-none')
})
Overlay1.addEventListener('click' , (e) =>{
    e.preventDefault()
    PodModal1.classList.remove('modalpod1-active')
    PodModal1.classList.add('modalpod1')

    Overlay1.classList.remove('overlay1')
    Overlay1.classList.add('overlay1-none')
})




