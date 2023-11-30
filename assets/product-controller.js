/**
 * Validates if the provided argument is a plain object.
 * Throws an error if the argument is not an object or is an array.
 * @param {Object} n - The object to validate.
 */
var __n$1 = function (n) {
    var t;
    if ("object" != typeof (t = n) || Array.isArray(t)) {
        throw "state should be an object";
    }
};

/**
 * Processes a list of event names and executes associated callbacks with given arguments.
 * @param {Array} n - Array of event names.
 * @param {Object} t - Object containing event callbacks keyed by event names.
 * @param {*} e - Data to be passed to callbacks.
 * @param {*} c - Additional data to be passed to callbacks.
 * @returns {Array} - Results of the callback executions.
 */
var __t$1 = function (n, t, e, c) {
    var r = n;
    return r.reduce(function (n, t) {
        return n.indexOf(t) > -1 ? n : n.concat(t);
    }, []).reduce(function (n, e) {
        return n.concat(t[e] || []);
    }, []).map(function (n) {
        return n(e, c);
    });
};

/**
 * Dispatches a custom event named 'umg:event-handler' with the provided arguments.
 * @param {...any} arguments - A variable number of arguments that will be passed as details of the custom event.
 */
var __r$1 = function () {
    __umgDispatchCustomEvent('umg:event-handler', { ...arguments })
};

/**
 * Query selector function to find a single element in the DOM.
 * @param {string} selector - The CSS selector of the element to find.
 * @param {Document} [root=document] - The root element to search within, defaults to the entire document.
 * @returns {Element|null} - The first element that matches the selector, or null if none found.
 */
function __n$2(selector, root) {
    if (root === undefined) {
        root = document;
    }
    return root.querySelector(selector);
}


/**
 * Query selector function to find all elements matching a selector in the DOM.
 * @param {string} selector - The CSS selector of the elements to find.
 * @param {Document} [root=document] - The root element to search within, defaults to the entire document.
 * @returns {Element[]} - An array of elements that match the selector.
 */
function __t$2(selector, root) {
    if (root === undefined) {
        root = document;
    }
    return [].slice.call(root.querySelectorAll(selector));
}

/**
 * Utility function to apply a callback either to an array or a single element.
 * @param {Array|Object} items - An array or a single item to apply the callback to.
 * @param {Function} callback - The callback function to apply.
 */
function __c$1(items, callback) {
    if (Array.isArray(items)) {
        items.forEach(callback);
    } else {
        callback(items);
    }
}

/**
 * Factory function to create event listener adding/removing functions.
 * @param {string} method - The method to use, either 'add' or 'remove'.
 * @returns {Function} - A function that adds or removes event listeners.
 */
function __r$2(method) {
    return function (elements, event, handler) {
        return __c$1(elements, function (element) {
            element[method + "EventListener"](event, handler);
        });
    };
}

/**
 * Function to add an event listener and return a function to remove it.
 * @param {Element|Element[]} elements - The elements to add the event listener to.
 * @param {string} event - The event to listen for.
 * @param {Function} handler - The event handler function.
 * @returns {Function} - A function that when called, will remove the added event listener.
 */
function __e$2(elements, event, handler) {
    __r$2("add")(elements, event, handler);
    return function () {
        __r$2("remove")(elements, event, handler);
    };
}

/**
 * Factory function to create class manipulation functions (add, remove, toggle).
 * @param {string} method - The method to use, either 'add', 'remove', or 'toggle'.
 * @returns {Function} - A function that applies the class manipulation method.
 */
function __o$2(method) {
    return function (element) {
        var args = arguments;
        return __c$1(element, function (el) {
            var classListMethod;
            classListMethod = el.classList[method].apply(el.classList, [].slice.call(args, 1));
        });
    };
}

/**
 * Function to add a class to an element or elements.
 * @param {Element|Element[]} elements - The elements to add the class to.
 * @param {...string} classNames - The class names to add.
 */
function __u$1(elements) {
    __o$2("add").apply(undefined, [elements].concat([].slice.call(arguments, 1)));
}

/**
 * Function to remove a class from an element or elements.
 * @param {Element|Element[]} elements - The elements to remove the class from.
 * @param {...string} classNames - The class names to remove.
 */
function __i$1(elements) {
    __o$2("remove").apply(undefined, [elements].concat([].slice.call(arguments, 1)));
}

