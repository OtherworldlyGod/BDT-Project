import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup()
{
    const[name, SetName] = useState()
    const[email, SetEmail] = useState()
    const[password, SetPassword] = useState()
    const navigate = useNavigate()
    const handelSubmit=(e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result => {console.log(result)
            navigate('/login')
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary">
            <div className="bg-white p-3 rounded w-50" style={{ maxWidth: '650px' }}>
                <h2>Register</h2>
                <form onSubmit={handelSubmit}> 
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text" placeholder="Enter Name"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e) => SetName(e.target.value)}/>
                       
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="email" placeholder="Enter Email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e) => SetEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password" placeholder="Enter Password"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e) => SetPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                    </form>
                    <p>Already have an Account</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Login 
                        </Link>
                    
                
            </div>
        </div>
    )
}

export default Signup