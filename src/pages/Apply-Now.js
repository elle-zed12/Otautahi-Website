import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ApplyNow = () => (
    <div>    
            <Container fluid class="main-body">  
            <h1>Stay With Us Now!</h1>
            <Row >
                    <Col md={12} lg={7}>
                        <p>We are excited to welcome you and be a part of our Otautahi House family. Applications can be made all year round. Preference will be given to those who apply before 31 October.</p>
                        <p>As rooms are limited, you should not wait until you are accepted onto a course before applying to live at Ōtautahi House. You will be notified in 
                            October and November whether your application has been successful or not.
                             Students seeking accommodation during the year should enquire as there may be vacancies.</p>
                    </Col>
                    <Col md={0} lg={1}></Col>
                    <Col md={12} lg={4}>
                    <div id='applyNow'>
                    <h2>Contact Details</h2>
                        <p>Phone: 03 940 8238</p>
                        <p><a href="mailto:accommodation@ara.ac.nz" id='email-link' >Email: accommodation@ara.ac.nz</a></p> 
                        <h2>Office Hours</h2>
                        <p>Debbie Evans</p>
                        <p>Student Advisor</p> 
                        <p>Monday - Friday</p>
                        <p>8:00 am - 4:00 pm</p>
                        </div>
                    <a href='https://www.ara.ac.nz/siteassets/documents---home/explore-ara/accommodation/student-accommodation-application-pack.pdf' target="_blank" rel="noreferrer" >
                        <button >Application Form</button></a>
                    </Col>
                </Row>            
                <Row >
                    <Col md={12} lg={7}>
                    <h2>Application Process</h2>
                         <ul><li>Please download and complete the application form and email or post it back to us.</li>
                         <li>Once your application form has been received your application will be held until the initial selection date.
                              You will receive an email of acknowledgement for your application. </li>
                         <li>Initial selection from all fully completed forms will be made as early as possible which will normally be November or early December. All applicants will be notified.</li>
                         <li>If you are offered a room but are unable to come to the Institute, please advise the Ara Accommodation Office accordingly. Email us before 17 January, the bond and activity fee will be refunded in full.</li>
                         <li>If there are rooms available for mid-year intakes, these will be processed on a case by case basis.</li>
                         <li>Preference will be given to full time students studying for at least one full year.</li>
                         <li>Preference is given to students who are aged 17 – 25 years (18 – 25 years for International students).</li>
                         <li>Download and fill up the application form now and be part of our Otautahi House Family.</li>
                         </ul> 
                    </Col>
                </Row>
                
            </Container> 
    </div>

)

export default ApplyNow;