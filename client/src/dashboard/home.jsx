import React from "react";



class Home extends React.Component
{
  componentDidMount() {
    fetch('http://localhost:5000/all_categories')
        .then(response => response.json())
        .then(records => {
            console.log("records", this.state.records)
            this.setState({
                records: records

            })
            

        })
        
        .catch(error => console.log(error))
}
    render()
    {
        return(
          
            <>
           
             {/* <div className="loader"></div> */}
             <div className="loader"></div>
  <div id="app">
    <div className="main-wrapper main-wrapper-1">  
    
      {/* <!-- Main Content --> */}
      <div className="main-content">
        <section className="section">
          <div className="row">
            <div className="col-xl-3 col-lg-6">
              <div className="card l-bg-green-dark">
                <div className="card-statistic-3">
                  <div className="card-icon card-icon-large"><i className="fa fa-award"></i></div>
                  <div className="card-content">
                    <h4 className="card-title">New Orders</h4>
                    <span>524</span>
                    <div className="progress mt-1 mb-1" data-height="8">
                      <div className="progress-bar l-bg-purple" role="progressbar" data-width="25%" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mb-0 text-sm">
                      <span className="mr-2"><i className="fa fa-arrow-up"></i> 10%</span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="card l-bg-cyan-dark">
                <div className="card-statistic-3">
                  <div className="card-icon card-icon-large"><i className="fa fa-briefcase"></i></div>
                  <div className="card-content">
                    <h4 className="card-title">New Booking</h4>
                    <span>1,258</span>
                    <div className="progress mt-1 mb-1" data-height="8">
                      <div className="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mb-0 text-sm">
                      <span className="mr-2"><i className="fa fa-arrow-up"></i> 10%</span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="card l-bg-purple-dark">
                <div className="card-statistic-3">
                  <div className="card-icon card-icon-large"><i className="fa fa-globe"></i></div>
                  <div className="card-content">
                    <h4 className="card-title">Inquiry</h4>
                    <span>10,225</span>
                    <div className="progress mt-1 mb-1" data-height="8">
                      <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mb-0 text-sm">
                      <span className="mr-2"><i className="fa fa-arrow-up"></i> 10%</span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="card l-bg-orange-dark">
                <div className="card-statistic-3">
                  <div className="card-icon card-icon-large"><i className="fa fa-money-bill-alt"></i></div>
                  <div className="card-content">
                    <h4 className="card-title">Earning</h4>
                    <span>$2,658</span>
                    <div className="progress mt-1 mb-1" data-height="8">
                      <div className="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mb-0 text-sm">
                      <span className="mr-2"><i className="fa fa-arrow-up"></i> 10%</span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Revenue</h4>
                </div>
                <div className="card-body">
                  <div id="echart_graph_line" className="chartsh"></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Revenue</h4>
                </div>
                <div className="card-body">
                  <div className="summary">
                    <div className="summary-chart active" data-tab-group="summary-tab" id="summary-chart">
                      <div id="echart_area_line" className="chartsh"></div>
                    </div>
                    <div data-tab-group="summary-tab" id="summary-text">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h4>Quick Draft</h4>
                </div>
                <div className="card-body pb-0">
                  <div className="card-body sales-growth-chart">
                    <div id="echart_bar" className="chartsh"></div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="chart-title mb-1 text-center">
                    <h6>Total monthly Sales.</h6>
                  </div>
                  <div className="chart-stats text-center">
                    <a href="#"><i data-feather="arrow-up-circle" className="col-green"></i></a>
                    <span className="text-muted">20% high since the last year.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h4>Recent Orders</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <tr>
                        <th style={{width: "35%"}}>Cust Name</th>
                        <th style={{width: "35%"}}>Order No</th>
                        <th style={{width: "35%"}}>Status</th>
                        <th>Amount</th>
                        <th>Details</th>
                      </tr>
                      <tr>
                        <td>
                          <div className="media">
                            <img alt="image" className="mr-3 rounded-circle" width="40" src="assets-dashboard/img/users/user-1.png"/>
                            <div className="media-body">
                              <div className="media-title">Cara Stevens</div>
                              <div className="text-job text-muted">Prime Customer</div>
                            </div>
                          </div>
                        </td>
                        <td>CT56743</td>
                        <td className="align-middle">
                          <div className="progress-text">30%</div>
                          <div className="progress" data-height="6">
                            <div className="progress-bar bg-orange" data-width="30%"></div>
                          </div>
                        </td>
                        <td>$955</td>
                        <td>
                          <div className="media-cta">
                            <a href="#" className="btn btn-outline-primary">Detail</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media">
                            <img alt="image" className="mr-3 rounded-circle" width="40" src="assets-dashboard/img/users/user-2.png"/>
                            <div className="media-body">
                              <div className="media-title">John Doe</div>
                              <div className="text-job text-muted">Regular Customer</div>
                            </div>
                          </div>
                        </td>
                        <td>OT58743</td>
                        <td className="align-middle">
                          <div className="progress-text">50%</div>
                          <div className="progress" data-height="6">
                            <div className="progress-bar bg-indigo" data-width="50%"></div>
                          </div>
                        </td>
                        <td>$234</td>
                        <td>
                          <div className="media-cta">
                            <a href="#" className="btn btn-outline-primary">Detail</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media">
                            <img alt="image" className="mr-3 rounded-circle" width="40" src="assets-dashboard/img/users/user-3.png"/>
                            <div className="media-body">
                              <div className="media-title">Sarah Smith</div>
                              <div className="text-job text-muted">Prime Customer</div>
                            </div>
                          </div>
                        </td>
                        <td>KJ76543</td>
                        <td className="align-middle">
                          <div className="progress-text">43%</div>
                          <div className="progress" data-height="6">
                            <div className="progress-bar bg-purple" data-width="43%"></div>
                          </div>
                        </td>
                        <td>$2,432</td>
                        <td>
                          <div className="media-cta">
                            <a href="#" className="btn btn-outline-primary">Detail</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media">
                            <img alt="image" className="mr-3 rounded-circle" width="40" src="assets-dashboard/img/users/user-4.png"/>
                            <div className="media-body">
                              <div className="media-title">Ashton Cox
                              </div>
                              <div className="text-job text-muted">Prime Customer</div>
                            </div>
                          </div>
                        </td>
                        <td>FD56743</td>
                        <td className="align-middle">
                          <div className="progress-text">65%</div>
                          <div className="progress" data-height="6">
                            <div className="progress-bar bg-cyan" data-width="65%"></div>
                          </div>
                        </td>
                        <td>$234</td>
                        <td>
                          <div className="media-cta">
                            <a href="#" className="btn btn-outline-primary">Detail</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media">
                            <img alt="image" className="mr-3 rounded-circle" width="40" src="assets-dashboard/img/users/user-5.png"/>
                            <div className="media-body">
                              <div className="media-title">Hasan Basri</div>
                              <div className="text-job text-muted">Regular Customer</div>
                            </div>
                          </div>
                        </td>
                        <td>XU56743</td>
                        <td className="align-middle">
                          <div className="progress-text">39%</div>
                          <div className="progress" data-height="6">
                            <div className="progress-bar bg-danger" data-width="39%"></div>
                          </div>
                        </td>
                        <td>$747</td>
                        <td>
                          <div className="media-cta">
                            <a href="#" className="btn btn-outline-primary">Detail</a>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4>Project Details</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive table-invoice">
                    <table className="table table-striped">
                      <tr>
                        <th className="text-center">#</th>
                        <th>Project Name</th>
                        <th>Customer</th>
                        <th>Team</th>
                        <th>Progress</th>
                        <th>Start Date</th>
                        <th>Delivery Date</th>
                        <th>Action</th>
                      </tr>
                      <tr>
                        <td className="p-0 text-center">
                          <div className="custom-checkbox custom-control">
                            <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                              id="checkbox-1"/> <label for="checkbox-1" className="custom-control-label">&nbsp;</label>
                          </div>
                        </td>
                        <td><a href="#">Ecommerce website</a></td>
                        <td className="font-weight-600">Sarah Smith</td>
                        <td className="text-truncate">
                          <ul className="list-unstyled order-list m-b-0 m-b-0">
                            <li className="team-member team-member-sm"><img className="rounded-circle"
                                src="assets-dashboard/img/users/user-8.png" alt="user" data-toggle="tooltip" title=""
                                data-original-title="Wildan Ahdian"/></li>
                            <li className="team-member team-member-sm"><img className="rounded-circle"
                                src="assets-dashboard/img/users/user-9.png" alt="user" data-toggle="tooltip" title=""
                                data-original-title="John Deo"/></li>
                            <li className="team-member team-member-sm"><img className="rounded-circle"
                                src="assets-dashboard/img/users/user-10.png" alt="user" data-toggle="tooltip" title=""
                                data-original-title="Sarah Smith"/></li>
                            <li className="avatar avatar-sm"><span className="badge badge-primary">+4</span></li>
                          </ul>
                        </td>
                        <td className="align-middle">
                          <div className="progress" data-height="4" data-toggle="tooltip" title="30%">
                            <div className="progress-bar bg-orange" data-width="30"></div>
                          </div>
                        </td>
                        <td>July 19, 2018</td>
                        <td>March 25, 2019</td>
                        <td><a className="btn btn-action bg-purple mr-1" data-toggle="tooltip" title="Edit"><i
                              className="fas fa-pencil-alt"></i></a> <a className="btn btn-danger btn-action"
                            data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you
															want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash"></i></a></td>
                      </tr>
                      <tr>
                        <td className="p-0 text-center">
                          <div className="custom-checkbox custom-control">
                            <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                              id="checkbox-2"/> <label for="checkbox-2" className="custom-control-label">&nbsp;</label>
                          </div>
                        </td>
                        <td><a href="#">Android App</a></td>
                        <td className="font-weight-600">Airi Satou</td>
                        <td className="text-truncate">
                          <ul className="list-unstyled order-list m-b-0 m-b-0">
                            <li className="team-member team-member-sm"><img className="rounded-circle"
                                src="assets-dashboard/img/users/user-3.png" alt="user" data-toggle="tooltip" title=""
                                data-original-title="Wildan Ahdian"/></li>
                            <li className="team-member team-member-sm"><img className="rounded-circle"
                                src="assets-dashboard/img/users/user-7.png" alt="user" data-toggle="tooltip" title=""
                                data-original-title="Sarah Smith"/></li>
                            <li className="avatar avatar-sm"><span className="badge badge-primary">+2</span></li>
                          </ul>
                        </td>
                        <td className="align-middle">
                          <div className="progress" data-height="4" data-toggle="tooltip" title="55%">
                            <div className="progress-bar bg-purple" data-width="55"></div>
                          </div>
                        </td>
                        <td>March 21, 2015</td>
                        <td>July 22, 2017</td>
                        <td><a className="btn btn-action bg-purple mr-1" data-toggle="tooltip" title="Edit"><i
                              className="fas fa-pencil-alt"></i></a> <a className="btn btn-danger btn-action"
                            data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you
															want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash"></i></a></td>
                      </tr>
                      <tr>
                        <td className="p-0 text-center">
                          <div className="custom-checkbox custom-control">
                            <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                              id="checkbox-3"/> <label for="checkbox-3" className="custom-control-label">&nbsp;</label>
                          </div>
                        </td>
                        <td><a href="#">Logo Design</a></td>
                        <td className="font-weight-600">Ashton Cox</td>
                        <td className="text-truncate">
                          <ul className="list-unstyled order-list m-b-0 m-b-0">
                            <li className="team-member team-member-sm"><img className="rounded-circle"
                                src="assets-dashboard/img/users/user-1.png" alt="user" data-toggle="tooltip" title=""
                                data-original-title="Wildan Ahdian"/></li>
                            <li className="team-member team-member-sm"><img className="rounded-circle"
                                src="assets-dashboard/img/users/user-5.png" alt="user" data-toggle="tooltip" title=""
                                data-original-title="John Deo"/></li>
                            <li className="team-member team-member-sm"><img className="rounded-circle"
                                src="assets-dashboard/img/users/user-9.png" alt="user" data-toggle="tooltip" title=""
                                data-original-title="Sarah Smith"/></li>
                            <li className="avatar avatar-sm"><span className="badge badge-primary">+5</span></li>
                          </ul>
                        </td>
                        <td className="align-middle">
                          <div className="progress" data-height="4" data-toggle="tooltip" title="55%">
                            <div className="progress-bar bg-green" data-width="55"></div>
                          </div>
                        </td>
                        <td>Feb 02, 2018</td>
                        <td>March 12, 2019</td>
                        <td><a className="btn btn-action bg-purple mr-1" data-toggle="tooltip" title="Edit"><i
                              className="fas fa-pencil-alt"></i></a> <a className="btn btn-danger btn-action"
                            data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you
															want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash"></i></a></td>
                      </tr>
                      <tr>
                        <td className="p-0 text-center">
                          <div className="custom-checkbox custom-control">
                            <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                              id="checkbox-4"/> <label for="checkbox-4" className="custom-control-label">&nbsp;</label>
                          </div>
                        </td>
                        <td><a href="#">Java Project</a></td>
                        <td className="font-weight-600">Cara Stevens</td>
                        <td className="text-truncate">
                          <ul className="list-unstyled order-list m-b-0">
                            <li className="team-member team-member-sm"><img className="rounded-circle"
                                src="assets-dashboard/img/users/user-4.png" alt="user" data-toggle="tooltip" title=""
                                data-original-title="Wildan Ahdian"/></li>
                            <li className="team-member team-member-sm"><img className="rounded-circle"
                                src="assets-dashboard/img/users/user-7.png" alt="user" data-toggle="tooltip" title=""
                                data-original-title="John Deo"/></li>
                            <li className="team-member team-member-sm"><img className="rounded-circle"
                                src="assets-dashboard/img/users/user-10.png" alt="user" data-toggle="tooltip" title=""
                                data-original-title="John Deo"/></li>
                            <li className="team-member team-member-sm"><img className="rounded-circle"
                                src="assets-dashboard/img/users/user-2.png" alt="user" data-toggle="tooltip" title=""
                                data-original-title="Sarah Smith"/></li>
                            <li className="avatar avatar-sm"><span className="badge badge-primary">+1</span></li>
                          </ul>
                        </td>
                        <td className="align-middle">
                          <div className="progress" data-height="4" data-toggle="tooltip" title="30%">
                            <div className="progress-bar bg-orange" data-width="30"></div>
                          </div>
                        </td>
                        <td>July 19, 2018</td>
                        <td>March 25, 2019</td>
                        <td><a className="btn btn-action bg-purple mr-1" data-toggle="tooltip" title="Edit"><i
                              className="fas fa-pencil-alt"></i></a> <a className="btn btn-danger btn-action"
                            data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you
															want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash"></i></a></td>
                      </tr>
                      <tr>
                        <td className="p-0 text-center">
                          <div className="custom-checkbox custom-control">
                            <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                              id="checkbox-5"/> <label for="checkbox-5" className="custom-control-label">&nbsp;</label>
                          </div>
                        </td>
                        <td><a href="#">Ecommerce website</a></td>
                        <td className="font-weight-600">John Doe</td>
                        <td className="text-truncate">
                          <ul className="list-unstyled order-list m-b-0">
                            <li className="team-member team-member-sm"><img className="rounded-circle"
                                src="assets-dashboard/img/users/user-8.png" alt="user" data-toggle="tooltip" title=""
                                data-original-title="Wildan Ahdian"/></li>
                            <li className="team-member team-member-sm"><img className="rounded-circle"
                                src="assets-dashboard/img/users/user-4.png" alt="user" data-toggle="tooltip" title=""
                                data-original-title="John Deo"/></li>
                            <li className="team-member team-member-sm"><img className="rounded-circle"
                                src="assets-dashboard/img/users/user-3.png" alt="user" data-toggle="tooltip" title=""
                                data-original-title="Sarah Smith"/></li>
                            <li className="avatar avatar-sm"><span className="badge badge-primary">+2</span></li>
                          </ul>
                        </td>
                        <td className="align-middle">
                          <div className="progress" data-height="4" data-toggle="tooltip" title="80%">
                            <div className="progress-bar bg-green" data-width="80"></div>
                          </div>
                        </td>
                        <td>May 11, 2017</td>
                        <td>March 15, 2018</td>
                        <td><a className="btn btn-action bg-purple mr-1" data-toggle="tooltip" title="Edit"><i
                              className="fas fa-pencil-alt"></i></a> <a className="btn btn-danger btn-action"
                            data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you
															want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash"></i></a></td>
                      </tr>
                      <tr>
                        <td className="p-0 text-center">
                          <div className="custom-checkbox custom-control">
                            <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                              id="checkbox-6"/> <label for="checkbox-6" className="custom-control-label">&nbsp;</label>
                          </div>
                        </td>
                        <td><a href="#">Android App</a></td>
                        <td className="font-weight-600">Angelica Ramos</td>
                        <td className="text-truncate">
                          <ul className="list-unstyled order-list m-b-0">
                            <li className="team-member team-member-sm"><img className="rounded-circle"
                                src="assets-dashboard/img/users/user-3.png" alt="user" data-toggle="tooltip" title=""
                                data-original-title="Wildan Ahdian"/></li>
                            <li className="team-member team-member-sm"><img className="rounded-circle"
                                src="assets-dashboard/img/users/user-1.png" alt="user" data-toggle="tooltip" title=""
                                data-original-title="Sarah Smith"/></li>
                            <li className="avatar avatar-sm"><span className="badge badge-primary">+2</span></li>
                          </ul>
                        </td>
                        <td className="align-middle">
                          <div className="progress" data-height="4" data-toggle="tooltip" title="56%">
                            <div className="progress-bar bg-purple" data-width="56"></div>
                          </div>
                        </td>
                        <td>June 02, 2018</td>
                        <td>April 05, 2019</td>
                        <td><a className="btn btn-action bg-purple mr-1" data-toggle="tooltip" title="Edit"><i
                              className="fas fa-pencil-alt"></i></a> <a className="btn btn-danger btn-action"
                            data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you
															want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash"></i></a></td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="chart-title">
                    <p className="mb-3 text-muted pull-left text-sm">
                      <span className="text-success mr-2 font-20"><i className="fa fa-arrow-up"></i>
                        10%</span> <span className="text-nowrap">Since
                        last month</span>
                    </p>
                  </div>
                  <canvas id="chart-1"></canvas>
                  <div className="row text-center">
                    <div className="col-4 m-t-15">
                      <h5>91%</h5>
                      <p className="text-muted m-b-0">Online</p>
                    </div>
                    <div className="col-4 m-t-15">
                      <h5>8%</h5>
                      <p className="text-muted m-b-0">Offline</p>
                    </div>
                    <div className="col-4 m-t-15">
                      <h5>1%</h5>
                      <p className="text-muted m-b-0">NA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4>Latest Transactions</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table dataTable table-striped">
                      <tr>
                        <th>#</th>
                        <th>Order No</th>
                        <th>Cust Name</th>
                        <th>Status</th>
                        <th>Amount</th>
                        <th>Edit</th>
                      </tr>
                      <tr>
                        <td>
                          <img alt="image" src="assets-dashboard/img/users/user-8.png" width="35"/>
                        </td>
                        <td>XY56987</td>
                        <td>John Deo</td>
                        <td><i className="fas fa-circle col-green m-r-5"></i>Confirm</td>
                        <td>$955</td>
                        <td>
                          <a data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt"></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img alt="image" src="assets-dashboard/img/users/user-4.png" width="35"/>
                        </td>
                        <td>XY12587</td>
                        <td>Sarah Smith</td>
                        <td><i className="fas fa-circle col-orange m-r-5"></i>Payment Failed</td>
                        <td>$215</td>
                        <td>
                          <a data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt"></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img alt="image" src="assets-dashboard/img/users/user-7.png" width="35"/>
                        </td>
                        <td>XY58987</td>
                        <td>John Doe</td>
                        <td><i className="fas fa-circle col-green m-r-5"></i>Confirm</td>
                        <td>$125</td>
                        <td>
                          <a data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt"></i></a>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="settingSidebar">
          <a href="javascript:void(0)" className="settingPanelToggle"> <i className="fa fa-spin fa-cog"></i>
          </a>
          <div className="settingSidebar-body ps-container ps-theme-default">
            <div className=" fade show active">
              <div className="setting-panel-header">Setting Panel
              </div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Select Layout</h6>
                <div className="selectgroup layout-color w-50">
                  <label className="selectgroup-item">
                    <input type="radio" name="value" value="1" className="selectgroup-input select-layout" checked/>
                    <span className="selectgroup-button">Light</span>
                  </label>
                  <label className="selectgroup-item">
                    <input type="radio" name="value" value="2" className="selectgroup-input select-layout"/>
                    <span className="selectgroup-button">Dark</span>
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Sidebar Color</h6>
                <div className="selectgroup selectgroup-pills sidebar-color">
                  <label className="selectgroup-item">
                    <input type="radio" name="icon-input" value="1" className="selectgroup-input select-sidebar"/>
                    <span className="selectgroup-button selectgroup-button-icon" data-toggle="tooltip"
                      data-original-title="Light Sidebar"><i className="fas fa-sun"></i></span>
                  </label>
                  <label className="selectgroup-item">
                    <input type="radio" name="icon-input" value="2" className="selectgroup-input select-sidebar" checked/>
                    <span className="selectgroup-button selectgroup-button-icon" data-toggle="tooltip"
                      data-original-title="Dark Sidebar"><i className="fas fa-moon"></i></span>
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Color Theme</h6>
                <div className="theme-setting-options">
                  <ul className="choose-theme list-unstyled mb-0">
                    <li title="white" className="active">
                      <div className="white"></div>
                    </li>
                    <li title="cyan">
                      <div className="cyan"></div>
                    </li>
                    <li title="black">
                      <div className="black"></div>
                    </li>
                    <li title="purple">
                      <div className="purple"></div>
                    </li>
                    <li title="orange">
                      <div className="orange"></div>
                    </li>
                    <li title="green">
                      <div className="green"></div>
                    </li>
                    <li title="red">
                      <div className="red"></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <div className="theme-setting-options">
                  <label>
                    <span className="control-label p-r-20">Mini Sidebar</span>
                    <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"
                      id="mini_sidebar_setting"/>
                    <span className="custom-switch-indicator"></span>
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <div className="theme-setting-options">
                  <div className="disk-server-setting m-b-20">
                    <p>Disk Space</p>
                    <div className="sidebar-progress">
                      <div className="progress" data-height="5">
                        <div className="progress-bar l-bg-green" role="progressbar" data-width="80%" aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span className="progress-description">
                        <small>26% remaining</small>
                      </span>
                    </div>
                  </div>
                  <div className="disk-server-setting">
                    <p>Server Load</p>
                    <div className="sidebar-progress">
                      <div className="progress" data-height="5">
                        <div className="progress-bar l-bg-orange" role="progressbar" data-width="58%" aria-valuenow="25"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span className="progress-description">
                        <small>Highly Loaded</small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-4 p-3 align-center rt-sidebar-last-ele">
                <a href="#" className="btn btn-icon icon-left btn-primary btn-restore-theme">
                  <i className="fas fa-undo"></i> Restore Default
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  </div>
            </>


            
        )
    }
}

export default Home