import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import ImageGallery from 'react-image-gallery';



const images = [
    {
      original: "https://i.postimg.cc/7LvNN50s/kitchen.jpg",
      thumbnail: "https://i.postimg.cc/7LvNN50s/kitchen.jpg",
    },
    {
      original: 'https://i.postimg.cc/pT5hcCvK/living-Room.jpg',
      thumbnail: 'https://i.postimg.cc/pT5hcCvK/living-Room.jpg',
    },
    {
      original: 'https://i.postimg.cc/PrVLH0q1/lounge2.jpg"',
      thumbnail: 'https://i.postimg.cc/PrVLH0q1/lounge2.jpg"',
    },
    {
        original: "https://i.postimg.cc/L8FqCLQ1/friends.jpg",
        thumbnail: "https://i.postimg.cc/L8FqCLQ1/friends.jpg",
      },
      {
        original: 'https://i.postimg.cc/vZnrDGkW/room.jpg',
        thumbnail: 'https://i.postimg.cc/vZnrDGkW/room.jpg',
      },
      {
        original: 'https://i.postimg.cc/yYD1mxVS/happy-Insidethe-Room.jpg',
        thumbnail: 'https://i.postimg.cc/yYD1mxVS/happy-Insidethe-Room.jpg',
      },
      {
        original: 'https://i.postimg.cc/BZhcVY21/laundry.jpg',
        thumbnail: 'https://i.postimg.cc/BZhcVY21/laundry.jpg',
      },
      {
          original: "https://i.postimg.cc/ZYc9nGCW/background.jpg",
          thumbnail: "https://i.postimg.cc/ZYc9nGCW/background.jpg",
        },
        {
          original: 'https://i.postimg.cc/8c9VKd1f/parkingarea2.jpg',
          thumbnail: 'https://i.postimg.cc/8c9VKd1f/parkingarea2.jpg',
        }
        ,
        {
          original: 'https://i.postimg.cc/26sqqhfx/courtyard-2.jpg',
          thumbnail: 'https://i.postimg.cc/26sqqhfx/courtyard-2.jpg',
        },
        {
          original: 'https://i.postimg.cc/8c9VKd1f/parkingarea2.jpg',
          thumbnail: 'https://i.postimg.cc/8c9VKd1f/parkingarea2.jpg',
        }
        ,
        {
          original: 'https://i.postimg.cc/6QSqSnTN/Kitchen.jpg',
          thumbnail: 'https://i.postimg.cc/6QSqSnTN/Kitchen.jpg',
        }
  ];


const Facilities = () => (
    <div>    
            <Container fluid class="main-body">   
            <h1>Our Facilities</h1> 
            <div id='facilitiesGallery'>
            <ImageGallery  items={images} alt='facilities inside otautahi house'/>
            </div>

                <Row><Col lg={8}></Col></Row>     
                <Row >
                    <Col sm={12} lg={4}>
                    
                    
                    <h2 class='facility-heading'>Common Spaces</h2>
                    <ul><li>The communal kitchens have a fridge/freezer, microwave, toaster, electric jug and stove</li>
                    <li>Bathroom amenities consist of two showers, two vanity units and two toilets</li>
                    </ul>
                    
                    
                    </Col>
                    <Col sm={12} lg={4}>
                    <h2 class='facility-heading'>Private Room</h2>
                    
                    {/* https://www.npmjs.com/package/react-slideshow-image */}
                    <ul><li>You have your own room which is furnished with a king single bed, desk, chair, wardrobe, mirror and drawers.</li>
                    </ul>
                    
                    </Col>
                    <Col sm={12} lg={4}>
                    {/* https://www.npmjs.com/package/react-slideshow-image */}
                    <h2 class='facility-heading'>Other Amenities</h2>
                    <ul>
                    <li>Coin operated laundry facilities on the 2nd and 3rd floors of blocks A and B.</li>
                    <li>Wi-Fi is included in all blocks.</li>
                    <li>Although there are limited slots, parking is available within vicinity.</li>
                    </ul>
                    
                    </Col>
                </Row>
            </Container> 
    </div>

)

export default Facilities;

// https://www.npmjs.com/package/reactjs-image-gallery  https://openbase.com/js/react-image-gallery