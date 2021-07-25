import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

const HouseRules = () => (
    <div>    
        
            <Container fluid class="main-body">   
                <h1>House Rules Overview</h1>
                <p><a href='https://www.ara.ac.nz/siteassets/documents---home/explore-ara/accommodation/otautahi-house-rules.pdf' target="_blank" rel="noreferrer" >
                    View the Complete  House Rules for Ōtautahi house </a>(PDF 0.1MB)</p>
            <div class='border'></div>  
                <Row >
                    <Col md={6} lg={5}>
                    <h2>Private Room</h2>
                    <p>- You are responsible for keeping your own room and flat tidy and clean. </p>
                    <h2>Barbeque Area</h2>
                    <p>- Residents are permitted to use the barbecues in the courtyard at Ōtautahi House. Barbecues must be cleaned by the residents after each use.</p>
                    <h2>Secured Bikeshed</h2>
                    <p>- There is a lockable bikeshed on the grounds of Ōtautahi House. They are not to be secured to other objects in Ōtautahi House such as benches, light posts, trees, handrails, etc.</p>
                    <h2>On-Site Parking</h2>
                    <p>- Ōtautahi House has limited parking spaces available and will not be able to provide parking facilities to all residents of Ōtautahi House. A ballot will be held to allocate limited parking
                        spaces.
                        </p>
                    </Col>
                    <Col md={0} lg={2}>
                    </Col>
                    <Col md={6} lg={5}>
                    <h2>We are a Non-smoking Environment</h2>
                    <p>- Smoking is not permitted in the apartments or on the grounds of Ōtautahi House.</p>
                    <h2>Registered Assistance Dog is Welcome</h2>
                    <p>- No pets may be kept in Ōtautahi House. No animals may be brought into any building of Ōtautahi House other than guide, or other registered assistance dogs.</p>
                    <h2>Residents' Guests or Visitors are Welcome</h2>
                    <p>- Guests or visitors are allowed but must be accompanied by a resident at all times. Residents are held accountable and responsible for their guest’s actions.</p>
                    <h2>Be Respectful and Considerate</h2>
                    <p>- Ōtautahi House has house rules based on consideration and respect for others to allow it to function effectively and to ensure your academic success and enjoyment.</p>
                    </Col>
                </Row>
            </Container> 
    </div>

)

export default HouseRules;