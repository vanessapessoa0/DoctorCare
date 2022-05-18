window.addEventListener('scroll', onScroll)

// onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTop()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTop() {
  if (scrollY > 550) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

function activateMenuAtCurrentSection (section) {
  //Linha imaginária:
  const targetLine = scrollY + innerHeight/2
  // console.log(targetLine)
  
  // verificar se a seção passou da linha imaginária
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  //Verifica se o topo da seção chegou ou ultrapassou a linha imaginparia
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
  // console.log(sectionTopReachOrPassedTargetline)


  // verificar se a base está abaixo da linha alvo
  // Mostra onde termina a seção:
  const sectionEndsAt = sectionTop + sectionHeight
  // console.log(sectionEndsAt)
  // Mostra se o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
  sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`) 

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

}


function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}


ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home,
  #home img, 
  #home .infos,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content,
  #contact`
) 