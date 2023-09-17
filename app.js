const $btnYes = document.querySelector('.js-yes'),
$btnNo = document.querySelector('.js-no'),
$confirm = document.querySelector('.js-confirm'),
$dialog = document.querySelector('.js-dialog'),
$body = document.querySelector('body')

let counter = 0

$btnYes.addEventListener('mouseover', (e) => {
    e.target.innerHTML = 'Yes na yes for u'
})

$btnYes.addEventListener('click', () => {
    $body.classList.add('yes')
})

$btnNo.addEventListener('mouseover', (e) => {
    const $target = e.target
    
    $target.style.top = `${Math.random() * 200}px`
    $target.style.right = `${Math.random() * 200}px`

    if (counter >= 2) {
        $target.innerHTML = 'Eh ayaw'
    }

    counter += 1
})