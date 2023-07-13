import { initCheckout } from "./checkout-mt/initCheckout";

// Add your custom JavaScript for checkout here.
window.location.hash.split('#/')[1] == 'checkout' ? initCheckout() : null;
