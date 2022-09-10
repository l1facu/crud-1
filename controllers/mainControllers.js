const fs = require('fs');
const path = require('path');

const miData = path.join(__dirname, '../data/productsDataBase.json');
const dataBase = JSON.parse(fs.readFileSync(miData, 'utf8'));

const mainControllers = {
    index: (req, res) => {
        res.render('index')
    },
    product: (req, res) => {
            res.render('product')
    },
    contactProcess: (req, res) => {
        let newContact ={
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            image: req.body.image,
            category: req.body.category
            
        }
        dataBase.push(newContact);
        fs.writeFileSync(miData, JSON.stringify(dataBase, null, ' '))
        res.redirect('/product-create-form');
    },
    contact: (req, res) => {
    res.render('product-create-form')
    }
} 

module.exports= mainControllers;