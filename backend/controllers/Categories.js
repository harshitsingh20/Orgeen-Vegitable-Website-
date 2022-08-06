
import Categories from "../models/CategoryModel.js";


export const Category = async (req, res) => {
  //filename
  console.log("jhgy",req);
  const image = req.file.filename;

  const { name, slug, parent_category, description} = req.body;
  try {
      Categories.create({
          name: name,
          slug: slug,
          parent_category: parent_category,
          description: description,
          image:image

      });
      res.status(200).json({ msg: "category added successfully" });
  } catch (error) {
      res.status(200).json({ msg: "Failed" });
  }
}


// export const Category = async (req, res) => {

//    console.log(req.file.filename);
// const { name, slug, parent_category, description,image } = req.body;
// // file.filename

//   Categories.create({
//              name: name,
//               slug: slug,
//               parent_category: parent_category,
//               description: description,
//               image:image

    
              
//           });
// }
export const getCategories = async (req, res) => {
    try {
        const allcategory = await Categories.findAll({
            attributes: ['id', 'name', 'slug','parent_category','description','image']
        });
        res.json(allcategory);
    } catch (error) {
        res.status(200).json({ msg: "Failed found" });
    }
}
//get single category
export const getSingleCategory = async (req, res) => {
  
  const id = req.body.id;
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
 
     