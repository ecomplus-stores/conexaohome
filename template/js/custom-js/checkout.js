import { initCheckout } from "./checkout-mt/initCheckout"
import { initCartPage } from "./mt-solucoes/cartPage"

// CHECKOUT
window.addEventListener("load", () => {
  dataLayer.forEach(element =>
    element.event === 'checkout' ? initCheckout() : null
  )

  // AVISO DE RECESSO NO CHECKOUT
  const interval = setInterval(() => {
    const checkoutBtn = document.querySelector('.cart__btn-checkout')

    // se ainda não existe, espera
    if (!checkoutBtn) return

    // se já tem o bloco, não duplica
    if (document.querySelector('#block-confirm')) {
      clearInterval(interval)
      return
    }

    clearInterval(interval)

    // esconde o botão de finalizar compra
    checkoutBtn.style.display = 'none'

    // insere o aviso antes do botão
    checkoutBtn.insertAdjacentHTML('beforebegin', `
      <div id="block-confirm" class="form-group">
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            id="input-confirm-checkout"
            class="custom-control-input"
          >
          <label for="input-confirm-checkout" class="custom-control-label">
            Ao finalizar a compra, confirmo que estou ciente e concordo que os pedidos realizados e aprovados
            entre 20/12 e 04/01 serão processados a partir do dia 05/01/2026, e o prazo de entrega passará a contar a partir dessa data.
          </label>
        </div>
      </div>
    `)

    const confirmInput = document.querySelector('#input-confirm-checkout')

    // libera o botão somente após marcar o checkbox
    confirmInput.addEventListener('change', function () {
      if (this.checked) {
        document.querySelector('#block-confirm').remove()
        checkoutBtn.style.display = 'block'
      }
    })
  }, 300)
})

// CART PAGE
window.location.hash.split('/')[1] === 'cart' ? initCartPage() : null
