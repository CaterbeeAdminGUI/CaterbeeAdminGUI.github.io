import React from 'react';
import { Carousel, Row, Grid, Col } from 'react-bootstrap';


export default class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: false
        };
      }
    
    render()    {
        
        return(
            <div>
            <div className="w3-center header-fontsize">
                <div   id="project-page" className="w3-container w3-lobster">
                     <p className="ex1 w3-xxlarge">
                       <strong> Project Caterbee Admin GUI </strong>
                     </p>

                </div>
                <div className="w3-container w3-center">
                    <Grid>
                        <Row className="show-grid  w3-container w3-lobster">
                            <Col md={4} className="w3-center">
                            <i class="fas fa-map fa-3x"></i>
                            <h3><strong>Purpose</strong></h3>
                            <p>To create an interactive admin GUI for Caterbee</p>
                            </Col>
                            <Col md={4} className=" w3-center">
                            <i className="fas fa-code fa-3x"></i>
                            <h3><strong>Technologies used</strong></h3>
                            
                            <p>NodeJs, ReactJs, Redux, Python, Mysql</p>
                            </Col>
                            <Col md={4} className=" w3-center">
                            <i class="fab fa-connectdevelop fa-3x"></i>
                            <h3><strong>Practices used</strong></h3>
                            <p>Scrum, Instant meeting, Pair programming</p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                
                </div>
               <br/>
                <div className="w3-animate-meme w3-center">
                <Carousel>
                <Carousel.Item >
                    <div className="w3-container w3-center">
                    <a >
                        <img  src="/listOfOrders.png" width="1050" height="510"  alt=""></img>
                    </a>
                        <Carousel.Caption>
                        <h3>The list of orders</h3>
                        </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                <Carousel.Item >
                    <div className="w3-container w3-center">
                    <a >
                        <img  src="/listOfCompanies.png" width="1050" height="510"  alt=""></img>
                    </a>
                        <Carousel.Caption>
                        <h3>The list of Companies</h3>
                        </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="w3-container w3-center">
                    <a >
                        <img  src="/loginPage.png" width="1050" height="510"  alt=""></img>
                    </a>
                        <Carousel.Caption>
                        <h3>The Login page</h3>
                        </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    
                <Carousel.Item >
                    <div className="w3-container w3-center">
                    <a >
                        <img  src="/finishedStories.jpg" width="1050" height="510"  alt=""></img>
                    </a>
                        <Carousel.Caption>
                        <h3>The finished stories</h3>
                        </Carousel.Caption>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item >
                    <div className="w3-container w3-center">
                    <a href="https://i.imgur.com/QQKtRsH.jpg">
                        <img  src="https://i.imgur.com/QQKtRsH.jpg" width="1050" height="510"  alt=""></img>
                    </a>
                        <Carousel.Caption>
                        <h3>The groups Scrumboard</h3>
                        </Carousel.Caption>
                        </div>
                    </Carousel.Item>

                    
                    </Carousel>
 
                <br/>
                </div>

            </div>    
        );
        
    }
}