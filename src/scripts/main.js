document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-op-button]');

    for (let i = 0; i < buttons.length; i++ ) {
        buttons[i].addEventListener('click', function(botao) {
            const sectionAlvo = botao.currentTarget.dataset.opButton;
            const section = document.querySelector(`[data-op-id=${sectionAlvo}]`)
            escondetodasSections()
            section.classList.add('filme--is-active')
        })
    }
})

function escondetodasSections() {
    const sections = document.querySelectorAll('[data-op-id]');

    for (let i = 0; i < sections.length; i++ ) {
        sections[i].classList.remove('filme--is-active');
    }
}