/**
 * Function to toggle a class on an element or elements.
 * @param {Element|Element[]} elements - The elements to toggle the class on.
 * @param {...string} classNames - The class names to toggle.
 */
function __l(elements) {
    __o$2("toggle").apply(undefined, [elements].concat([].slice.call(arguments, 1)));
}

/**
 * Function to check if an element has a specific class.
 * @param {Element} element - The element to check.
 * @param {string} className - The class name to check for.
 * @returns {boolean} - True if the element contains the class, false otherwise.
 */
function __a$1(element, className) {
    return element.classList.contains(className);
}

/**
 * Selects all elements within the DOM that match a given selector.
 * @param {Element} dom - The parent DOM element to start the search from.
 * @param {string} selector - The CSS selector string to match elements.
 * @return {NodeListOf<Element>} A NodeList of found elements, or an empty list if none are found.
 */
function __s$2(selector, root) {
    if (root === undefined) {
        root = document;
    }
    return root.querySelectorAll(selector) ?? [];
}

/**
 * Dispatches a custom event with optional data.
 * This function creates and dispatches an event on the document object.
 * @param {string} eventName - The name of the event to dispatch.
 * @param {Object} [data={}] - Optional data to be passed with the event.
 */
function __umgDispatchCustomEvent(eventName, data = {}) {
    const eventDetail = {
        detail: data
    };
    const event = new CustomEvent(eventName, data ? eventDetail : null);
    document.dispatchEvent(event);
}


/**
 * Checks if localStorage is available in the current browser environment.
 * @returns {boolean} True if localStorage is available, false otherwise.
 */
function __umgLocalStorageAvailable() {
    var test = "test";
    try {
        localStorage.setItem(test, test);
        if (localStorage.getItem(test) !== test) {
            return false;
        }
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}

const _UMG_PREFIX = "__umg_";

/**
 * Retrieves a value from localStorage after parsing it as JSON.
 * @param {string} key - The key to retrieve the value for.
 * @returns {Object|null} The parsed JSON object from localStorage, or null if not found.
 */
function __umgGetStorage(key) {
    if (!__umgLocalStorageAvailable()) return null;
    return JSON.parse(localStorage.getItem(_UMG_PREFIX + key));
}

/**
 * Removes a value from localStorage.
 * @param {string} key - The key of the value to remove.
 * @returns {boolean} True if the operation is successful.
 */
function __umgRemoveStorage(key) {
    if (!__umgLocalStorageAvailable()) return null;
    localStorage.removeItem(_UMG_PREFIX + key);
    return true;
}

/**
 * Sets a value in localStorage after stringifying it.
 * @param {string} key - The key to store the value under.
 * @param {Object} val - The value to store.
 * @returns {boolean} True if the operation is successful.
 */
function __umgSetStorage(key, val) {
    if (!__umgLocalStorageAvailable()) return null;
    localStorage.setItem(_UMG_PREFIX + key, val);
    return true;
}

// Configuration for Shopify cart routes.
const umgRoutes = window.theme.routes.cart || {};
const __umgPaths = {
    base: "".concat(umgRoutes.base || "/cart", ".js"),
    add: "".concat(umgRoutes.add || "/cart/add", ".js"),
    change: "".concat(umgRoutes.change || "/cart/change", ".js"),
    clear: "".concat(umgRoutes.clear || "/cart/clear", ".js"),
    update: "".concat(umgRoutes.update || "/cart/update", ".js")
};

// Accessing localized strings for cart operations from the theme.
const {
    strings: {
        cart: umgStr$6
    }
} = window.theme;

/**
 * Sorts the items in the cart based on a predefined order.
 * @param {Object} cart - The cart object containing items to sort.
 * @returns {Object} The cart object with sorted items.
 */
function umgSortCart(cart) {
    const order = __umgGetStorage("cartOrders") || [];
    if (order.length) {
        cart.sorted = [...cart.items].sort((a, b) => order.indexOf(a.variant_id) - order.indexOf(b.variant_id));
        return cart;
    }
    cart.sorted = cart.items;
    return cart;
}

/**
 * Updates a specific item in the cart by its key and quantity.
 * @param {string} key - The unique key of the item in the cart.
 * @param {number} quantity - The new quantity for the item.
 * @returns {Promise} A promise that resolves after updating the item.
 */
function umgUpdateItem(key, quantity) {

    return umgGet().then(_ref => {

        let { items } = _ref;

        for (let i = 0; i < items.length; i++) {
            if (items[i].key === key) {
                return umgChangeItem(i + 1, key, quantity); // Shopify cart is 1-based index.
            }
        }
    });
}

/**
 * Changes the quantity of an item in the cart.
 * @param {number} line - The line number of the item in the cart.
 * @param {string} itemKey - The unique key of the item.
 * @param {number} quantity - The new quantity for the item.
 * @returns {Promise} A promise that resolves with the updated cart.
 */
function umgChangeItem(line, itemKey, quantity) {

    return fetch(__umgPaths.change, {

        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ line, quantity })

    }).then(res => {

        if (res.status === 422) {
            const error = { code: 422, message: umgStr$6.quantityError };
            umgHandleError(error, "umgChangeItem", itemKey);
        } else {
            return res.json();
        }
    }).then(cart => {

        __r$1("cart:updated", { cart });
        __r$1("quick-cart:updated");

        return umgSortCart(cart);
    });
}

