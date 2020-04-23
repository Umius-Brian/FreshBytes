const db = require('../models/models.js');

const productControllers = {};
// read portion of CRUD
productControllers.getZip = (req, res, next) => {
  const zipGetReq = 
                    `SELECT s.name, s.about, p.item_name, p.price, p.description
                    FROM product p
                    INNER JOIN seller s
                    ON p.seller_id = s.seller_id
                    WHERE p.zip = $1`;
  const zip = [req.params.zip];

  db.query(zipGetReq, zip)
    .then((products) => {
      res.locals.products = products.rows;
      next();
    })
    .catch(e => console.log(e));
};
//
productControllers.productSave = (req, res, next) => {
  const {
     item_name, price, description
  } = req.body.product;
  const sellerId = res.locals.seller_id;
  const values = [ item_name, price, description, seller_id];
  console.log('this is our sellerId in productSave: ', seller_id);
  // create portion of CRUD
  // on insert you need to pass in the res.locals id from sellSave
  const saveProduct = ` INSERT INTO product(item_name, price, description)
  VALUES ($1,$2,$3)`;
  db.query(saveProduct, values)
    .then((products) => {
      next();
    })
    .catch((e) => {
      console.log(e);
      next({ e: 'error on controller product save' });
    });
};

productControllers.sellerSave = (req, res, next) => {
  console.log(req.body.product);
  const {
    name, zip, about, phone
  } = req.body.product;
  const values = [name, zip, about, phone];
  const sellerSaveQuery = ` INSERT INTO seller(name,zip,about,phone)
    VALUES ($1,$2,$3,$4) 
    RETURNING seller_id`;
  db.query(sellerSaveQuery, values)
    .then((sellers) => {
      res.locals.seller_id = sellers.rows[0].seller_id;
      res.locals.about = sellers.rows[0].about;
      next();
    })
    .catch((e) => {
      console.log('this is our error: ', e),
        next({ e: 'error on controller seller save' });
    });
};

module.exports = productControllers;
