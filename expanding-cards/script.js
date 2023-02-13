const cardpanels = document.querySelectorAll('.panel')

cardpanels.forEach(cardpanel => {
    cardpanel.addEventListener('mouseover', () => {
        removeActiveClasses()
        cardpanel.classList.add('active')
    })
})

function removeActiveClasses() {
    cardpanels.forEach(cardpanel => {
        cardpanel.classList.remove('active')
    })
}