/**
 * Adds an item to the cart by its ID and specified quantity.
 * @param {string} id - The unique ID of the item.
 * @param {number} quantity - The quantity to add.
 * @returns {Promise} A promise that resolves with the updated cart.
 */
function umgAddItemById(id, quantity) {

    __r$1("cart:updating");

    let data = { items: [{ id, quantity }] };

    return fetch(__umgPaths.add, {

        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)

    }).then(r => r.json()).then(res => {

        if (res.status === 422) {
            const error = { code: 422, message: res.description };
            umgHandleError(error, "umgAddItemById", id);
        }

        return umgGet().then(cart => {

            __r$1("quick-cart:updated");
            __r$1("cart:updated", { cart });

            return { res, cart };
        });
    });
}

/**
 * Retrieves the current state of the cart.
 * @returns {Promise} A promise that resolves with the sorted cart data.
 */
function umgGet() {

    return fetch(__umgPaths.base, {
        method: "GET",
        credentials: "include"
    }).then(res => res.json()).then(data => {
        return umgSortCart(data);
    });
}

/**
 * Adds an item to the shopping cart and updates the cart state.
 * @param {HTMLFormElement} form - The form element containing the item data to be added to the cart.
 * @returns {Promise} A promise that resolves with the updated cart information including the newly added item.
 */
function umgAddItem(form) {

    __r$1("cart:updating");

    return fetch(__umgPaths.add, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Requested-With": "XMLHttpRequest"
        },
        body: umgSerialize(form)
    }).then(r => r.json()).then(res => {

        if (res.status == "422") {
            const error = {
                code: 422,
                message: res.description
            };
            umgHandleError(error, "umgAddItem", null);
        }

        return umgGet().then(cart => {

            const order = __umgGetStorage("cartOrders") || [];

            const newOrder = [res.variant_id, ...order.filter(i => i !== res.variant_id)];

            __umgSetStorage("cartOrders", JSON.stringify(newOrder));
            __r$1("cart:updated", {
                cart: umgSortCart(cart)
            });

            __r$1("quick-cart:updated");
            __r$1("quick-view:close");

            __umgDispatchCustomEvent("cart:updated", {
                cart: umgSortCart(cart)
            });

            return {
                item: res,
                cart: umgSortCart(cart)
            };
        });
    });
}

/**
 * Handles errors that occur during cart operations such as adding or changing items.
 * @param {Object} error - The error object containing details about the error.
 * @param {string} source - A string identifying the source of the error (e.g., 'umgChangeItem', 'umgAddItemById').
 * @param {string|null} itemKeyOrId - The key or ID of the item related to the error, if applicable.
 * @throws Will throw an error to be caught by calling functions.
 */
function umgHandleError(error, source, itemKeyOrId) {

    __umgDispatchCustomEvent("cart:error", {
        errorMessage: error.message
    });
    if (source === "umgChangeItem") {
        __r$1("quick-cart:error", null, {
            key: itemKeyOrId,
            errorMessage: umgStr$6.quantityError
        });
        __r$1("cart:error", null, {
            key: itemKeyOrId,
            errorMessage: umgStr$6.quantityError
        });
    } else if (source === "umgAddItemById") {
        __r$1("quick-add:error", null, {
            id: itemKeyOrId,
            errorMessage: umgStr$6.quantityError
        });
    }
    throw error;
}

