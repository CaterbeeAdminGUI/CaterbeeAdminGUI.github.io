
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
                            
                            <div id ="main"class=" w3-white w3-hover-opacity w3-hover-yellow w3-gothic w3-center">
                                <div><p class="ex2">Erik Båvenstrand</p>
                                <a href="mailto:erikbav@kth.se">erikbav@kth.se</a></div>
                            </div>   
                            <hr />              
                            <div id ="main" class=" w3-white w3-hover-opacity w3-hover-yellow w3-gothic w3-center">
                                <div><p>Ludvig Christensen</p></div>
                                <b>Scrum Master </b>
                                <div> <a href="mailto:erikbav@kth.se">ludvigch@kth.se</a></div>       
                            </div>
                            <hr/>
                            <div id ="main" class=" w3-white w3-hover-opacity  w3-hover-yellow w3-gothic w3-center">
                                <div><p>Måns Ekelund</p></div>
                                <div> <a href="mailto:erikbav@kth.se">mansek@kth.se</a></div>       
                            </div>
                            <hr/>
                            <div id ="main" class=" w3-white w3-hover-opacity w3-hover-yellow w3-gothic w3-center">
                                <div><p>Martin Falke</p></div>
                                <div> <a href="mailto:erikbav@kth.se">mafalke@kth.se</a></div>       
                            </div>
                            <hr/>
                            <div id ="main" class=" w3-white w3-hover-opacity w3-hover-yellow w3-gothic w3-center">
                                <div><p>Arian Javdan</p></div>
                                <div> <a href="mailto:erikbav@kth.se">javdan@kth.se</a></div>       
                            </div>
                            <hr/>
                            
                            
                        </h2>
                    </div>
        </div> 
        )
    }
}