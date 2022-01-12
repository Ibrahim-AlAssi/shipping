import { from } from '@apollo/client';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ME } from './Queries';
import { useQuery } from "@apollo/client";


import React, { useState, useEffect } from "react";

function Header() {
    
    const history = useNavigate();
    //  const { loading,error, data } = useQuery(ME);
    //  if (loading) return 'Loading...';
    //  if (error) return `Error! ${error.message}`;
   
    // const user="hello";
    // if(!data){
       
    //     data.map((val)=>{
    //         user=val.name;
    //     })}


    function logout() {
        localStorage.clear();
        history('/login')
    }


    return (

        <div>
         
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto navbar_warapper" >

                        {localStorage.getItem('token') ?
                            <>

                                <Link to="/addshipment">Addshipment</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">register</Link>
                            </>
                        }
                    </Nav>

                    {localStorage.getItem('token') ?
                        <Nav>
                    
                            <NavDropdown title="heloo"> 

                                {/* <NavDropdown title={user.map((val)=>{
                                     val.name
                                 })}>  */}
                                <NavDropdown.Item onClick={logout}  >Logout</NavDropdown.Item>

                            </NavDropdown>
                            
                        </Nav>
                        : null
                    }
                </Container>
            </Navbar>
        </div>

    )

}
export default Header