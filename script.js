// script.js

// ANIMAÇÃO SUAVE AO ROLAR

const myObserver = IntersectionObserver ((entries) =>{
  entries.forEach((entry) =>{
    if (entry.isIntersecting){
      entry.target.classlist.add('.show')
    } else{
      entry.target.classlist.remove('.show')
    }
  })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((entries) => myObserver.observer(elements))