
import Categories from "../models/CategoryModel.js";
import Products from "../models/ProductModel.js";


export const Category = async (req, res) => {
  //filename
  // console.log("jhgy",req);no
  const image = req.file.filename;
  const { name, slug,price, parent_category, description} = req.body;
  try {
      Categories.create({
          name: name,
          slug: slug,
          price: price,
          parent_category: parent_category,
          description: description,
          image:image

      });
      res.status(200).json({ msg: "category added successfully" });
  } catch (error) {
      res.status(400).json({ msg: "Failed" });
  }
}


export const getCategories = async (req, res) => {
  const id = req.body.id;
  console.log("===================",id);

    try {
      const SingleData = await Categories.findOne({"id" : id});

        const allcategory = await Categories.findAll();
        const allProducts = await Products.findAll();
       
//{where:{"parent_category" : 2}}
        res.status(200).json({allcategory: allcategory,allProducts: allProducts});
    } catch (error) {
        res.status(400).json({ msg: "Failed found" });
    }
}
//get single category
export const getSingleCategory = async (req, res) => {
  
  
  const id = req.body.id;
  console.log("===================",id);

  Categories.findByPk(id)
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

export const updateCategories = async (req, res) =>
{
  console.log("hello",req.body.parent_category);
const id = req.body.id;
console.log(id);
    Categories.update(req.body, {
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
export const deleteCategories = async (req, res) => {
    
    const id = req.body.id;
    
   Categories.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "category deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete category with id=${id}. Maybe category was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete category with id=" + id
      });
    });
};



export const SingleProduct = async (req, res) => {
  const slug = req.body.slug;
  
console.log("Ddddddddsax",req.body);
try {
  const SingleData = await Categories.findOne({where:{"slug" : slug}});
   
//{where:{"parent_category" : 2}}
    const data = {
        "status":200,
        "msg":"success",
        "data":SingleData
    }
    res.status(200).json(data);
    console.log("mmmmmmmmmm",data);
} catch (error) {
    res.status(400).json({ msg: "Failed found" });
}
    

  
};
 
     