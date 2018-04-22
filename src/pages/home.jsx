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


      

      componentDidMount(){
          setTimeout(1000)
      }
    render()    {
        
        return(
            <div class="w3-container w3-center">
                <div class="w3-container w3-lobster">
                     <p class="w3-xxxlarge">
                        CaterbeeAdminGUI 
                     </p>
                </div>
                <div class="w3-container w3-grey">
                    <div class="w3-animate-opacity" >
                        <h2>We are a team of students at the KTH Royal Institute of Technology 
                            developing an admin GUI for Caterbee, whose vision is to connect catering companies in a B2B 
                            application designed to simplify catering.
                        </h2>
                    </div>
                </div>
            </div>    
        );
        
    }
}