import React from "react";
import { FaTimes, FaSearch, FaUser, FaKey, FaShoppingBag } from 'react-icons/fa';
class Login extends React.Component
{
    render()
    {
        return(
<>


<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text"><FaUser /></span>
  </div>
  <input type="text" class="form-control" placeholder="Username/Email" />
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text"><FaKey /></span>
  </div>
  <input type="password" class="form-control" placeholder="Password" />
</div>
<div>
  <ul className='d-flex'>
    <li className='lg-check'><input type="checkbox" /><span className='ml-n3'>Remember me</span></li>
    <li>  <a href="#" className='ml-5'> Forget password?</a></li>
  </ul>
</div>
<button className='login-a-btn' >SIGN IN</button>


</>
        )
    }
}
export default Login