/**
 * Serializes all form data into a URL-encoded query string.
 * This function is useful for preparing form data to be sent in a URL query string or in an AJAX request.
 * It properly handles multiple select options, checkboxes, and radio buttons.
 * 
 * Note: This function will ignore form fields that are disabled, as well as fields of type 'file', 'reset', 'submit', and 'button'.
 * 
 * Source: Chris Ferdinandi, MIT License, https://gomakethings.com
 * 
 * @param {HTMLFormElement} form - The form element whose data is to be serialized.
 * @returns {string} A string in the format of a URL-encoded query, representing the serialized form data.
 */
function umgSerialize(form) {
    var arr = [];
    Array.prototype.slice.call(form.elements).forEach(function (field) {
        if (!field.name || field.disabled || ["file", "reset", "submit", "button"].indexOf(field.type) > -1) {
            return;
        }
        if (field.type === "select-multiple") {
            Array.prototype.slice.call(field.options).forEach(function (option) {
                if (!option.selected) return;
                arr.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(option.value));
            });
            return;
        }
        if (["checkbox", "radio"].indexOf(field.type) > -1 && !field.checked) {
            return;
        }
        arr.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
    });
    return arr.join("&");
}

/**
 * Object containing various functions related to cart operations.
 */
var umgCart = {
    addItem: umgAddItem,
    get: umgGet,
    updateItem: umgUpdateItem,
    addItemById: umgAddItemById
}

/**
 * @class __UMG_Product
 * Represents a product element, extending the capabilities of HTMLElement to manage 
 * product-related actions like variant selection, quantity updates, and form submission.
 */
class __UMG_Product extends HTMLElement {

    /**
     * Selectors for various elements related to the product.
     */

    $ = {
        add_to_cart: '[data-add-to-cart]',
        button_selected: 'button.selected',
        variant_picker: 'umg-variant-picker',
        variant_json: '[data-variant-json]',
        variant_option: 'umg-variant-picker .product__option[data-product-option] button[data-button]',
        variant_list: 'umg-variant-picker select',
        option_container: '.product__option[data-product-option]',
        data_opbion_buttons: '[data-option-buttons]',
        selection_option_value: '[data-selected-value-for-option]',
        quantity_input: 'umg-quantity-input input.quantity-input__input',
        quantity_button_subtract: 'umg-quantity-input button[data-subtract-quantity]',
        quantity_button_add: 'umg-quantity-input button[data-add-quantity]',
        product_form: 'form[data-product-form]'
    }

     // Variables to store product variants and the currently selected variant.
    productVariants = [];
    currentVariant = null;

    /**
     * Constructs an instance of the __UMG_Product class.
     * This constructor initializes the product variants from JSON embedded in the HTML,
     * and sets up various event listeners for user interactions like updating variants,
     * changing quantities, and submitting the product form.
     *
     * It parses the product variants JSON and stores it for further processing.
     * The event listeners are bound to their respective functions using the `.bind(this)` 
     * to ensure they operate within the context of the class instance.
     *
     * Additionally, it immediately updates the availability of the variants based on the
     * initial state or user's previous selections (if applicable).
     */
    constructor() {
        super(); // Call the constructor of the parent class, HTMLElement.

        // Parse and store product variant information from the HTML.
        const variantsJSON = __n$2(this.$.variant_json, this);
        if (variantsJSON) this.productVariants = JSON.parse(variantsJSON.innerHTML);

        // Update the availability of the variants based on the current selections.
        this.updateVariantsAvailability();

        // Set up event listeners for user interactions related to variant selection, quantity adjustments, and form submission.
        __s$2(this.$.variant_option, this).forEach(element => {
            element.addEventListener('click', this.updateVariant.bind(this));
        });
        __s$2(this.$.quantity_input, this).forEach(element => {
            element.addEventListener('input', this.updateQuantity.bind(this));
        });
        __s$2(this.$.quantity_button_subtract, this).forEach(element => {
            element.addEventListener('click', this.quantityDecrease.bind(this));
        });
        __s$2(this.$.quantity_button_add, this).forEach(element => {
            element.addEventListener('click', this.quantityIncrease.bind(this));
        });
        __s$2(this.$.product_form, this).forEach(element => {
            element.addEventListener('submit', this.onFormSubmit.bind(this));
        });
    }

    
    /**
     * Updates the selected variant based on user interaction.
     * @param {Event} evt - The event object from the click event.
     */
    updateVariant(evt) {
        evt.preventDefault();  // Prevent the default action of the event.

        const targetElement = evt.target;  // Get the element that triggered the event.
        // Retrieve the value of the selected option from the clicked element.
        const currentOptionValue = targetElement.getAttribute('data-option-value'); 

        // Find the closest parent element that matches the data option buttons selector.
        const currentOptionBox = targetElement.closest(this.$.data_opbion_buttons);
        // Select the variant list within the context of the current option box.
        const optionList = __n$2(this.$.variant_list, currentOptionBox);

        optionList.value = currentOptionValue;  // Update the value of the option list to reflect the selected option.

        // Find the closest parent element that is an option container.
        const OptionContainer = currentOptionBox.closest(this.$.option_container);
        // If an option container is found, update its inner HTML to show the selected option value.
        if (OptionContainer) __n$2(this.$.selection_option_value, OptionContainer).innerHTML = currentOptionValue;

        // Remove the 'selected' class from the previously selected button in the current option box.
        __n$2(this.$.button_selected, currentOptionBox).classList.remove('selected');
        targetElement.classList.add('selected');  // Add the 'selected' class to the clicked element.

        this.updateVariantsAvailability();  // Update the availability of other variants based on the current selection.
    }


