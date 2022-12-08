const path = require('path');
const rootDir = require('../util/path');


exports.getIndex = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}
exports.getProducts = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'product.html'));
}


// exports.getProduct=(req,res)=>{
//     const prodId=req.params.productId;
//     console.log(prodId);
//     res.redirect('/')
// }
