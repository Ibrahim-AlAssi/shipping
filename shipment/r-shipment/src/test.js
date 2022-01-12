
import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import Header from './Header';
import {REGISTER} from './Mutations';
import { Form } from "react-bootstrap";
import { gql, useMutation } from '@apollo/client';

function Register(){
const [values,setvalues] =useState({
    name:'',
    email:'',
    password:'',
    password_confirmation

})
const onChange =(event) =>{
    setvalues({...values,[event.target.name]:event.target.value});
}
const onSubmit =(event) =>{
    event.preventDefault();

}

return(
    <div>
        <Form onSubmit={onsubmit} noValidate>
            <h1>register</h1>
            <Form.Input
            label="name"
            placeholder="name"
            name="name"
            value={values.name}
            onChange={onChange}
            />
             <Form.Input
            label="email"
            placeholder="email"
            name="email"
            value={values.naemailme}
            onChange={onChange}
            />
             <Form.Input
            label="password"
            placeholder="password"
            name="password"
            value={values.password}
            onChange={onChange}
            />
             <Form.Input
            label="password_confirmation"
            placeholder="password_confirmation"
            name="password_confirmation"
            value={values.password_confirmation}
            onChange={onChange}
            />
            <button type="submit">reg</button>
        </Form>
    </div>
)
}
const REGISTER_USER=gql`
`