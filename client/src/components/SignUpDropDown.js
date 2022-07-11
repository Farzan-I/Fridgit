import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { addUser } from '../actions/addUser.js'

//move styling to css
//

const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 5vh;
  z-index: 2;
  position: relative;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;
const fields = ["email", "password"]
const options = "signup"
//assign these to components and style them elsewhere?

export default function SignUpDropDown() {

  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
    fridge: []
  })

  const clear = () => {
    // setCurrentId(0);
    setUserData({ 
      userName: '',
      email: '',
      password: '',
     });
  }; 

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addUser(userData));
    clear()
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);
  
  return (
    <div className="main-drop-down-container">
      <div className="drop-down-container">
        <div className="drop-down-header" onClick={toggling}>
       {"Create Account"}
        </div>
        {isOpen && (
          <div className="drop-down-list-container">
            <div className="drop-down-list">
              <form className="fields-container" onSubmit={handleSubmit}>

                  <input 
                    type="text"
                    name="username"
                    className="drop-down-list-item"
                    placeholder="Choose username"
                    required 
                    value={userData.userName} onChange={e => setUserData({...userData, userName: e.target.value})}
                  />
    
                  <input 
                    type="password"
                    name="password"
                    className="drop-down-list-item"
                    placeholder="Choose password"
                    required
                    value={userData.password} onChange={e => setUserData({...userData, password: e.target.value})}
                  />
           
                
                  <input
                    type="email"
                    name="email"
                    className="drop-down-list-item"
                    placeholder="Enter your email"
                    required
                    value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})} 
                  />
          
                  <div className="sign-up-button">
                    <button>Signup</button>
                  </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}