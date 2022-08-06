import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

class Shop_Sidebar extends React.Component {
    render() {
        return (
            <div className="container-fluid shop-sidebar-main">
                <div className="card">
                    <div className="card-body">
                        <div className='search-product'>
                            <label for="search" >Search</label><br />
                            <input type="text" name='search' placeholder=' Search Products....' /><a href='#' className='angle'><FaAngleRight /></a>
                        </div>
                        <div className="filter-side">
                            <h3>Filter By Price</h3>
                            <h6 className='price-label'><span className='float-left'>₹27</span><span className='float-right'>₹101</span></h6><br /><br />
                            <input type="range" minLength="10" maxLength="100" className='filter-range' /><br /><br />
                            <a href="#">FILTER</a>
                        </div>
                        <div className="category-side">
                            <h3 className='mb-5'>Category</h3>
                            <ul>
                                <li><a href="#"><span className='ml-5'> Fruits</span></a><span className='float-right'>(15)</span></li><hr />
                                <li><a href="#"><span className='ml-5'> Hydroponics</span></a><span className='float-right'>(14)</span></li><hr />
                                <li><a href="#"><span className='ml-5'> Microgreens</span></a><span className='float-right'>(8)</span></li><hr />
                                <li><a href="#"><span className='ml-5'> Monthly Subscriptions</span></a><span className='float-right'>(3)</span></li><hr />
                                <li><a href="#"><span className='ml-5'> Others</span></a><span className='float-right'>(0)</span></li><hr />
                                <li><a href="#"><span className='ml-5'> Soil Less</span></a><span className='float-right'>(14)</span></li><hr />
                                <li><a href="#"><span className='ml-5'> Vegetables</span></a><span className='float-right'>(40)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Shop_Sidebar