    /**
     * Updates the availability of variants based on the current selection.
     */
    updateVariantsAvailability() {
        // Create a new Map to store selected options.
        const selectedOptions = new Map();

        // Loop through each selected option value element and store its data.
        this.querySelectorAll(this.$.selection_option_value).forEach(option => {
            selectedOptions.set(option.getAttribute('data-option-name'), option.innerHTML);
        });

        // Remove the 'disabled' class from all buttons that were previously disabled.
        this.querySelectorAll('umg-variant-picker [data-option-buttons] button.disabled').forEach(element => element.classList.remove('disabled'));

        // Generator function to filter variants based on selected options.
        function* variantFilter(Variants) {
            // Filter variants based on the first option and yield the result.
            let filteredVariants = Variants.filter(variant => variant.option1 === selectedOptions.get('option1'));
            yield filteredVariants;

            // Further filter the variants based on the second option and yield the result.
            filteredVariants = filteredVariants.filter(variant => variant.option2 === selectedOptions.get('option2'));
            yield filteredVariants;

            // Finally, filter the variants based on the third option and yield the result.
            filteredVariants = filteredVariants.filter(variant => variant.option3 === selectedOptions.get('option3'));
            yield filteredVariants;
        }

        // Initialize the generator with product variants.
        const productVariantsFilter = variantFilter(this.productVariants);

        let filteredVariants;

        // Switch case to handle different numbers of selected options.
        switch (selectedOptions.size) {
            case 2:
                // For two selected options, process the first two filters.
                filteredVariants = productVariantsFilter.next().value;
                filteredVariants.map(variant => {
                    if (!variant.available)
                        // Disable unavailable variants for the second option.
                        this.querySelector(`umg-variant-picker [data-index="option2"] button[data-option-value="${variant.option2}"]`)?.classList.add('disabled');
                });
                break;
            case 3:
                // For three selected options, process all three filters.
                productVariantsFilter.next().value;
                filteredVariants = productVariantsFilter.next().value;
                filteredVariants.map(variant => {
                    if (!variant.available)
                        // Disable unavailable variants for the third option.
                        this.querySelector(`umg-variant-picker [data-index="option3"] button[data-option-value="${variant.option3}"]`)?.classList.add('disabled');
                });
                break;
            default:
                break;
        }

        // Process the final filter to get the final set of filtered variants.
        filteredVariants = productVariantsFilter.next().value;

        // Update the 'Add to Cart' button based on the final variant selection.
        this.updateAddToCartButton();

        // If there is only one filtered variant, update the current variant.
        if (filteredVariants.length == 1) {
            const currentVariantId = filteredVariants[0].id;
            this.currentVariant = filteredVariants[0];

            // Set the attribute for the current variant ID.
            this.querySelector(this.$.variant_picker)?.setAttribute('data-current-variant-id', currentVariantId);

            // Update the URL to reflect the current variant.
            this.updateVariantURL(currentVariantId);

            // Dispatch a custom event indicating the variant has changed.
            __umgDispatchCustomEvent('product:variant-change', {
                variant: this.currentVariant
            });
        }
    }


