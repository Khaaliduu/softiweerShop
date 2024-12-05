import Users from "../models/userModel.js";
import Product from "../models/productsModel.js";


export const addToCart  = async(req, res) => {
    try {

        
        const {userId, productId} = req.body;

        const product = await Product.findById(productId);
        let user = await Users.findById(userId).populate("cart.product").populate("wishlist.product")
        if (user.cart.length == 0) {
            user.cart.push({product, quantity:1})
        
        }else{
            let isProductFound = false;
            for (let i=0;i<user.cart.length;i++){
                if (user.cart[i].product._id.equals(product._id)){
                    isProductFound = true;
                }
            }
            if (isProductFound) {
               let producttt = user.cart.find(pro=>
                pro.product._id.equals(product._id)
                );
                producttt.quantity++;

            }else{
                user.cart.push({product, quantity:1})
            }
        }

        
        

        user =await user.save()
        res.status(200).json(user)


    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}




export const addToWishlist  = async(req, res) => {
    try {

        
        const {userId, productId} = req.body;

        const product = await Product.findById(productId);
        let user = await Users.findById(userId).populate("cart.product").populate("wishlist.product")
        if (user.wishlist.length == 0) {
            user.wishlist.push({product})
        
        }else{
            let isProductFound = false;
            for (let i=0;i<user.wishlist.length;i++){
                if (user.wishlist[i].product._id.equals(product._id)){
                    isProductFound = true;
                }
            }
            if (isProductFound) {
               res.status(400).json({message:"aleardy added"})

            }else{
                user.wishlist.push({product})
            }
        }

        
        

        user = await user.save()
        res.status(200).json(user)


    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}


export const removeCartItem  = async(req, res) => {
    try {

        
        const {userId, productId} = req.body;

        const product = await Product.findById(productId);
        let user = await Users.findById(userId).populate("cart.product").populate("wishlist.product")

        for (let index = 0; index < user.cart.length; index++) {
            if (user.cart[index].product._id.equals(product.Product._id)) {
                if (user.cart[i].quantity == 1) {
                    user.cart.splice(index, 1)
                    
                }else{
                    user.cart[index].quantity-=1;
                }
            }
            
        }

        user = await user.save()
        res.status(200).json(user)


    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}







export const deleteCartItem  = async(req, res) => {
    try {

        
        const {userId, index} = req.body;
        let user = await Users.findById(userId).populate("cart.product").populate("wishlist.product")

        if (user) {
            user.cart.splice(index, 1)
        }


        user = await user.save()
        res.status(200).json(user)


    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}


export const deleteWishlistItem  = async(req, res) => {
    try {

        
        const {userId, index} = req.body;
        let user = await Users.findById(userId).populate("cart.product").populate("wishlist.product")

        if (user) {
            user.wishlist.splice(index, 1)
        }


        user = await user.save()
        res.status(200).json(user)


    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}