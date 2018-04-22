
import React from 'react';
import { Route, Link } from 'react-router-dom'
import test from '../test.css';

export default class About extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            divWidth: {
               width: 100
            }
       }
       
    }
    render()    {
        return(
            <div>
            <div class="w3-container w3-lobster w3-center">
                 <p class="w3-xxxlarge">
                    Meet the Team
                 </p>
            </div>
                    <h2>
                        <hr/>
                        <div class="w3-border w3-hover-opacity w3-hover-black">
                            <div><p>Erik Båvenstrand</p></div>
                            <div> <a href="url">erikbav@kth.se</a></div>
                        </div>   
                        <hr />              
                        <div class="w3-border w3-hover-opacity w3-hover-black">
                            <div><p>Ludvig Christensen</p></div>
                            <b>Scrum Master </b>
                            <div> <a href="url">ludvigch@kth.se</a></div>       
                        </div>
                        <hr/>
                        <div class="w3-border w3-hover-opacity w3-hover-black">
                            <div><p>Måns Ekelund</p></div>
                            <div> <a href="url">mansek@kth.se</a></div>       
                        </div>
                        <hr/>
                        <div class="w3-border w3-hover-opacity w3-hover-black">
                            <div><p>Martin Falke</p></div>
                            <div> <a href="url">mafalke@kth.se</a></div>       
                        </div>
                        <hr/>
                        <div class="w3-border w3-hover-opacity w3-hover-black">
                            <div><p>Arian Javdan</p></div>
                            <div> <a href="url">javdan@kth.se</a></div>       
                        </div>
                        <hr/>
                        
                           
                    </h2>
                    
        </div> 
        )
    }
}