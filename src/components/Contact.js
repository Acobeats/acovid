import React from "react";
import {Form} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../App.css';
import '../Styles/Contact.css';
import '../Styles/Landing.css';

function Contact(){
    return(
        <div className="home-div">
        <Form id="form-size">
            <Form.Group  className="form-letter" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control className='form-letter' type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="form-letter" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            
            <div className="form-button">
            <button  className='cssbuttons-io-button' type="submit">Send 
                <div className="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor">
                        </path>
                    </svg>
                </div>  
            </button>
            </div>
            
        </Form>
                <div>
                    <Link to='/home'>Go Back</Link>
                </div>
        </div>



    );
}

export default Contact;
