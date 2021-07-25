import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

const FeesPayments = () => (
    <div>    
            <Container fluid class="main-body">  
            
                <h1>Payment Options</h1>
                <div class='border'></div> 
                <Row><Col md={10} lg={7}>
                <p>If accepted, a bond must be paid to confirm your room booking. If you are accepted into the accommodation but are subsequently not accepted into the programme of study you have applied for, the bond and administration fee will be refunded provided notice is given by the withdrawal date deadline.
                     If you choose not to study with Ara your bond will be refunded, less the administration fee.</p>
                <p>There are five options available for domestic students to pay rent at Ōtautahi House</p>
                <ul>
                    <li>Pay the full amount at the start of your studies by cheque or direct payment</li>
                    <li>Pay half of the fees at the start of your studies and the other half in June/July</li>
                    <li>Pay quarter of the fees at the start of each term (a payment schedule will be provided)</li>
                    <li>Fortnightly automatic payments (this will require a guarantor and a payment schedule will be provided).</li>
                    <li>Weekly automatic payments (this will require a guarantor and a payment schedule will be provided).</li>
                    </ul>
                </Col>
                </Row>
                <h1>Fees</h1> 
            <div class='border'></div>           
                <Row >
                
                    <Col sm={12} md={10} lg={5}>
                    <h2>Domestic Fees</h2>
                    <ul>
                    <li>Bond: 2 weeks rent (refundable)</li>
                    <li>Activities fee: $205.00 (non-refundable)</li>
                    <li>Administration fee: $230.00</li>
                    <li>Residential fee: $9840 (equivalent to $205 lier week. 48 week contract) </li>
                    <li>Includes power and wi-fi.</li>
                    <li>Food: N/A (Self catering and/or shared costs with flatmates).</li>
                    <li>Car parking (limited parking available) - $22.50 per week (a ballot will be held to allocate limited parking spaces)</li>
                    </ul>
                    </Col>
                    <Col md={0} lg={2}></Col>
                    <Col sm={12} md={10} lg={5}>
                    <h2>International Fees</h2>
                    <ul>
                    <li>Bond: $820.00 - One months rent (refundable)</li>
                    <li>Activities fee: $205.00 (non-refundable)</li>
                    <li>Administration fee: $230.00</li>
                    <li>Residential fee: $9840 (equivalent to $205 per week. 48 week contract) </li>
                    <li>Includes power and wi-fi.</li>
                    <li>Food: N/A (Self catering and/or shared costs with flatmates).</li>
                    <li>Bedding pack (optional): $140.00</li>
                    </ul>
                    </Col>
                </Row>
            </Container> 
    </div>

)

export default FeesPayments;