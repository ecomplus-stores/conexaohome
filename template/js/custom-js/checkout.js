import { initCheckout } from "./checkout-mt/initCheckout";
import { initCartPage } from "./mt-solucoes/cartPage";

// Add your custom JavaScript for checkout here.


window.addEventListener("load", (event) => {
  dataLayer.forEach(element => element.event == 'checkout' ? initCheckout() : null )
});

// CART PAGE
window.location.hash.split('/')[1] == 'cart' ? initCartPage() : null;

storefront.on('widget:@ecomplus/widget-tag-manager', function () {
  const checkoutBtn = document.querySelector('.cart__btn-checkout');

  if (!checkoutBtn || document.querySelector('#block-confirm')) {
    return;
  }

  // Esconde o botão inicialmente
  checkoutBtn.style.display = 'none';

  checkoutBtn.insertAdjacentHTML('beforebegin', `
    <div id="block-confirm" class="form-group">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" id="input-confirm-checkout" class="custom-control-input">
        <label for="input-confirm-checkout" class="custom-control-label">
          Ao finalizar a compra, confirmo que estou ciente e concordo que os pedidos realizados e aprovados<br>
          entre 20/12 e 04/01 serão processados a partir do dia 05/01/2026,<br>
          e o prazo de entrega passará a contar a partir dessa data.
        </label>
      </div>
    </div>
  `);

  document
    .querySelector('#input-confirm-checkout')
    .addEventListener('change', function () {
      if (this.checked) {
        document.querySelector('#block-confirm').style.display = 'none';
        checkoutBtn.style.display = 'block';
      }
    });
});
