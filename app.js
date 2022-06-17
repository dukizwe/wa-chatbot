const conversation = document.querySelector('.help-desk__container .conversation')
const helpdeskOpener = document.querySelector('button.helpdesk__opener')
const closeBtn = document.querySelector('.help-desk__container .conversation .close_btn')
const sendBtn = document.querySelector('.help-desk__container button.send')
const textarea = document.querySelector('.help-desk__container .conversation textarea')

// open helpdesk
helpdeskOpener.addEventListener('click', e => {
          e.preventDefault()
          conversation.classList.toggle('visible')
          helpdeskOpener.classList.toggle('opened')
})

// close helpdesk with closeBtn
closeBtn.addEventListener('click', e => {
          e.preventDefault()
          conversation.classList.remove('visible')
          helpdeskOpener.classList.remove('opened')
})

// close helpdesk with escape button
window.addEventListener('keyup', e => {
          e.preventDefault()
          if(e.keyCode === 27) {
                    conversation.classList.remove('visible')
                    helpdeskOpener.classList.remove('opened')
          }
})

// send message with enter press
textarea.addEventListener('keypress', e => {
          if(e.keyCode == 13 && !e.shiftKey && textarea.value.trim() != '') {
                    const url = `https://wa.me/25771227171?text=${textarea.value}`
                    window.open(url, '_blank').focus();
                    textarea.value = ''
                    conversation.classList.remove('visible')
                    helpdeskOpener.classList.remove('opened')
                    e.preventDefault()
          }
})

// disable send button if empty
textarea.addEventListener('keyup', e => {
          if(textarea.value.trim() != '') {
                    sendBtn.disabled = false
          } else {
                    sendBtn.disabled = true
          }
})

// send message with send button
sendBtn.addEventListener('click', e => {
          e.preventDefault()
          if(textarea.value.trim() != '') {
                    const url = `https://wa.me/25771227171?text=${textarea.value}`
                    window.open(url, '_blank').focus()
                    textarea.value = ''
                    conversation.classList.remove('visible')
                    helpdeskOpener.classList.remove('opened')
          }
})

// autoGrow textarea
const autoGrow = field => {
          field.style.height = '40px'

          var computed = window.getComputedStyle(field)
          var height = parseInt(computed.getPropertyValue('border-top-width'), 10) + parseInt(computed.getPropertyValue('padding-top'), 10) + field.scrollHeight + parseInt(computed.getPropertyValue('padding-bottom'), 10) + parseInt(computed.getPropertyValue('border-bottom-width'), 10) - 8
          field.style.height = height + 'px'
}

document.addEventListener('input', e => {
          console.log(e.target.tagName.toLowerCase())
          if(e.target.tagName.toLowerCase() === 'textarea') {
                    return autoGrow(e.target)
          }
}, false)