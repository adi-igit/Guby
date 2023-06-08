import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6" className='mb-4'>
            <div className="logo">
              <h2 className="d-flex gap-2 alig-items-center">
                <span>
                  <i className="ri-fire-fill"></i>
                </span>
                GUBY
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates aliquam esse perspiciatis iure voluptate? Et
                voluptatibus reiciendis quasi tenetur non.
              </p>
            </div>
          </Col>
          <Col lg="2" md="3" sm="6" className='mb-4'>
            <h5>My Account</h5>
            <ListGroup>
              <ListGroupItem className='list_item'><a href='#'>Author Profile</a></ListGroupItem>
              <ListGroupItem className='list_item'><a href='#'>Create Item</a></ListGroupItem>
              <ListGroupItem className='list_item'><a href='#'>Collection</a></ListGroupItem>
              <ListGroupItem className='list_item'><a href='#'>Edit Profile</a></ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6" className='mb-4'>
            <h5>Resources</h5>
            <ListGroup>
              <ListGroupItem className='list_item'><a href='#'>Help Center</a></ListGroupItem>
              <ListGroupItem className='list_item'><a href='#'>Partner</a></ListGroupItem>
              <ListGroupItem className='list_item'><a href='#'>Community</a></ListGroupItem>
              <ListGroupItem className='list_item'><a href='#'>Activity</a></ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6" className='mb-4'>
          <h5>Company</h5>
            <ListGroup>
              <ListGroupItem className='list_item'><a href='#'>About</a></ListGroupItem>
              <ListGroupItem className='list_item'><a href='#'>Career</a></ListGroupItem>
              <ListGroupItem className='list_item'><a href='#'>Ranking</a></ListGroupItem>
              <ListGroupItem className='list_item'><a href='#'>Contact</a></ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="3" sm="6" className='mb-4'>
            <h5>Newsletter</h5>
            <input type="text" className="newsletter" placeholder="Email" />
            <div className="social_links d-flex gap-3 align-items-center">
              <span><a href="#"><i className="ri-facebook-line"></i></a></span>
              <span><a href="#"><i className="ri-instagram-line"></i></a></span>
              <span><a href="#"><i className="ri-twitter-line"></i></a></span>
              <span><a href="#"><i className="ri-telegram-line"></i></a></span>
              <span><a href="#"><i className="ri-discord-line"></i></a></span>
            </div>
          </Col>
          <Col lg='12' className='mt-3 text-center'>
            <p className='copyright'>Copyright 2022, Developed by Adilet Gylzhigit. @AdiletGylzhigit All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
