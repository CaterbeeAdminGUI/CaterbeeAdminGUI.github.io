import React from 'react';
import '../App.css';

export default class Project extends React.Component {
    render() {
        return(
            <div id="project-page">
            <div class="w3-container w3-center">
            <div class="w3-container w3-lobster">
                 <p class="ex1 w3-xxlarge">
                   <strong> Follow the Project </strong>
                 </p>
            </div>
            <div>
            <div>
            <div id="main" class="w3-animate-meme w3-gothic ">
                    <b class="w3-center">Final note</b>
                    <p class=" w3-large">This project has been very 
                    exciting and we are very thankful to Caterbee for this opportunity, 
                    hard as it has been, it’s been a very instructive experience but most 
                    of all it’s been incredibly fun! We wish Caterbee the best of luck in 
                    their business pursuances! </p>
                    </div>

                <hr className="hr-styling" />
                <div id="main" class="w3-animate-meme w3-gothic ">
                    <b class="w3-center">26/4/2018</b>
                    <p class=" w3-large">Spring 4 has concluded, and with it the project! 
                    This week no real functionality has been added to the project, instead 
                    we have focused a lot on the design of the application and done a little 
                    bit of refactoring on the side. The design part mostly consisted of 
                    CSS-styling but also a fixing the layout of all of the application’s 
                    edit pages along with their placeholders. Below we can see the redesigned 
                    pages worked on this week.</p>
                </div>
                <div id="imagepadding">
                    <a href="/listOfCompanies.png">
                        <img src="/listOfCompanies.png" width="550" height="250" alt=""></img>
                    </a>
                    <a href="/listOfOrders.png">
                        <img src="/listOfOrders.png"  width="550" height="250" alt=""></img>
                    </a>
                    <a href="/loginPage.png">
                        <img src="/loginPage.png"  width="550" height="250" alt=""></img>
                    </a>
                    <a href="/editPage.png">
                        <img src="/editPage.png"  width="550" height="250" alt=""></img>
                    </a>
                </div>
                <hr className="hr-styling" />
            </div>
            <div>
                <div id="main" class="w3-animate-meme w3-gothic ">
                    <b class="w3-center">26/4/2018</b>
                    <p class=" w3-large">Sprint 3 is finished! This week the group has worked on finishing all edit functionalities
                    and the corresponding back-end features as well as migrating to Caterbee’s live database instead of using our
                     mysql test database. The project is now nearing its end and all of the functionality of the application have 
                     been finished functionality-wise, the group will continue working on the design of the application during the 
                     coming week! </p>
 
                    
                
                <div id="imagepadding">
                    <a href="/finishedStories.jpg">
                        <img src="/finishedStories.jpg" width="650" height="300" alt=""></img>
                    </a>
                </div>
                </div>
                
            </div>
            <hr className="hr-styling"/>
                <div id="main" class="w3-animate-meme w3-gothic ">
                    <b class="w3-center">19/4/2018</b>
                    <p class=" w3-large">Another sprint done! During this week’s sprint we’ve accomplished quite a lot. 
                    The main features such as listing companies and orders and creating edit pages for mentioned lists have 
                    been a top priority for this sprint. For this the react-bootstrap package has been used, proper back-end 
                    functions and a mysql test database has been setup. The group also decided to refactor the code to implement 
                    Redux, this proved a more time consuming task than the group had anticipated but we bounced back towards the 
                    end of the week with an authentication system using JWT tokens.  </p>
 
                    
                
                <div id="imagepadding">
                    <a href="https://i.imgur.com/ikT9VAo.png">
                        <img src="https://i.imgur.com/ikT9VAo.png" width="650" height="300" alt=""></img>
                    </a>
                </div>
                </div>
                
            </div>
            <hr className="hr-styling" />
            <div class="w3-container ">
            <div id="main"  class="w3-animate-meme w3-gothic   ">
                    <b class="w3-center">13/4/2018</b>
                    <p class=" w3-large">
                    Sprint 1 is finished! This week the basic structure of the web page was built with some implemented 
                    features and placeholder pages to be implemented fully at a later stage. The login functionality, 
                    for example, is just a placeholder that redirects to the main page for the application but a proper 
                    authentication system is planned for the coming week. The structure for our back-end API has also been 
                    established and will of course be extended thoroughly throughout the rest of the project. In the pictures 
                    below the login page and the page for listing orders can be seen.  
                    </p>
                
                <div id="imagepadding">
                    <a href="https://i.imgur.com/QtNAASF.png" >
                        <img src="https://i.imgur.com/QtNAASF.png" width="650" height="300" alt=""></img>
                    </a>
                
                
                    <a href="https://i.imgur.com/BrV6B1b.png" >
                        <img src="https://i.imgur.com/BrV6B1b.png" width="650" height="300" alt=""></img>
                    </a>
                </div>
                </div>
                
            </div>
            <hr className="hr-styling" />
          
            <div class="w3-container">
            <div id="main" class="w3-animate-meme w3-gothic   ">
                    <b class="w3-center">10/4/2018</b>
                    <p class=" w3-large">
                    The project has now officially started! The team has started the first sprint for the project and is proceeding as planned. 
                    The initial setup for the project includes a python back-end API, React Js front-end and 
                    a mysql database. The group is, at present, familiarizing themselves with the mentioned 
                    technologies with the goal of actually starting the more serious developing process 
                    towards the end of the week. Furthermore the group has held two meetings, firstly to decide 
                    the overall structure of the application and secondly to specify the design of all components 
                    of the application that are planned to be worked on this week, though more will be added 
                    later in the project.
                    
                    </p>
                </div>
                <hr className="hr-styling" />
                
            </div>
        </div> 
        
            </div>
        )
    }
}