const moreDetailsButton = document.querySelectorAll('[data-moredetails]')
const closeDiv = document.getElementById('closeDiv')
const body = document.body
const menuNav = document.querySelectorAll('[data-anchorLink]')
const form = document.getElementById('form')

// smooth scroll

function createNav(arr) {
    arr.forEach((link, index) => {
        link.addEventListener('click', scrollToSection)
        link.onclick = () => {
            if(link === moreDetailsButton[index]) {
            projectDetails.classList.add('active')
            body.classList.add('active')
            CreateDetailsPage(index)
            }
        }
    })
}

closeDiv.onclick = () => {
  projectDetails.classList.remove('active')
  body.classList.remove('active')
  setTimeout(() => {
    while(usedSkillsDiv.firstChild) {
      usedSkillsDiv.removeChild(usedSkillsDiv.firstChild)
    }
  }, 600)
    
  
}

function getDistance(element) {
    const moreDetailsIdentifier = element.getAttribute('data-moredetails')
    const id = element.getAttribute('href')
    if(moreDetailsIdentifier == '') {
        return document.querySelector(id).offsetTop
    }
    return document.querySelector(id).offsetTop - 100
}

function scrollToSection(e) {
    e.preventDefault()
    const distanceFromTop = getDistance(e.target)
    smoothScrollTo(0, distanceFromTop, 500)
}

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== "undefined" ? duration : 400;
  
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60);
}


//form validation

const nameProfile = document.forms['form']['name']
const email = document.forms['form']['email']
const phone = document.forms['form']['phone']
const message = document.forms['form']['message']

form.onsubmit = (e) => {
  e.preventDefault()
  let valid = true

  function validation() {
  
  if(nameProfile.value.length === 0 || nameProfile.value.length < 2) {
    insertError(nameProfile)
    valid = false
  } else {
    validateInput(nameProfile)
  } 
  
  if(email.value.length === 0 || email.classList.contains('invalid')) {
    insertError(email)
    valid = false
  } else {
    validateInput(email)
  }

  if(phone.value.length === 0 || phone.value.length < 14 || phone.value.length > 15) {
    insertError(phone)
    valid = false
  } else {
    validateInput(phone)
  }
  
  }
  validation()

  if(valid) {
    form.submit()
  }
}

function validateEmail(email) {
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  email.onkeyup = () => {
    if(regexEmail.test(email.value)) {
      email.classList.remove('invalid')
      return
    }
    email.classList.add('invalid')
  }
}

function validateName(name) {
  const regexName = /[0-9]/
  name.onkeyup = () => {
    if(regexName.test(name.value)) {
      name.value = ''
    }
  }
}

function maskPhone(value) {

  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

function insertError(element) {
  element.classList.remove('valid')
  element.classList.add('error')
}

function validateInput(element) {
  element.classList.remove('error')
  element.classList.add('valid')
}

phone.onkeyup = () => {
  phone.value = maskPhone(phone.value)
}
validateEmail(email)
validateName(nameProfile)
createNav(moreDetailsButton)
createNav(menuNav)