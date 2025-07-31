import { Selector, t } from "testcafe";

class ProductCategoryPage {
    constructor() {
        this.pageTitle = Selector("head > title");
        this.header = Selector("h1[class='ui-a2 ui-if ui-io ui-i3 ui-jf ui-a4']");
        this.compareButton = Selector("button.ui-n3.ui-qs.hbd-product-list-toolbar__hidden-sm.ui-n4");
        this.sortButton = Selector("#dropdown-button-product-list-toolbar-sortbox");
        this.priceRangeSliderMinSelector = "minRangeInput-from_price_incl_vat_td";
        this.priceRangeSliderMaxSelector = "maxRangeInput-from_price_incl_vat_td";
        this.priceRangeSliderMinLabel = Selector("label[for='minRangeInput-from_price_incl_vat_td']");
        this.priceRangeSliderMaxLabel = Selector("label[for='maxRangeInput-from_price_incl_vat_td']");
        this.productCards = Selector("[data-card-type='machine-specification']");
        this.productAddToCartButton = this.productCards.find("[class='ui-n3 ui-jm ui-jo hbd-card-commerce__buy-button ui-n4']");
        this.productFirstCardWithAddToCartBtn = this.productAddToCartButton.nth(0);
        this.productFirstCardWithAddToCartBtnName = this.productFirstCardWithAddToCartBtn.parent("[class='hui-box hui-flexbox--container hui-size--sm-w-full hbd-card__frame']").find("h3");
        this.productFirstCardWithAddToCartBtnPrice = this.productFirstCardWithAddToCartBtn.parent("[class='hui-box hui-flexbox--container hui-size--sm-w-full hbd-card__frame']").find("[data-ui-component='ProductPrice'] span");
    }

    /**
     * Sets the price range slider values for min and max.
     * Directly manipulates the DOM elements and dispatches change events.
     * @param {number|string} minValue - The minimum value to set
     * @param {number|string} maxValue - The maximum value to set
     */
    async setSliderValue(minValue, maxValue) {

        await this.setSliderMinValue(minValue);
        await this.setSliderMaxValue(maxValue);
    }

    /**
     * Sets the price range slider values for min .
     * Directly manipulates the DOM elements and dispatches change events.
     * @param {number|string} minValue - The minimum value to set
     */
    async setSliderMinValue(minValue) {
        await t.eval(() => {
            const rangeMinElement = document.getElementById(minElementSelector);
            rangeMinElement.value = minValue;
            rangeMinElement.dispatchEvent(new Event('change', { bubbles: true }));
        }, {
            dependencies: {
                minValue,
                minElementSelector: this.priceRangeSliderMinSelector
            }
        });
    }

    /**
     * Sets the price range slider values for max .
     * Directly manipulates the DOM elements and dispatches change events.
     * @param {number|string} maxValue - The maximum value to set
     */
    async setSliderMaxValue(maxValue) {
        await t.eval(() => {
            const rangeMaxElement = document.getElementById(maxElementSelector);
            rangeMaxElement.value = maxValue;
            rangeMaxElement.dispatchEvent(new Event('change', { bubbles: true }));
        }, {
            dependencies: {
                maxValue,
                maxElementSelector: this.priceRangeSliderMaxSelector
            }
        });
    }
}

export default ProductCategoryPage;