import React from "react";
import { Helmet } from "react-helmet";
import Side_Navbar from "./side-navbar";


class Header extends React.Component {
  render() {
  

    return (
      <>
      
        <Helmet>  
        <link rel="stylesheet" href="assets-dashboard/css/app.min.css"/>    
        <link rel="stylesheet" href="assets-dashboard/bundles/jqvmap/dist/jqvmap.min.css"/>    
        <link rel="stylesheet" href="assets-dashboard/bundles/weather-icon/css/weather-icons.min.css"/>    
        <link rel="stylesheet" href="assets-dashboard/bundles/weather-icon/css/weather-icons-wind.min.css"/>    
        <link rel="stylesheet" href="assets-dashboard/bundles/summernote/summernote-bs4.css"/>    
        <link rel="stylesheet" href="assets-dashboard/css/style.css"/>    
        <link rel="stylesheet" href="assets-dashboard/css/components.css"/>   
        <link rel="stylesheet" href="assets-dashboard/css/custom.css"/>   
        <link rel="stylesheet" href="assets-dashboard/css/dashstyle.css"/>   
        <link rel="stylesheet" href="assets-dashboard/bundles/datatables/datatables.min.css"/>
        <link rel="stylesheet" href="assets-dashboard/bundles/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css"/>
         
          <script src="assets-dashboard/js/app.min.js"></script>
          {/* <!-- JS Libraies --> */}
          <script src="assets-dashboard/bundles/echart/echarts.js"></script>
          <script src="assets-dashboard/bundles/chartjs/chart.min.js"></script>
          {/* <!-- Page Specific JS File --> */}
          <script src="assets-dashboard/js/page/index.js"></script>
          {/* <!-- Template JS File --> */}
          <script src="assets-dashboard/js/scripts.js"></script>
          {/* <!-- Custom JS File --> */}
          <script src="assets-dashboard/js/custom.js"></script>
    
        </Helmet>
        

           
        <Side_Navbar/>
        
        <div className="navbar-bg"></div>
        <nav className="navbar navbar-expand-lg main-navbar">
          <div className="form-inline mr-auto">
            <ul className="navbar-nav mr-3">
              <li><a href="javascript:void(0)" data-toggle="sidebar" className="nav-link nav-link-lg
									collapse-btn"> <i data-feather="align-justify"></i></a></li>
              <li><a href="javascript:void(0)" className="nav-link nav-link-lg fullscreen-btn">
                <i data-feather="maximize"></i>
              </a></li>
              <li>
                <form className="form-inline mr-auto">
                  <div className="search-element">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="200" />
                    <button className="btn" type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav navbar-right">
            <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
              className="nav-link nav-link-lg message-toggle"><i data-feather="mail"></i>
              <span className="badge headerBadge1">
                6 </span> </a>
              <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
                <div className="dropdown-header">
                  Messages
                  <div className="float-right">
                    <a href="#">Mark All As Read</a>
                  </div>
                </div>
                <div className="dropdown-list-content dropdown-list-message">
                  <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar
											text-white"> <img alt="image" src="assets/img/uploads/2021/10/user.jpg" className="rounded-circle" />
                  </span> <span className="dropdown-item-desc"> <span className="message-user">John
                    Deo</span>
                      <span className="time messege-text">Please check your mail !!</span>
                      <span className="time">2 Min Ago</span>
                    </span>
                  </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                    <img alt="image" src="assets-dashboard/img/users/user-2.png" className="rounded-circle" />
                  </span> <span className="dropdown-item-desc"> <span className="message-user">Sarah
                    Smith</span> <span className="time messege-text">Request for leave
                      application</span>
                      <span className="time">5 Min Ago</span>
                    </span>
                  </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                    <img alt="image" src="assets-dashboard/img/users/user-5.png" className="rounded-circle" />
                  </span> <span className="dropdown-item-desc"> <span className="message-user">Jacob
                    Ryan</span> <span className="time messege-text">Your payment invoice is
                      generated.</span> <span className="time">12 Min Ago</span>
                    </span>
                  </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                    <img alt="image" src="assets-dashboard/img/users/user-4.png" className="rounded-circle" />
                  </span> <span className="dropdown-item-desc"> <span className="message-user">Lina
                    Smith</span> <span className="time messege-text">hii John, I have upload
                      doc
                      related to task.</span> <span className="time">30
                        Min Ago</span>
                    </span>
                  </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                    <img alt="image" src="assets-dashboard/img/users/user-3.png" className="rounded-circle" />
                  </span> <span className="dropdown-item-desc"> <span className="message-user">Jalpa
                    Joshi</span> <span className="time messege-text">Please do as specify.
                      Let me
                      know if you have any query.</span> <span className="time">1
                        Days Ago</span>
                    </span>
                  </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                    <img alt="image" src="assets-dashboard/img/users/user-2.png" className="rounded-circle" />
                  </span> <span className="dropdown-item-desc"> <span className="message-user">Sarah
                    Smith</span> <span className="time messege-text">Client Requirements</span>
                      <span className="time">2 Days Ago</span>
                    </span>
                  </a>
                </div>
                <div className="dropdown-footer text-center">
                  <a href="#">View All <i className="fas fa-chevron-right"></i></a>
                </div>
              </div>
            </li>
            <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
              className="nav-link notification-toggle nav-link-lg"><i data-feather="bell"></i>
              <span className="badge headerBadge2">
                3 </span> </a>
              <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
                <div className="dropdown-header">
                  Notifications
                  <div className="float-right">
                    <a href="#">Mark All As Read</a>
                  </div>
                </div>
                <div className="dropdown-list-content dropdown-list-icons">
                  <a href="#" className="dropdown-item dropdown-item-unread"> <span
                    className="dropdown-item-icon bg-primary text-white"> <i className="fas
												fa-code"></i>
                  </span> <span className="dropdown-item-desc"> Template update is
                    available now! <span className="time">2 Min
                      Ago</span>
                    </span>
                  </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-info text-white"> <i className="far
												fa-user"></i>
                  </span> <span className="dropdown-item-desc"> <b>You</b> and <b>Dedik
                    Sugiharto</b> are now friends <span className="time">10 Hours
                      Ago</span>
                    </span>
                  </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-success text-white"> <i
                    className="fas
												fa-check"></i>
                  </span> <span className="dropdown-item-desc"> <b>Kusnaedi</b> has
                    moved task <b>Fix bug header</b> to <b>Done</b> <span className="time">12
                      Hours
                      Ago</span>
                    </span>
                  </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-danger text-white"> <i
                    className="fas fa-exclamation-triangle"></i>
                  </span> <span className="dropdown-item-desc"> Low disk space. Let's
                    clean it! <span className="time">17 Hours Ago</span>
                    </span>
                  </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-info text-white"> <i className="fas
												fa-bell"></i>
                  </span> <span className="dropdown-item-desc"> Welcome to Aegis
                    template! <span className="time">Yesterday</span>
                    </span>
                  </a>
                </div>
                <div className="dropdown-footer text-center">
                  <a href="#">View All <i className="fas fa-chevron-right"></i></a>
                </div>
              </div>
            </li>
            <li className="dropdown"><a href="#" data-toggle="dropdown"
              className="nav-link dropdown-toggle nav-link-lg nav-link-user"> <img alt="image" src="assets/img/uploads/2021/10/user.jpg"
                className="user-img-radious-style" /> <span className="d-sm-none d-lg-inline-block"></span></a>
              <div className="dropdown-menu dropdown-menu-right pullDown">
                <div className="dropdown-title">Hello Sarah Smith</div>
                <a href="profile.html" className="dropdown-item has-icon"> <i className="far
										fa-user"></i> Profile
                </a> <a href="timeline.html" className="dropdown-item has-icon"> <i className="fas fa-bolt"></i>
                  Activities
                </a> <a href="#" className="dropdown-item has-icon"> <i className="fas fa-cog"></i>
                  Settings
                </a>
                <div className="dropdown-divider"></div>
                <a href="auth-login.html" className="dropdown-item has-icon text-danger"> <i className="fas fa-sign-out-alt"></i>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
      
      </>
    )
  }
}
export default Header