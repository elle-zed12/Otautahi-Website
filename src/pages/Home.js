import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import ohouseFrontView from "../images/home.PNG";
import ReactPlayer from "react-player";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const Home = () => (
    <div >    
                        
            
            <div id='wide-banner'><img src={ohouseFrontView} alt="Ōtautahi House Building" /></div>
            <div id='mobile-banner'><img src='https://i.postimg.cc/SR1LRVGt/mobile-Banner.jpg' alt="Ōtautahi House Building" /></div>
            <Container fluid class="main-body"> 
            <h2>Te whare o Ōtautahi</h2>
            <h1 id='title'>Welcome to Ōtautahi House</h1>             
                <Row >
                    <Col sm={12} lg={6}>
                    
                    <p id="intro">Situated right next door to our City campus, Ōtautahi House offers rooms for 192 students in modern, attractive apartments.</p>
                    <p>Ōtautahi House is a great place to stay while you're studying at Ara. This will give you the advantage of having access to ARA's facilities such as a library, 
                        computer room, and recreational center any time of the day.</p> <p>Additionally, this is a great opportunity to meet new people and develop lasting friendships.</p>
                    <h2>Convenient Location</h2>
                    <ul>
                    <li>2 minute walk to ARA, reducing travel time and parking cost. </li>
                    <li>Free wifi access.</li>
                    <li>5-minute walk to large supermarkets and pharmacies.</li>
                    <li>10-minute walk to Hagley Park</li>
                    <li>Surrounded by multiple options to eat, shop, and do activities</li>
                    </ul>
                   
                    
                    </Col>
                    <Col sm={12} lg={6}>
                    <div class="slide-container">
                    <Fade>
                        <div class="each-fade" >
                        <div class="image-container">
                            <img src='https://i.postimg.cc/vZnrDGkW/room.jpg' alt='Student in the room' />
                        </div>
                        <h2 class='facility-heading'>Have your own personal space.</h2>
                        </div>
                        <div class="each-fade">
                        <div class="image-container">
                            <img src='https://i.postimg.cc/fk4L89WR/courtyard.jpg' alt="student having a barbeque party" />
                        </div>
                        <h2 class='facility-heading'>Spacious area for residents' events.</h2>
                        </div>
                        <div class="each-fade">
                        <div class="image-container">
                            <img src='https://i.postimg.cc/fWVfgQWG/student-Room.jpg' alt='hanging out friends'/>
                        </div>
                        <h2 class='facility-heading'>Hang out with friends.</h2>
                        </div>
                        <div class="each-fade">
                        <div class="image-container">
                            <img src="https://i.postimg.cc/L8FqCLQ1/friends.jpg" alt='student inside the room'/>
                        </div>
                        <h2 class='facility-heading'>Meet new friends.</h2>
                        </div>
                        <div class="each-fade">
                        <div class="image-container">
                            <img src='https://i.postimg.cc/7hJh1VkR/outside1.jpg' alt="front of Ōtautahi house" />
                        </div>
                        <h2 class='facility-heading'>Modern apartment in a convenient location.</h2>
                        </div>
                        
                    </Fade>
                    </div>
                    </Col>
                </Row>
                <Row >
                    <Col md={12} lg={6}>
                    <h2>More Quality Accomodation for Students</h2>
                    <p>Student accommodation at Ara – Ōtautahi House, has undergone some major changes over the last year. Ara has taken over management of the student accommodation 
                        from private property management and has increased the availability for students from 72 beds to 192 beds.  </p>
                    
                    
                    </Col>
                    
                    <Col md={12} lg={6}>
                    <div className="img-container"><ReactPlayer width="99%"  controls="true" url="https://youtu.be/y290PifZUTk" /> </div>
                    </Col>
                    {/* <Col md={12} lg={4}></Col> */}
                </Row>
            </Container> 
    </div>

)

export default Home;