const { imageUploadUtils } = require("../../helpers/cloudinary");
const Product = require("../../models/Product");
const { find } = require("../../models/User");


const handleImageUpload = async (req, res) => {
    try {
        const b64 = Buffer.from(req.file.buffer).toString('base64');
        const url = 'data' + req.file.mimetype + ";base64," + b64;
        // const url = `data:${req.file.mimetype};base64,${b64}`;
        const result = await imageUploadUtils(url);

        res.json({
            success: true,
            result
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "An error occured",
        });
    }
};

//add a new product
const addProduct = async(req, res) => {
    try {
        const{image,title,description,category,brand,price,salePrice,totalStock} = req.body;
        const newlyCreatedProduct = new Product({
            image,title,description,category,brand,price,salePrice,totalStock
        })
        await newlyCreatedProduct.save();
        res.status(201).json({
            success: true,
            data: newlyCreatedProduct,
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error occured",
        });
    }
}

//fetch all products

const fetchAllProducts = async(req, res) => {
    try {
        const listOfProducts = await Product.find({})
        res.status(200).json({
            success: true,
            data: listOfProducts,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error occured"
        })
    }
}

//edit a product
const editProduct = async(req, res) => {
    try {
        const {id} = req.params;
        const{image,title,description,category,brand,price,salePrice,totalStock} = req.body;
        const findeProduct = await Product.findById(id);
        if(!findeProduct)
            return res.status(404).json({
                success: false,
                message: "Produnct not found",
            });
            findeProduct.title = title || findeProduct.title;
            findeProduct.description = description || findeProduct.description
            findeProduct.category = category || findeProduct.category
            findeProduct.brand = brand || findeProduct.brand
            findeProduct.price = price || findeProduct.price
            findeProduct.salesPrice = salePrice ||  findeProduct.salesPrice
            findeProduct.totalStock = totalStock || findeProduct.totalStock
            findeProduct.image = image || findeProduct.image

            await findeProduct.save()
            res.status(200).json({
                success: true,
                data: findeProduct,
            })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error occured"
        })
        
    }
}

//delete a product
const deleteProduct = async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id);

        if(!product)
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
            res.status(200).json({
                success: true,
                message: 'Product delete successfully'
            })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message:"Error occured"
        })
        
    }
}


module.exports = {handleImageUpload, addProduct, fetchAllProducts, editProduct, deleteProduct}
