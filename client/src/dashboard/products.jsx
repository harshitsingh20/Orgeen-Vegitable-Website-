import React from "react";
import Select from 'react-select';
import $, { event } from 'jquery';
import { MDBDataTable } from "mdbreact";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const options = [
  { value: 'Fruits', label: 'Fruits' },
  { value: 'Hypodronics', label: 'Hypodronics' },
  { value: 'Microgreens', label: 'Microgreens' },
  { value: 'Monthly Subscriptions', label: 'Monthly Subscriptions' },
  { value: 'Others', label: 'Others' },
  { value: 'Soil Less', label: 'Soil Less' },
  { value: 'Vegetables', label: 'Vegetables' }
]
class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: "",
      id: "",
      name: "",
      slug: "",
      parent_category: "",
      regular: "",
      sale: "",

      description: "",
      value: ""


    };
    this.state = {
      records: []

    };

    this.getSingleProduct = this.getSingleProduct.bind(this);
    }

  handleChangeImage = e => {
    this.setState({ img: URL.createObjectURL(e.target.files[0]) })

  }
  componentDidMount() {
    fetch('http://localhost:5000/all_products')
      .then(response => response.json())
      .then(records => {
        console.log("records", this.state.records)
        this.setState({
          records: records
          
        })
        // alert(records)

      })
      // .catch(error => console.log(error))
  }

  deleteRow(event) {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure want to Delete ?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            console.log(event.target.dataset.id);
            const data = {
              "id": event.target.dataset.id
            }
            axios.post('http://localhost:5000/delete_products', data)
              .then(res => console.log(res.data));
            window.location.reload(false);
          }
        },
        {
          label: 'No',
          onClick: () => { return false; }
        }
      ]
    });

  }

  getSingleProduct(event) {  
    const datas = {
      "id": event.target.dataset.id
    }
    event.preventDefault();
    axios.post('http://localhost:5000/single_products', datas)
      .then(res => {
        console.log("helo", res.data.parent_category);
        this.setState({ id: res.data.id });
        this.setState({ name: res.data.name });
        this.setState({ slug: res.data.slug });
        this.setState({ parent_category:res.data.parent_category});
        this.setState({ regular:res.data.regular});
        this.setState({ sale:res.data.sale});
        this.setState({ description: res.data.description })

      });
  }

  handleUpdate = (e) => {
    e.preventDefault()
    // const multipleValues = $( "#parent_category" ).value();
    const updatedata = {
      "id": this.state.id,
      "name": e.target[1].value,
      "slug": e.target[2].value,
      "parent_category": e.target[4].value,
      "regular": e.target[5].value,
      "sale": e.target[6].value,
      "description": e.target[7].value
    }
    console.log("hello", e.target)
    axios.post('http://localhost:5000/api/update_products', updatedata)
      .then(response => {
        console.log(response)
        window.location.reload(false);
      })
      .catch(error => {
        console.log(error)
      })

  }
loaded () {
    toast("Category Updated Successfully!")

  }

  // 
  // handleParentCategory = (e) => {
  //   this.setState({ parent_category: e.value });
  // } 

  render() {
    const { id, name, slug, description, parent_category,regular,sale,image } = this.state
    const data = {
      columns: [
        {
          label: "Id",
          field: "SrNo",
          sort: "asc",
          width: 150,
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 150,
        },
        {
          label: "Slug",
          field: "slug",
          sort: "asc",
          width: 270,
        },

        {
          label: "Parent Category",
          field: "parent_category",
          sort: "asc",
          width: 100,
        },
        
        {
          label: "Regular Price",
          field: "regular",
          sort: "asc",
          width: 100,
        },
        {
          label: "Sale Price",
          field: "sale",
          sort: "asc",
          width: 100,
        },
        {
          label: "Description",
          field: "description",
          sort: "asc",
          width: 200,
        },
        {
          label: "Image",
          field: "image",
          sort: "asc",
          width: 150,
        },
        {
          label: "Action",
          field: "action",
          sort: "asc",
          width: 150,
        },


      ],
      rows: this.state.records.map((item, index) => {

        return {
          SrNo: index + 1,

          name: item.name,
          slug: item.slug,
          parent_category: item.parent_category,
          regular: item.regular,
          sale: item.sale,
          description: item.description,
          image:  <img src={`assets/img/uploads/${item.image}`} alt="First slide" className='img-fluid' height="50" width="60px" />,

          action: <div className="text-center"><input className="btn-primary px-3 py-1 border-0" type="button" value="EDIT" data-toggle="modal" data-target="#exampleModal" onClick={this.getSingleProduct} data-id={item.id} />  <input className="btn-danger px-3 py-1 border-0" type="button" data-id={item.id} value="DELETE" onClick={this.deleteRow} /></div>,
        }
      })
    };

    return (
      <>

        <div className="loader"></div>
        <div id="app">
          <div className="main-wrapper main-wrapper-1">
            {/* {/ <!-- Main Content --> /} */}
            <div className="main-content" onload="loaded();">
              <ToastContainer toastStyle={{ backgroundColor: "lightgrey" }} />
              <section className="section">
                <MDBDataTable striped bordered small data={data} />

              </section>
              {/* {/ model /} */}
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="formModal"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="formModal">Update Category</h5>
                      {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button> */}
                    </div>
                    <div class="modal-body">
                      <form onSubmit={this.handleUpdate}>
                        <div className="form-group">

                          <input type="hidden" name="id" className="form-control" id="id" value={id} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input type="text" name="name" className="form-control" id="name" defaultValue={name} onChange={this.getSingleProduct} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="slug">Slug</label>
                          <input type="text" name="slug" className="form-control" defaultValue={slug} onChange={this.getSingleProduct} id="slug" />
                        </div>
                        <div>{slug}</div>
                        <div className="form-group">
                          <label htmlFor="parent_category">Parent Category</label>
                          <Select name="parent_category" defaultValue={
                            options.filter(option =>
                              option.value ==parent_category)
                          } options={options}   id="parent_category"/>
                        </div>
                        <div className="form-group row">
                        <div className="col-lg-6">
                          <label for="regular">Reguler Price (₹)</label>
                          <input type="number" name="regular" className="form-control" defaultValue={regular} onChange={this.getSingleProduct}/></div>
                        <div>{sale}</div>
                        <div className="col-lg-6">
                          <label for="sale">Sale Price (₹)</label>
                          <input type="number" name="sale" className="form-control" defaultValue={sale} onChange={this.getSingleProduct}/>
                        </div>
                      </div>
                        <div className="form-group">
                          <label htmlFor="description">Description</label>
                          <textarea name="description" className="form-control" id="description" defaultValue={description} onChange={this.getSingleProduct} ></textarea>
                        </div>

                        <div className="form-group row">
                          <div className="col-lg-6">
                            <label htmlFor="image">Image</label>
                            <input name="image" type="file" className="form-control" accept='image/*' onChange={this.handleChangeImage} />
                          </div>
                          <div className="col-lg-6">
                            <img src={this.state.img} alt="No Image" id="img" style={{ height: "150px" }} />
                          </div>
                        </div>

                        <div className="text-right">
                          <button className="btn btn-primary mr-1 text-uppercase"  type="submit">Update</button>

                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* {/ model /} */}
            </div>
          </div>
        </div>


      </>


    )
  }
}
export default Products