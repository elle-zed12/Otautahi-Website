import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pastEvents from "../images/aboutUs/events.jpg";
import studentSupport from "../images/aboutUs/support2.PNG";
import person1 from "../images/aboutUs/person1.PNG";
import person2 from "../images/aboutUs/person2.PNG";
import person3 from "../images/aboutUs/person3.PNG";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';





function AboutUs () {
    return (
    <div>    
            <Container fluid class="main-body">  
            <h1>Ōtautahi House Community</h1>
            <Row >
                    <Col md={12} lg={5}>
                   
                    <h2>Disability Support</h2>
                    <p>We have a disabled-friendly facility to support our residents with disabilities to freely and safely move around the vicinity.</p>
                    <h2>We Embrace Diversity</h2>
                    <p>Living with us will give you an opportunity to live in a diverse community and meet people from other parts of the world. We have a number of Students' Exchange,
                         International Students, and Domestic Students.
                    </p>
                    <h2>Our Support Crew</h2>                    
                    <p>Our team is available to provide support and pastoral care while you're living at Ōtautahi House.</p>
                    <p>Ara has a duty of pastoral care to all of our learners, including specific requirements for learners in our Student Residence under the Education
                         (Pastoral Care of Domestic Tertiary Students) Interim Code of Practice 2019. To find out more about the code of practice go to
                         <a href="https://www.nzqa.govt.nz/providers-partners/domestic-code-of-practice/" target="_blank" rel="noreferrer"> Code of Practice</a></p>
                    <p>We also have five residential assistants that are available and can provide support outside office hours, seven days a week.</p>
                    </Col>
                    <Col></Col>
                    <Col md={12} lg={6}> <img src={studentSupport} alt="Events Poster" />
                    
                    </Col>
                </Row>            
                <Row >
                    <Col md={12} lg={5}>
                    <h2>Events for Our Residents</h2>
                    <p>As part of the student’s accommodation fees, the activity fee is used by the events team to run a number of events for Ōtautahi House students.
                         Some of the Events that we held in the past year are:</p>
                         <ul><li>A Welcome BBQ</li>
                         <li>Outdoor cinema</li>
                         <li>Ice Skating</li>
                         <li>Hot pools outing</li>
                         </ul> 
                    <p>Our team organises series of events every month. This provides an opportunity to 
                        help residents build relationships and expand their social circle. </p>
                    </Col>
                    <Col></Col>
                    <Col md={12} lg={6}><img src={pastEvents} alt="Events Poster" />
                    </Col>
                </Row><h2>Testimonial from Residents</h2>
                    <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}>
                    <div>
                    <img src={person1} alt='thumbnail'/>
                    <div className="myCarousel">
                    <h3>Jonas</h3>
                    <h4>National Academy of Singing and Dramatic Arts student 
                   </h4>
                    <p>
                    The new blocks are awesome. I moved in at the start of the year and they are so brand new! Each ‘O House’ resident has their own room with a desk, bed and wardrobe. Communal lounges, kitchens, showers and toilets 
                    are arranged around 36 secure apartment hubs.   </p>
                    </div>
                    </div>
                    <div>
                    <img src={person2} alt='thumbnail'/>
                    <div className="myCarousel">
                    <h3>Cynthia</h3>
                    <h4>Broadcasting Student
                   </h4>
                    <p>
                    This place is home away from home. Everyone is friendly.  </p>
                    </div>
                    </div>
                    <div>
                    <img src={person3} alt='thumbnail'/>
                    <div className="myCarousel">
                    <h3>Andrew</h3>
                    <h4>BICT Student
                   </h4>
                    <p>
                    I would highly recommend coming staying to Ōtautahi House, even just for the social element. You’re right in the middle of town; you can’t get any better than this.  </p>
                    </div>
                    </div>
                </Carousel>
               
                
            </Container> 
    </div>

);
}
export default AboutUs;

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img
//https://codesandbox.io/s/4xnxqz0ylx?file=/src/styles.css 