// let product = "Socks";
let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        brand: 'Vue Mastery',
        image: "./assets/vmSocks-green-onWhite.jpg",
        description: "A pair of warm, fuzzy socks.",
        altText: "A pair of socks",
        selectedVariant: 0,
        link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks.",
        inventory: 100,
        onSale: true,
        inStock: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
                variantQuantity: 0
            }
        ],

        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        deleteToCart() {
            this.cart -= 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        },




    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        sale() {
            return this.onSale
                ? `Сейчас распродажа на ${this.brand} ${this.product}!`
                : `Распродажа не проводится на ${this.brand} ${this.product}.`;
        }
    }
});


