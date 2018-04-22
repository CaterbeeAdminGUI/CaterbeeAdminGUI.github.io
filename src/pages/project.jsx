import React from 'react';
import { Route, Link } from 'react-router-dom';

export default class Project extends React.Component {
    render() {
        return(
            <div>
            <div class="w3-container w3-center">
            <div class="w3-container w3-lobster">
                 <p class="w3-xxlarge">
                    Follow the Project 
                 </p>
            </div>
            <div>
                <div class="w3-animate-meme w3-gothic w3-white" >
                    
                    <p class="w3-xlarge" >Sprint 2 is afoot! This week the plan is to implement some backend features such as login
                     authentication and fetch more data from the database. The group also decided to refactor 
                     large portions of the application which has proven to be a more difficult task than the 
                     group had anticipated but the workflow is back on track. The picture below shows a list 
                     of companies that was implemented this week. <b>19/4/2018</b></p>
 
                    
                </div>
                <li>
                    <a href="https://i.imgur.com/ikT9VAo.png">
                        <img src="https://i.imgur.com/ikT9VAo.png" width="650" height="300"></img>
                    </a>
                </li>

                <hr/>
            </div>
            <hr/>
            <div class="w3-container ">
            <div class="w3-animate-meme w3-gothic   w3-white">
                    <p class="w3-xlarge">
                    Sprint 1 is finished! This week the basic structure of the webpage was built with some 
                    implemented features and placeholder pages to be implemented fully at a later stage. In 
                    the pictures below the login page and the page for listing orders can be seen. <b>13/4/2018</b>
 
                    </p>
                </div>
                <li>
                    <a href="https://i.imgur.com/QtNAASF.png">
                        <img src="https://i.imgur.com/QtNAASF.png" width="650" height="300"></img>
                    </a>
                </li>
                <li>
                    <a href="https://i.imgur.com/BrV6B1b.png">
                        <img src="https://i.imgur.com/BrV6B1b.png" width="650" height="300"></img>
                    </a>
                </li>
                <hr/>
            </div>
            <hr/>
            <div class="w3-container">
            <div class="w3-animate-meme w3-gothic   w3-white">
                    <p class="w3-xlarge">
                    The team has started the first sprint for the project and is proceeding as planned. <b>10/4/2018</b>
                    </p>
                </div>
            </div>
        </div> 
        
            </div>
        )
    }
}