    /**
     * Updates the 'Add to Cart' button based on the variant availability.
     */
    updateAddToCartButton() {
        // Loop through all 'Add to Cart' buttons that are currently disabled and update them.
        this.querySelectorAll('button[type="submit"][name="add"][disabled="disabled"]').forEach(button => {
            // Set the inner HTML of the button to show it's available, using the data attribute.
            button.querySelector('[data-add-to-cart-text]').innerHTML = button.getAttribute('data-lang-available');
            // Remove the 'disabled' attribute to enable the button.
            button.removeAttribute('disabled');
        });

        // Check if the currently selected variant is disabled (sold out).
        const disabledVariant = this.querySelector('[data-option-buttons] button.selected.disabled');

        // If a disabled variant is selected, update the 'Add to Cart' buttons accordingly.
        if (disabledVariant) {
            this.querySelectorAll('button[type="submit"][name="add"]').forEach(button => {
                // Change the button text to indicate the variant is sold out.
                button.querySelector('[data-add-to-cart-text]').innerHTML = button.getAttribute('data-lang-sold-out');
                // Disable the button as the selected variant is not available.
                button.setAttribute('disabled', 'disabled');
            });
        }
    }


    /**
     * Constructs a URL with the specified variant ID.
     * @param {string} url - The base URL.
     * @param {string} id - The variant ID to append to the URL.
     * @returns {string} The updated URL with the variant ID.
     */
    getUrlWithVariant(url, id) {
        if (/variant=/.test(url)) {
            return url.replace(/(variant=)[^&]+/, '$1' + id);
        } else if (/\?/.test(url)) {
            return url.concat('&variant=').concat(id);
        }

        return url.concat('?variant=').concat(id);
    }

    /**
     * Updates the URL to reflect the current variant ID.
     * @param {string} variantId - The ID of the current variant.
     */
    updateVariantURL(variantId) {
        const url = this.getUrlWithVariant(window.location.href, variantId);
        window.history.replaceState({
            path: url
        }, "", url);
    }

    /**
     * Updates the quantity of the product based on user input.
     * @param {Event} evt - The event object from the input event.
     */
    updateQuantity(evt) {
        evt.preventDefault();  // Prevent the default action of the event.

        const targetElement = evt.target;  // Get the input element that triggered the event.
        // Get the current value of the input, default to "0" if empty.
        const currentValue = targetElement.value === "" ? "0" : targetElement.value;
        // Update the input value, ensuring it's at least 1.
        targetElement.value = Math.max(1, parseInt(currentValue));

        // Dispatch a custom event indicating the quantity has been updated.
        __umgDispatchCustomEvent('product:quantity-update', {
            quantity: targetElement.value,
            variant: this.currentVariant
        });
    }


    /**
     * Increases the quantity of the product by 1.
     * @param {Event} evt - The event object from the click event.
     */
    quantityIncrease(evt) {
        evt.preventDefault();  // Prevent the default action of the event.

        // Find the closest quantity input element related to the clicked button.
        const quantityElement = evt.target.closest('umg-quantity-input').querySelector(this.$.quantity_input);
        // Increase the quantity by 1, default to "1" if the current value is empty.
        quantityElement.value = parseInt(quantityElement.value === "" ? "0" : quantityElement.value) + 1;

        // Dispatch a custom event indicating the quantity has been updated.
        __umgDispatchCustomEvent('product:quantity-update', {
            quantity: quantityElement.value,
            variant: this.currentVariant
        });
    }


    /**
     * Decreases the quantity of the product by 1, ensuring it does not go below 1.
     * @param {Event} evt - The event object from the click event.
     */
    quantityDecrease(evt) {
        evt.preventDefault();  // Prevent the default action of the event.

        // Find the closest quantity input element related to the clicked button.
        const quantityElement = evt.target.closest('umg-quantity-input').querySelector(this.$.quantity_input);
        // Decrease the quantity by 1 but ensure it's at least 1, default to "1" if the current value is empty.
        quantityElement.value = Math.max(1, (parseInt(quantityElement.value === "" ? "0" : quantityElement.value) - 1));

        // Dispatch a custom event indicating the quantity has been updated.
        __umgDispatchCustomEvent('product:quantity-update', {
            quantity: quantityElement.value,
            variant: this.currentVariant
        });
    }


