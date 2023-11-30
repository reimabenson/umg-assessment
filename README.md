# umg-coding-challenge

## Requirements

> ## UMG Coding Challenge: Shopify Developer ##
>
> ### Objective ###
> Build a user-friendly, interactive product page on Shopify with basic cart functionalities.
>
> ### Requirements ###
> 1. Create a product page template using Shopify 2.0 features. The page should display a
> product with the ability to select variations (like size and color) if applicable. It should:
>> * Allow non-technical admins to customize content with sections, blocks, and dynamic data sources.
>> * Make use of the new sections and blocks schema.
>> * Use metafields to allow admins to add custom content to the page.
> 2. Enable the user to add products to the cart directly from this product page using
> JavaScript or TypeScript. Ensure that the cart reflects the items added without needing
> to refresh the page.
> 3. Implement cart functionalities allowing the user to:
>> * Increase or decrease the quantity of the items directly from the cart.
>> * Remove items from the cart.
>> * Note: Provide intuitive feedback when cart actions are in progress and prevent
> multiple submissions.
>
> ### Notes ###
> Focus on clear, readable, and maintainable code rather than complex features.
> Ensure that the user interface is intuitive and accessible.
>
> ### Delivery ###
> Create a Github Repo and share with: dhruveonmars, dgpalmer and trvswgnr

---

## Setup guide and assets ##
1. Download test Product CSV [here.](https://drive.google.com/file/d/1bUOMBvkEnExgpa8gq94YZokvVEGBb_cR/view?usp=sharing)
2. Create a development store from your [Shopify Partner account.](https://www.shopify.com/partners)
3. Import the downloaded product CSV to the development store. [Learn More](https://help.shopify.com/en/manual/products/import-export/import-products)
4. Update product inventroy properly in order to check assessment. (stock / out of stock) [Lean More](https://help.shopify.com/en/manual/products/inventory/managing-inventory-quantities/track_inventory)
5. Add the `theme` to the store using Git repo or as a `*.zip` file. [Learn More](https://shopify.dev/docs/themes/tools/github/getting-started)
6. Publish the added theme. (You can click `Publish` button.)
7. Visit `Product Template` in admin panel or visit product page directly for the test product which you added.
8. [Here](https://www.loom.com/share/a448ae83b3f847158fb48f9f58e0be2d?sid=1700998d-5d70-4e10-add1-5bff08ad78b1) is a demo video for setup

## Notes ##
* This theme is top of `Element Register` architecture and `Custom Element` architecture at the same time. 
* `Product` page controller `./assets/product-controller.js` [link](https://github.com/reimabenson/umg-assessment/blob/main/assets/product-controller.js)
* All pages are blank page exception the product page. You need to visit product page directly via the product page link.
* `Search`, `Variant Switch`, `AddToCart`, `QuickCart` features are available to check

## Demo Page on my Store ##
* Here is a demo product page [link](https://reima-benson.myshopify.com/products/umg?variant=47233470202164)
* Password is `umgtest` 
* Some variants are out of stock






