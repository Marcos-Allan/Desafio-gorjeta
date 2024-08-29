const form = document.querySelector('form')
const inputValue = document.querySelector('#inputValue')
const buttonsDesconts = [...document.querySelectorAll('.porcentageValue')]
const response = document.querySelector('#res')
const message = document.querySelector('#message')
const paymentRes = document.querySelector('#paymentRes')
const btnPay = document.querySelector('#btnPay')
const modal = document.querySelector('#modal')
const molBox = document.querySelector('#modalBox')

let choaaaiceGorjeta = 0

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

function calculatePayment(btn) {
    choiceGorjeta = btn.value

    buttonsDesconts.map((btn) => {
        if(choiceGorjeta == btn.value){
            return
        }else{
            btn.style.backgroundColor = 'var(--color4)'
            btn.style.color = 'var(--color2)'
            btn.style.border = '1px solid var(--color4)'
        }
    })
    

    btn.style.backgroundColor = 'transparent'
    btn.style.color = 'var(--color2)'
    btn.style.border = '1px solid var(--color2)'

    console.log(btn.value)
    console.log(((inputValue.value / 100) * Number(btn.value.slice(0, -1))))

    const valuePay = (Number(inputValue.value) * Number((inputValue.value / 100) * Number(btn.value.slice(0, -1)))).toFixed(2)

    message.innerText = `Obrigada por pagar e nos dar a gorjeta de ${btn.value}
    `
    paymentRes.innerHTML = `o valor da conta a ser pagar ficou em: <br> <span class="payValue">R$
    ${String(20).replace('.',',')}<span>`
}

buttonsDesconts.map((btn) => {
    btn.style.backgroundColor = 'var(--color4)'
    btn.style.color = 'var(--color2)'

    btn.addEventListener('mouseenter', () => {
        if(choiceGorjeta == btn.value){
            return
        }else{

            btn.style.cursor = 'pointer'
            btn.style.backgroundColor = 'transparent'
            btn.style.color = 'var(--color2)'
            btn.style.border = '1px solid var(--color2)'
        }
    })
    
    btn.addEventListener('mouseleave', () => {
        if(choiceGorjeta == btn.value){
            return
        }else{
            btn.style.backgroundColor = 'var(--color4)'
            btn.style.color = 'var(--color2)'
            btn.style.border = '1px solid var(--color4)'
        }
    })

    btn.addEventListener('click', () => calculatePayment(btn))
})

btnPay.addEventListener('click', () => {
    modal.style.zIndex = '3'
    modal.style.opacity = '1';
    modalBox.style.transform = 'translateY(0px)';
})