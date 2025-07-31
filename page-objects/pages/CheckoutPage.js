import { Selector, t } from "testcafe";

class CheckoutPage {
    constructor() {
        this.pageTitle = Selector("head > title");
        this.checkoutList = Selector("[class^='card product-info']");
        this.checkoutListItemName = this.checkoutList.find(".line-item-name");
        this.checkoutListItemPrice = this.checkoutList.find("[class='col line-item-total-price']");
        this.continueShopping = Selector("#continue-shopping-button");
        this.deleteProductBtn = Selector("button[class='product-card-btn remove-btn-lg remove-product btn btn-light']");
        this.emptyCartMessage = Selector("[class='col-12 text-left'] h2");
        this.checkoutListItemQuantity = Selector("input.form-control.quantity");
        this.continueToDeliveryBtn = Selector(".container.checkout-continue div");
    }

    /**
     * Deletes a product from the cart by product name.
     * @param {string} productName - The name of the product to delete
     */
    async deleteProductFromCart(productName) {
        const productToDelete = this.deleteProductBtn.withAttribute("data-name", productName);
        await t.click(productToDelete);
    }

    /**
     * Gets the quantity of a product in the cart by product name.
     * @param {string} productName - The name of the product
     * @returns {Promise<string>} - The quantity value as a string
     */
    async getProductQuantity(productName) {
        const product = this.checkoutListItemQuantity.withAttribute("data-name", productName);
        return product.value;
    }
}

export default CheckoutPage;