let btn = document.getElementById('dropBtn')
let content = document.getElementById('dropCont')
let nav_container = document.getElementById('navigationpage')

function dropDown() {
    btn.addEventListener('click', () => { document.getElementById('dropCont').style.display = 'block' })
};