import Products from "../models/ProductModel.js";


export const Product = async (req, res) => {

    const { name, slug, parent_category, regular ,sale ,description} = req.body;
   if(!name || !slug || !parent_category ||!regular ||!sale){
        return res.status(422).json({ error: "All Fields are Required"})
   }
    try {
        Products.create({
            name: name,
            slug: slug,
            parent_category: parent_category,
            regular: regular,
            sale: sale,
            description: description
            
        });
        res.status(200).json({ msg: "category added successfully" });
    } catch (error) {
        res.status(200).json({ msg: "Failed" });
    }
}

//get data

export const getProducts = async (req, res) => {
    try {
        const allproduct = await Products.findAll({
            attributes: ['id', 'name', 'slug','parent_category','regular','sale','description']
        });
        res.json(allproduct);
        console.log(allproduct);
    } catch (error) {
        res.status(200).json({ msg: "Failed found" });
    }
}

//get single category
export const getSingleProduct = async (req, res) => {
  
    const id = req.body.id;
    Products.findByPk(id)
      .then(data => {
        if (data) {
         
          res.json(data.dataValues);
        } else {
          res.status(404).send({
            message: `Cannot find category with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving category with id=" + id
        });
      });
      
    };
  
  // update
  
  export const updateProducts = async (req, res) =>
  {
    console.log("hello",req.body.parent_category);
  const id = req.body.id;
  console.log(id);
  Products.update(req.body, {
        where: { "id": id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "category was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update category with id=${id}. Maybe category was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating category with id=" + id
          });
        });
  }
//delete

export const deleteProducts = async (req, res) => {
    
    const id = req.body.id;
    
    Products.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Product with id=${id}. Maybe category was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete category with id=" + id
      });
    });
};