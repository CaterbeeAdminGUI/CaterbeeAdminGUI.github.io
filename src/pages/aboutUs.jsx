
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
                 <p class="ex1 w3-xxlarge">
                    Meet the Team
                 </p>
            </div>
                    <div class="w3-animate-meme">
                        <h2>
                            
                            <div class="w3-border w3-white w3-hover-opacity w3-hover-yellow w3-gothic">
                                <div><p>Erik Båvenstrand</p></div>
                                <div> <a href="url">erikbav@kth.se</a></div>
                            </div>   
                            <hr />              
                            <div class="w3-border w3-white w3-hover-opacity w3-hover-yellow w3-gothic">
                                <div><p>Ludvig Christensen</p></div>
                                <b>Scrum Master </b>
                                <div> <a href="url">ludvigch@kth.se</a></div>       
                            </div>
                            <hr/>
                            <div class="w3-border w3-white w3-hover-opacity  w3-hover-yellow w3-gothic">
                                <div><p>Måns Ekelund</p></div>
                                <div> <a href="url">mansek@kth.se</a></div>       
                            </div>
                            <hr/>
                            <div class="w3-border w3-white w3-hover-opacity w3-hover-yellow w3-gothic">
                                <div><p>Martin Falke</p></div>
                                <div> <a href="url">mafalke@kth.se</a></div>       
                            </div>
                            <hr/>
                            <div class="w3-border w3-white w3-hover-opacity w3-hover-yellow w3-gothic">
                                <div><p>Arian Javdan</p></div>
                                <div> <a href="url">javdan@kth.se</a></div>       
                            </div>
                            <hr/>
                            
                            
                        </h2>
                    </div>
        </div> 
        )
    }
}