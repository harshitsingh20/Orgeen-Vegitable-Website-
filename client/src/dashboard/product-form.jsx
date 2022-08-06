import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import Select from 'react-select';
import axios from "axios";




class Product_Form extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   img: ""
    // }
    this.state = {
      name: "",
      slug: "",
      parent_category: "",
      regular: "",
      sale: "",
      description: ""
    };
    

  }
  componentDidMount() {
    fetch('http://localhost:5000/all_categories')
      .then(response => response.json())
      .then(result => {
        // console.log("records", result)
        this.setState({
          categories: result
        })
        
      })
      .catch(error => console.log(error))
  }
  

  handleChangeImage = e => {
    this.setState({ img: URL.createObjectURL(e.target.files[0]) })

  }

  handleCategory = (e) => {
// alert(e.target.value)
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ [e.target.slug]: e.target.value });
    this.setState({ [e.target.regular]: e.target.value });
    this.setState({ [e.target.sale]: e.target.value });
    this.setState({ [e.target.description]: e.target.value });
    

  }
  handleParentCategory = (e) => {
    this.setState({ parent_category: e.label });
  }
  handleDescriptionCategory = (e) => {
    // alert(e.editor)
    this.setState({ description: e.editor });
  }

  

  handleSubmit = (e ,form) => {

    e.preventDefault()
    
    console.log(this.state)
    axios.post('http://localhost:5000/product_form', this.state)

      .then(response => {
        console.log(response)
        
          toast("Product Added Successfully!")  
        
      })
      
      
      .catch(error => {
        console.log(error)
      })
      
  }
  


  render() {
    const { name, slug,  regular, sale, description} = this.state
    const options = [ ];
     if(this.state.categories){
      this.state.categories.map((categories)=>{       
        let pc = {
          value:categories.id,
          label:categories.parent_category
        }
        options.push(pc);
      })
     }
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
                    <h4 className="text-uppercase">Add Product</h4>
                  </div>
                  <div className="card-body">
                    <form >
                    {/* onSubmit={this.handleSubmit} */}
                      <div className="form-group">
                        <span>{this.state.success}</span>
                        <label for="name">Product Name</label>
                        <input type="text" name="name" className="form-control"  value={name} onChange={this.handleCategory} required />
                      </div>
                      <div className="form-group">
                        <label for="slug">Slug</label>
                        <input type="text" name="slug" className="form-control"value={slug} onChange={this.handleCategory}  required/>
                      </div>
                      <div className="form-group">
                        <label>Product Category</label>
                        <Select  options={options}  onChange={this.handleParentCategory} required/>
                      </div>
                      <div className="form-group">

                      </div>
                      <div className="form-group row">
                        <div className="col-lg-6">
                          <label for="regular">Reguler Price (₹)</label>
                          <input type="number" name="regular" className="form-control" value={regular} onChange={this.handleCategory}  required/></div>
                        <div className="col-lg-6">
                          <label for="sale">Sale Price (₹)</label>
                          <input type="number" name="sale" className="form-control" value={sale} onChange={this.handleCategory} required/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        {/* <Editor className="form-control" toolbarClassName="toolbarClassName" wrapperClassName="wrapperClassName" name="description" value={description} onChange={this.handleCategory}
                          editorClassName="editorClassName"
                          wrapperStyle={{ width: "100%", border: "1px solid #e4e6fc" }}
                        /> */}
                        <textarea name="description" className="form-control"   value={description} onChange={this.handleCategory} ></textarea>
                      </div>
                      <div className="form-group">
                        <label>Image Gallery</label>
                        <ImagesUploader url="http://localhost:3000/multiple" optimisticPreviews
                          onLoadEnd={(err) => {
                            if (err) {
                              console.error(err);
                            }
                          }}
                          max="4" />
                      </div>


                      <div className="form-group row">
                        <div className="col-lg-6">
                          <label>Image</label>
                          <input type="file" className="form-control" accept='image/*' onChange={this.handleChangeImage} />
                        </div>
                        <div className="col-lg-6">
                          <img src={this.state.img} alt="No Image" id="img" style={{ height: "150px", borderRadius: "10px" }} />
                        </div>
                      </div>

                      <div className="card-footer text-right">
                        <button className="btn btn-primary mr-1 text-uppercase" type="submit" onClick={this.handleSubmit}>Add</button>
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
export default Product_Form