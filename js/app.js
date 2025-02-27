const getElement = (selector) = {
    const element = document.queryselector(selector)
    if(element) return element
    throw Error(
        'Please double check your class names, there is no $s{selector} class'
    )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListiner('click', () = {
    links.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new date().getFullYear()
date.textContent = currentYear

