// let product = "Socks";
Vue.component('product', {
    props: {
        premium: {

            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">

        <div class="product-image">
            <img v-bind:src="image" v-bind:alt="altText" />
        </div>

        <div class="product-info">
            <h1>{{ title }}</h1>
            <p>{{description}}</p>
            <a v-bind:href="link">More products like this.</a>
            <p v-if="inStock">In Stock</p>
            <p v-else class="strikethrough">Out of Stock</p>
            <p>{{ sale }}</p>
            
            <product-details :details="details"></product-details>
            
            <ul>
                <li v-for="size in sizes" :key="size">{{ size }}</li>
            </ul>

            <div
                    class="color-box"
                    v-for="(variant, index) in variants"
                    :key="variant.variantId"
                    :style="{ backgroundColor:variant.variantColor }"
                    @mouseover="updateProduct (index)"
            >
            
            </div>


            <button
                    v-on:click="addToCart"
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }"
            >
                Add to cart
            </button>

         <button v-on:click="delFromCart">delete to cart</button>
            </div>

        </div>
 `,
    data () {
        return {
            product: "Socks",
            brand: 'Vue Mastery',
            description: "A pair of warm, fuzzy socks.",
            altText: "A pair of socks",
            selectedVariant: 0,
            link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks.",
            inventory: 100,
            onSale: true,
            premium: true,
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
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
        },
        delFromCart() {
            this.$emit('delete-to-cart');
        },
        updateProduct(index) {
            this.selectedVariant = index;
            console.log(this.variants);
        },
        deleteFromCart(index) {
            console.log("sdf", index);

            this.selectedVariant = index;
        }
    },


    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        sale() {
            return this.onSale
                ? `Сейчас распродажа на ${this.brand} ${this.product}!`
                : `Распродажа не проводится на ${this.brand} ${this.product}.`;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        }
    }
})


Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
        <ul>
            <li v-for="detail in details" :key="detail">{{ detail }}</li>
        </ul>
    `
});

let app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        deleteFromCart(id){
            console.log(id);
            this.cart.pop(id);
        }
    }
})








