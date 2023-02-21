import React from 'react';
import {Link,useNavigate} from "react-router-dom"
import Badge from 'react-bootstrap/Badge';


export default function Navbar(){
  const navigate=useNavigate()
const handleLogout=()=>{
localStorage.removeItem("user");
navigate('/login')
}

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-itallic" to="/">FoodGo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        {("user")?
        <li className="nav-item">
        <Link className="nav-link active fs-5" aria-current="page" to="/">My Orders</Link>
      </li>
     :'' }
      </ul>
      {(!("user"))?

      <div className="d-flex">
          <Link className="btn bg-white text-succsess mx-2" to="/sign">Sign</Link>
          <Link className="btn bg-white text-succsess mx-1" to="/login">Login</Link>
      
      </div>
      :
      <div>
         <div className='btn bg-white text-succsess mx-2'>My Cart {''} <Badge pill bg='danger'>2</Badge></div>
      <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>Logout</div>
      </div>
      }
    </div>
  </div>
</nav>
        </div>
    )
}