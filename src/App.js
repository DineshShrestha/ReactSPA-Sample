import React from 'react';

import './App.css';
import {Button, Navbar,Nav,NavDropdown, Carousel, Form, FormControl} from 'react-bootstrap';

function App() {
  return (
    <div>
    <section id="header">
    <div className="menu_bar">
    <Navbar bg="light" expand="lg" style={{'backgroundImage': 'linear-gradient(to right, #6db9ef,#7ce08a)'}}>
  <Navbar.Brand href="#home"><img src="./images/jobclues.png" alt="BannerLogo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">All Jobs</Nav.Link>
      <Nav.Link href="#link">Companies</Nav.Link>
      <Nav.Link href="#link">Walk-In</Nav.Link>
      <Nav.Link href="#link">Govt. Companies</Nav.Link>
      <Nav.Link href="#link">Internship</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  </div>
  <div className="banner">
    <h1>Jobs Around you</h1>
    <p>Subscribe us to get connected</p>
  </div>
  <div className="searchjob">
    <input type="text" className="form-control" placeholder="search Keyword"/>
    <input type="text" className="form-control" placeholder="search Keyword"/>
    <input type="text" className="form-control" placeholder="search Keyword"/>
    <Button bsStyle="primary" value="Submit">Find Job</Button>
  </div>
</section>
<section id="recruiters">
    <div className="container">
        <h3> Top Recruiters</h3>
         <div>
          <img src="./images/dell.png" alt="dell"/>
          <img src="images/affect.png"/>
          <img src="images/amazon.png"/>
          <img src="images/netflix.png"/>
          <img src="images/oracle.png"/>
          <img src="images/cisco.png"/>
         </div>
         <div>
            <img src="images/infosys.png"/>
            <img src="images/tnw.png"/>
            <img src="images/amazon.png"/>
            <img src="images/IBM.png"/>
            <img src="images/danone.png"/>
            <img src="images/indeed.png"/>
            
        </div>
          <div>
            <img src="images/adobe.png"/>
            <img src="images/microsoft.png"/>
            <img src="images/wallmart.png"/>
            <img src="images/google.png"/>
            <img src="images/forbes.png"/>
            <img src="images/fedex.png"/>
            
        </div>
            
    </div>
            
  </section>
  <section id="jobs">
    <div className="container">
      <h5> Recent Updates</h5>
      <div className="company-details">
        <div className="job-update">
              <h4><b>Seasoned Senior python Developer (Fresher)</b></h4>
              <p>XYZ Solutions Pvt Ltd</p>
              <i className="fa fa-briefcase" ><span> 0-1 yrs</span></i><br/>
              <i className="fa fa-usd" ><span> 3500 - 4000 p.a.</span></i><br/>
              <i className="fa fa-map-marker" ><span>Oslo</span></i><br/>
              <p> Skills <i className="fa fa-angle-double-right"></i><small>java</small><small>python</small>
              <small>HTMl, CSS</small><small>.NET</small></p>
              <p>Description <i className="fa fa-angle-double-right"></i> Subscribe JobClue for more information and monthly newsletters.
              <a href="#">Read More</a></p>
              <div class="apply-btn">
                <button type="button" className="btn btn-primary">Apply</button>
              </div>
       </div>
       <div className="company-details">
            <div className="job-update">
                <h4><b>Seasoned Senior python Developer (Fresher)</b></h4>
                <p>XYZ Solutions Pvt Ltd</p>
                <i className="fa fa-briefcase" ><span> 0-1 yrs</span></i><br/>
                <i className="fa fa-usd" ><span> 3500 - 4000 p.a.</span></i><br/>
                <i className="fa fa-map-marker" ><span>Oslo</span></i><br/>
                <p> Skills <i className="fa fa-angle-double-right"></i><small>java</small><small>python</small>
                <small>HTMl, CSS</small><small>.NET</small></p>
                <p>Description <i className="fa fa-angle-double-right"></i> Subscribe JobClue for more information and monthly newsletters.
                <a href="#">Read More</a></p>
            </div>
                <div className="apply-btn">
                    <button type="button" className="btn btn-primary">Apply</button>
                </div>
            </div>
            
            <div className="company-details">
                <div className="job-update">
                    <h4><b>Seasoned Senior python Developer (Fresher)</b></h4>
                    <p>XYZ Solutions Pvt Ltd</p>
                    <i className="fa fa-briefcase" ><span> 0-1 yrs</span></i><br/>
                    <i className="fa fa-usd" ><span> 3500 - 4000 p.a.</span></i><br/>
                    <i className="fa fa-map-marker" ><span>Oslo</span></i><br/>
                    <p> Skills <i className="fa fa-angle-double-right"></i><small>java</small><small>python</small>
                    <small>HTMl, CSS</small><small>.NET</small></p>
                    <p>Description <i className="fa fa-angle-double-right"></i> Subscribe JobClue for more information and monthly newsletters.<a href="#">Read More</a></p>
                </div>
                <div className="apply-btn">
                    <button type="button" className="btn btn-primary">Apply</button>
                </div>
            </div>
            <div className="company-details">
                <div className="job-update">
                    <h4><b>Seasoned Senior python Developer (Fresher)</b></h4>
                    <p>XYZ Solutions Pvt Ltd</p>
                    <i className="fa fa-briefcase" ><span> 0-1 yrs</span></i><br/>
                    <i className="fa fa-usd" ><span> 3500 - 4000 p.a.</span></i><br/>
                    <i className="fa fa-map-marker" ><span>Oslo</span></i><br/>
                    <p> Skills <i className="fa fa-angle-double-right"></i><small>java</small><small>python</small>
                    <small>HTMl, CSS</small><small>.NET</small></p>
                    <p>Description <i className="fa fa-angle-double-right"></i> Subscribe JobClue for more information and monthly newsletters.<a href="#">Read More</a></p>
                </div>
                <div className="apply-btn">
                    <button type="button" className="btn btn-primary">Apply</button>
                </div>
            </div>
            <ul className="pagelink text-center">
                <li className="left-arrow">&#8592;</li>
                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li className="right-arrow">&#8594;</li>
            </ul>  
      </div>
    </div>
  </section>
  <section id="site-stats">  
  <div className="container text-center">
    <h3>JobClue Site Stats</h3>
    <div className="row">
      <div className="col-md-6">
          <div className="row">
              <div className="col-6">
                  <div className="stats-box">
                      <i className="fa fa-user-o"></i><span><small>100k +</small></span>
                      <p> Job Seekers</p>
                  </div>
              </div>
              
              <div className="col-6">
                  <div className="stats-box">
                      <i className="fa fa-slideshare"></i><span><small>500 +</small></span>
                      <p> Empolyers</p>
                  </div>
              </div>
          </div>
      </div>
      
        <div className="col-md-6">
          <div className="row">
              <div className="col-6">
                  <div className="stats-box">
                      <i className="fa fa-hand-peace-o"></i><span><small>10k +</small></span>
                      <p> Active Jobs</p>
                  </div>
              </div>
              
              <div className="col-6">
                  <div className="stats-box">
                      <i className="fa fa-building-o"></i><span><small>400 +</small></span>
                      <p> Companies</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
  </div>
    </section>
    
    <section id="app-banner" className="text-center">
        <h1> Find Jobs on Mobile, Download JobClues App </h1>
        <a href="#"><img src="images/appstore.png"/></a>
        <a href="#"><img src="images/playstore.png"/></a>
        
    </section>
    
    <section id="footer" className="text-center">
        <img src="images/jobcluesblack.png"/>
        <p> Suscribe for more job details and Our daily and monthly updates.<br/> Press the bell icon to get notification of new videos.</p>
        <a href="https://www.facebook.com"><img src="images/facebookicon.png"/></a>
        <a href="https://twitter.com/"><img src="images/twittericon.png"/></a>
        <a href="https://www.whatsapp.com"><img src="images/watsappicon.png"/></a>
        <a href="https://www.linkedin.com"><img src="images/linkedin.png"/></a>
        <hr/>
        <p> Made with &copy; By JobClue</p>
    </section>
</div>
  
  );
}

export default App;
