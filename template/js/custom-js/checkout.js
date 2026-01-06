import { initCheckout } from "./checkout-mt/initCheckout"
import { initCartPage } from "./mt-solucoes/cartPage"

// CHECKOUT
window.addEventListener("load", () => {
  dataLayer.forEach(element =>
    element.event === 'checkout' ? initCheckout() : null
  )

})

// CART PAGE
window.location.hash.split('/')[1] === 'cart' ? initCartPage() : null