    /**
     * Handles the form submission for the product, including purchase confirmation and error handling.
     * @param {Event} evt - The event object from the submit event.
     */
    onFormSubmit(evt) {
        // Query selectors for various elements like confirmation popup and quick cart.
        const purchaseConfirmation = __n$2('.purchase-confirmation-popup', document);
        const quickCart = __n$2('.quick-cart');
        const isQuickViewForm = Boolean(evt.target.closest('.quick-product'));

        // If no confirmation popup or quick cart, and not a quick view form, return without further action.
        if (!purchaseConfirmation && !quickCart && !isQuickViewForm) return;

        evt.preventDefault();  // Prevent the default form submission action.

        const productFrom = evt.target;  // Get the form element that triggered the event.

        // Query for an element that may display quantity errors.
        const quantityError = __n$2('[data-quantity-error]', this);

        // Hide the quantity error initially.
        __u$1(quantityError, 'hidden');

        // Query for all 'Add to Cart' buttons within the context of this element.
        const buttonEls = __t$2(this.$.add_to_cart, this);

        // Add a loading state to all 'Add to Cart' buttons.
        buttonEls.forEach(button => {
            __u$1(button, 'loading');
        });

        // Attempt to add the item to the cart.
        umgCart.addItem(productFrom).then(_ref4 => {
            let { item } = _ref4;  // Destructure the item from the response.

            // Remove the loading state from all 'Add to Cart' buttons.
            buttonEls.forEach(button => {
                __i$1(button, "loading");
            });

            // Open the confirmation popup or update and open the quick cart, depending on the setup.
            if (purchaseConfirmation) {
                __r$1("confirmation-popup:open", null, {
                    product: item
                });
            } else {
                __r$1("quick-cart:updated");
                // Open the quick cart with a delay to allow for refresh.
                setTimeout(() => {
                    __r$1("quick-cart:open");
                }, 300);
            }

            // Dispatch a custom event indicating an item has been added to the cart.
            __umgDispatchCustomEvent("cart:item-added", {
                product: item
            });

        }).catch(error => {
            // In case of an error, update local cart data.
            umgCart.get();

            // Handle different types of error messages.
            if (error && error.message) {
                if (typeof error.message === "object") {
                    // Handle object type error messages, typically for specific form fields.
                    const sectionID = n$2('.product-form__gift-card-recipient', this).dataset.sectionId;
                    Object.entries(error.message).forEach(_ref5 => {
                        let [key, value] = _ref5;
                        // Update each relevant error message element with the error details.
                        const errorMessageID = "display-gift-card-recipient-".concat(key, "-error--").concat(sectionID);
                        const errorMessage = __n$2("#".concat(errorMessageID), this);
                        const errorInput = __n$2("#display-gift-card-recipient-".concat(key, "--").concat(sectionID), this);
                        errorMessage.innerText = value;
                        __i$1(errorMessage, "hidden");
                        errorInput.setAttribute("aria-invalid", true);
                        errorInput.setAttribute("aria-describedby", errorMessageID);
                    });
                } else {
                    // Handle simple string error messages.
                    quantityError.innerText = error.message;
                    __i$1(quantityError, "hidden");
                }
            } else {
                // Use a fallback error message if no specific error message is provided.
                quantityError.innerText = quantityError.getAttribute("data-fallback-error-message");
                __i$1(quantityError, "hidden");
            }

            // Remove the loading state from all 'Add to Cart' buttons after handling the error.
            buttonEls.forEach(button => {
                __i$1(button, "loading");
            });
        });
    }

}

/**
 * @class __UMG_CartItem
 * Represents a cart item element, extending the capabilities of HTMLElement to manage cart item interactions such as quantity updates and removal.
 */
class __UMG_CartItem extends HTMLElement {

    /**
     * Selectors for various cart item related elements.
     */
    $ = {
        item: '[data-input-item]',
        quantity_input: 'input.quantity-input__input',
        quantity_button_subtract: 'button[data-subtract-quantity]',
        quantity_button_add: 'button[data-add-quantity]',
        remove_button: 'button[data-remove-item]'
    }

