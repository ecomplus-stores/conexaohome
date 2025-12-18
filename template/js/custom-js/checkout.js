import { initCheckout } from "./checkout-mt/initCheckout";
import { initCartPage } from "./mt-solucoes/cartPage";

// Add your custom JavaScript for checkout here.


window.addEventListener("load", (event) => {
  dataLayer.forEach(element => element.event == 'checkout' ? initCheckout() : null )
});

// CART PAGE
window.location.hash.split('/')[1] == 'cart' ? initCartPage() : null;
window.addEventListener('load', function () {
  function initCheckoutConfirm() {
    const btnFinish = document.querySelector('.checkout__btn-confirm');

    if (!btnFinish || document.querySelector('#block-confirm')) {
      return;
    }

    // Esconde o botão de finalizar pedido
    btnFinish.style.display = 'none';

    btnFinish.insertAdjacentHTML('beforebegin', `
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
          btnFinish.style.display = 'block';
        }
      });
  }

  // Executa no momento certo do checkout
  storefront.on('widget:@ecomplus/widget-tag-manager', initCheckoutConfirm);

  // Fallback
  setTimeout(initCheckoutConfirm, 1500);
});
