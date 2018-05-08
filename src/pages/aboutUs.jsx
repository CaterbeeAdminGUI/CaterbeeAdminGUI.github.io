import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

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
            <div >
            <div class="w3-container w3-lobster w3-center">
                 <p class="ex1 w3-xxlarge">
                   <strong> About the Project </strong>
                 </p>
            </div>
                    <div class="w3-animate-meme">
                        <h2>
                        <div id="project-page" className="w3-animate-meme w3-gothic w3-center">

                     <p className="w3-large">We are a team of students at KTH Royal Institute of Technology developing 
                    an admin GUI for Caterbee, whose vision is to connect catering companies in a B2B application designed 
                    to simplify catering.</p>
                     <p className="w3-large">A big part of the project has been centered around the Scrum framework. The group have been working with 
                    Scrum consistently to achieve an end-product with high quality in an efficient way. The team main learning 
                    source of Scrum is the book SCRUM AND XP FROM THE TRENCHES 2: How We Do Scrum written by Henrik Kniberg.</p>                    
                </div>
                <br/>
                <div className="w3-container w3-center">
                <a >
                        <img  src="/finishedStories.jpg" width="850" height="460"  alt=""></img>
                    </a>
                    
                    <Grid>
                    <br/>
                        <Row className="show-grid  w3-container w3-lobster">
                            <Col md={1}></Col>
                            <Col md={2} className="w3-center">
                            <i class="fas fa-user fa-3x"></i>
                            <h4><strong>Erik</strong></h4>
                            <h4 id="noTopMargin"><strong>Båvenstrand</strong></h4>
                            <h4><a href="mailto:erikbav@kth.se">erikbav@kth.se</a></h4>
                            </Col>
                            <Col md={2} className=" w3-center">
                            <i class="fas fa-user fa-3x"></i>
                            <h4><strong>Måns</strong></h4>
                            <h4 id="noTopMargin"><strong>Ekelund</strong></h4>
                            <h4><a href="mailto:mansek@kth.se">mansek@kth.se</a></h4>
                            </Col>
                            <Col md={2} className=" w3-center">
                            <i class="fas fa-user fa-3x"></i>
                            <h4><strong>Martin</strong></h4>
                            <h4 id="noTopMargin"><strong>Falke</strong></h4>
                            <h4><a href="mailto:mafalke@kth.se">mafalke@kth.se</a></h4>
                            </Col>
                            <Col md={2} className=" w3-center">
                            <i class="fas fa-user-tie fa-3x"></i>
                            <h4><strong>Ludvig</strong></h4>
                            <h4 id="noTopMargin"><strong>Christensen</strong></h4>
                            <h4><strong>(Scrum Master)</strong></h4>
                            <h4><a href="mailto:ludvigch@kth.se">ludvigch@kth.se</a></h4>
                            </Col>
                            <Col md={2} className=" w3-center">
                            <i class="fas fa-user fa-3x"></i>
                            <h4><strong>Arian</strong></h4>
                            <h4 id="noTopMargin"><strong>Javdan</strong></h4>
                            <h4><a href="mailto:javdanv@kth.se">javdan@kth.se</a></h4>
                            </Col>
                        </Row>
                    </Grid>
                </div>

        </h2> 
        </div>
        </div>
        )
    }
}