    /**
     * Constructs an instance of the __UMG_CartItem class.
     * This constructor is responsible for setting up the initial state and event listeners 
     * for the cart item element. It binds various user interactions to corresponding methods 
     * for handling quantity adjustments (both increase and decrease) and item removal.
     *
     * Each event listener is bound to its respective handler method with `.bind(this)` to 
     * ensure they operate within the context of the class instance. This setup allows the 
     * cart item element to respond appropriately to user actions, such as changing the quantity 
     * of an item or removing it from the cart.
     */
    constructor() {
        super(); // Call the constructor of the parent HTMLElement class.

        // Setup event listeners for the quantity input field. 
        // These listeners will handle changes in the input value.
        __s$2(this.$.quantity_input, this).forEach(element => {
            element.addEventListener('input', this.updateQuantity.bind(this));
        });

        // Setup event listeners for the subtract quantity button. 
        // These will decrease the item quantity when clicked.
        __s$2(this.$.quantity_button_subtract, this).forEach(element => {
            element.addEventListener('click', this.itemSubtract.bind(this));
        });

        // Setup event listeners for the add quantity button. 
        // These will increase the item quantity when clicked.
        __s$2(this.$.quantity_button_add, this).forEach(element => {
            element.addEventListener('click', this.itemAdd.bind(this));
        });

        // Setup event listeners for the remove item button. 
        // These will remove the item from the cart when clicked.
        __s$2(this.$.remove_button, this).forEach(element => {
            element.addEventListener('click', this.itemRemove.bind(this));
        });
    }

    /**
     * Updates the quantity of the cart item based on user input.
     * @param {Event} evt - The event object from the input event.
     */
    updateQuantity(evt) {
        // Find the closest cart item element to the event target.
        const item = evt.target.closest(this.$.item);
        
        // Extract the key data attribute from the item.
        const { key } = item.dataset;
        // Get the current quantity from the event target's value.
        const quantity = evt.target.value;
        
        // Call a method to update the UI status of the cart line item.
        this.updateCartLineStatus(item);

        // Update the cart item in the cart with the new quantity.
        umgCart.updateItem(key, quantity === "" ? 0 : parseInt(quantity));
    }

    
    /**
     * Decreases the quantity of the cart item by 1.
     * @param {Event} evt - The event object from the click event.
     */
    itemSubtract(evt) {
        // Find the closest cart item element to the event target.
        const item = evt.target.closest(this.$.item);

        // Extract the key data attribute from the item.
        const { key } = item.dataset;
        // Get the current quantity from the input element within the item.
        const quantity = __n$2(this.$.quantity_input, item).value;
        
        // Call a method to update the UI status of the cart line item.
        this.updateCartLineStatus(item);

        // Update the cart item in the cart by decreasing the quantity by 1.
        umgCart.updateItem(key, quantity === "" ? 0 : parseInt(quantity) - 1);
    }


    /**
     * Increases the quantity of the cart item by 1.
     * @param {Event} evt - The event object from the click event.
     */
    itemAdd(evt) {
        // Find the closest cart item element to the event target.
        const item = evt.target.closest(this.$.item);

        // Extract the key data attribute from the item.
        const { key } = item.dataset;
        // Get the current quantity from the input element within the item.
        const quantity = __n$2(this.$.quantity_input, item).value;
        
        // Call a method to update the UI status of the cart line item.
        this.updateCartLineStatus(item);

        // Update the cart item in the cart by increasing the quantity by 1.
        umgCart.updateItem(key, quantity === "" ? 1 : parseInt(quantity) + 1);
    }


    /**
     * Removes the cart item.
     * @param {Event} evt - The event object from the click event.
     */
    itemRemove(evt) {
        // Find the closest cart item element to the event target.
        const item = evt.target.closest(this.$.item);

        // Extract the key data attribute from the item.
        const { key } = item.dataset;
        
        // Call a method to update the UI status of the cart line item.
        this.updateCartLineStatus(item);

        // Update the cart item in the cart to have a quantity of 0, effectively removing it.
        umgCart.updateItem(key, 0);
    }


    /**
     * Updates the status of the cart line item, typically for UI feedback.
     * @param {HTMLElement} item - The cart item element.
     */
    updateCartLineStatus(item) {
        __u$1(item, 'has-quantity-update');
    }
}

// Registering the __UMG_Product class as a custom element named 'umg-product'.
// This allows the use of <umg-product> tags in HTML, which will be associated with the __UMG_Product class.
customElements.define("umg-product", __UMG_Product);

// Similarly, registering the __UMG_CartItem class as a custom element named 'umg-cart-item'.
// This enables the use of <umg-cart-item> tags in HTML, linked to the __UMG_CartItem class.
customElements.define("umg-cart-item", __UMG_CartItem);
