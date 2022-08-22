import React  from "react";
import Select from 'react-select';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const options = [
  { value: '1', label: 'Fruits' },
  { value: '2', label: 'Vegetables' },
  { value: '3', label: 'Soil Less' },
  { value: '4', label: 'Hydroponics' },
  { value: '5', label: 'Microgreens' }
 
]
class Category_Form extends React.Component {

constructor(props) {
  super(props);
  this.state = { img: "" };
  this.handleChangeImage = this.handleChangeImage.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.state = {
           name: "",
          slug: "",
          price: "",
          parent_category: "",
          description: "",
          profile_pic: ''
  }
}

  handleCategory = (e) => {

    this.setState({ [e.target.name]: e.target.value });
    this.setState({ [e.target.slug]: e.target.value });
    this.setState({ [e.target.price]: e.target.value });
    this.setState({ [e.target.description]: e.target.value });

  }
    handleParentCategory = (e) => {
    this.setState({ parent_category: e.value });
  }

handleChangeImage(e) {
  this.setState({ profile_pic: e.target.files[0] })
  console.log(e.target.files[0]);
  this.setState({ img: URL.createObjectURL(e.target.files[0]) })

  // return false
}
handleSubmit(e) {
  e.preventDefault()
  const formData = new FormData()
  formData.append('profile_pic', this.state.profile_pic)
  formData.append('name', this.state.name)
  formData.append('slug', this.state.slug)
  formData.append('price', this.state.price)
  formData.append('parent_category', this.state.parent_category)
  formData.append('description', this.state.description)
  axios.post("http://localhost:5000/category_form", formData, {
  }).then(res => {
      console.log(res)
      toast("Category Added Successfully!") 
  })
}


  render() {
    const { name, slug,price, description, image } = this.state
    return (

      <>
      
        <div className="loader"></div>
        <div id="app">
          <div className="main-wrapper main-wrapper-1">

            {/* <!-- Main Content --> */}
            <div className="main-content row">

              <div className="col-md-2 col-lg-2">
              <ToastContainer toastStyle={{ backgroundColor: "lightgrey" }} />
              </div>
              <div className="col-12 col-md-8 col-lg-8">
                <div className="card">
                  <div className="card-header text-center">
                    <h4 className="text-uppercase">Add Category</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control" value={name} onChange={this.handleCategory} required/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="slug">Slug</label>
                        <input type="text" name="slug" className="form-control" value={slug} onChange={this.handleCategory} required/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="slug">Price </label>
                        <input type="number" name="price" className="form-control" value={price} onChange={this.handleCategory} required/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="parent_category">Parent Category</label>

                        <Select name="parent_category"
                            options={options} onChange={this.handleParentCategory} />                      
                      </div>

                      <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" className="form-control" value={description} onChange={this.handleCategory}></textarea>
                      </div>


                      <div className="form-group row">
                        <div className="col-lg-6">
                          <label htmlFor="image">Image</label>
                          <input name="profile_pic" type="file" className="form-control" accept='image/*' onChange={this.handleChangeImage} />
                        </div>
                        <div className="col-lg-6">
                          <img src={this.state.img} alt="No Image" id="img" style={{ height: "150px" }} value={image} onChange={this.handleImage} />
                        </div>
                      </div>

                      <div className="card-footer text-right">
                        <button className="btn btn-primary mr-1 text-uppercase" type="submit" onClick={this.handleAlert}>Add</button>

                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-lg-2"></div>
            </div>
          </div>
        </div>

      </>
    )
  }
}

export default Category_Form