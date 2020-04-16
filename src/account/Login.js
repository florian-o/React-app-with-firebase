import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

function Login() {
    return (
       
       <Wrapper>
        <div className="col-md-6 xl-2 m-auto w-100">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form >
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"            
                
              />
            </div>
         
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                
              />
            </div>
            
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
      </Wrapper>
       
    )
}


const Wrapper = styled.div` 
   
   padding:8em;
   
  `

export default Login;
