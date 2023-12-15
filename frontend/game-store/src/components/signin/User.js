class User {
    constructor(userId){
        this.id = userId
        this.cart = []
        this.wishlist = []
        this.wallet = 0
        this.order = []
    }

    addToCart(item){
        this.cart.push(item);
    }

    addToWishlist(item){
        this.wishlist.push(item);
    }

    addToOrder(item){
        this.order.push(item);
    }

    addToWallet(value){
        const numericValue = parseFloat(value)

        if(!isNaN(numericValue)){
            this.wallet += numericValue
        }
    }    

    substractFromWallet(value){
        const numericValue = parseFloat(value)

        if(!isNaN(numericValue)){
            this.wallet -= numericValue
        }
    }
}

export default User