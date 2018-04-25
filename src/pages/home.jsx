import React from 'react';
import { Route, Link } from 'react-router-dom';
import CustomNavbar from '../components/navbar';
import { PageHeader, Fade, Collapse } from 'react-bootstrap';
import test from '../test.css';

export default class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: false
        };
      }
    
    render()    {
        
        return(
            <div class="w3-container">
            <div id="bottompadding" class="w3-center">
                <div class="w3-container w3-lobster">
                     <p class="ex1 w3-xxlarge">
                        CaterbeeAdminGUI 
                     </p>
                </div>
                <div id="main" class="w3-animate-meme w3-gothic w3-white">
                    <p class="w3-xlarge">We are a team of students at the KTH Royal Institute of Technology 
                            developing an admin GUI for Caterbee, whose vision is to connect catering companies in a B2B 
                            application designed to simplify catering.</p>                    
                </div>
                
                </div>
               
                <div class="w3-animate-meme w3-center">
                <a id="imagepadding" href="https://i.imgur.com/q14hoii.jpg">
                    <img src="https://i.imgur.com/q14hoii.jpg" width="350" height="500"></img>
                </a>
                <a id="imagepadding" href="https://i.imgur.com/q14hoii.jpg">
                    <img src="https://i.imgur.com/q14hoii.jpg" width="350" height="500"></img>
                </a>
                <hr/>
                </div>
            </div>    
        );
        
    }
}