import React from "react";
import { FaTimes, FaSearch, FaUser, FaKey, FaShoppingBag } from 'react-icons/fa';
class Signup extends React.Component
{

    render()
    {
        return(

<>
<div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text">@</span>
                          </div>
                          <input type="text" class="form-control" placeholder="Username / Email" />
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><FaUser /></span>
                          </div>
                          <input type="text" class="form-control" placeholder="First Name" />
                          <div class="input-group-prepend">
                            <span class="input-group-text"><FaUser /></span>
                          </div>
                          <input type="text" class="form-control" placeholder="Last Name" />
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><FaKey /></span>
                          </div>
                          <input type="password" class="form-control" placeholder="Password" />
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><FaKey /></span>
                          </div>
                          <input type="password" class="form-control" placeholder="Confirm Password" />
                        </div>
                        <div>
                          <ul className='check'>
                            <li><input type="checkbox" /><span className='ml-n3'>Subscribe to our newsletter</span></li>
                            <li><input type="checkbox" /> <span className='ml-n3'>I accept the Terms of Service and Privacy Policy</span></li>
                          </ul>
                        </div>
                        <button className='login-a-btn'>SIGN UP</button>



</>

        )
    }
}
export default Signup