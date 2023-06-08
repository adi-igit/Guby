import { useRef } from 'react';
import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from 'framer-motion';

type Props = {};

const Contact = ({}: Props) => {
  const nameRef: React.MutableRefObject<any | null> = useRef('');
  const emailRef: React.MutableRefObject<any | null> = useRef('');
  const subjectRef: React.MutableRefObject<any | null> = useRef('');
  const messageRef: React.MutableRefObject<any | null> = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Submit here
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.01 }}
    >
      <CommonSection title={`Contact`} />
      <section>
        <Container>
          <Row className="mt-5">
            <Col lg='6' md='6' className="m-auto text-center">
              <h2>Drop a Message</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odio laborum voluptatibus dolor praesentium accusantium veniam quas exercitationem alias ab?</p>
              <div className="contact mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="form_input">
                    <input type="text" placeholder="Enter your name" ref={nameRef} />
                  </div>
                  <div className="form_input">
                    <input type="email" placeholder="Enter your email" ref={emailRef} />
                  </div>
                  <div className="form_input">
                    <input type="text" placeholder="Enter subject" ref={subjectRef} />
                  </div>
                  <div className="form_input">
                    <textarea placeholder="Write message" ref={messageRef}></textarea>
                  </div>
                  <button className="send_btn" style={{ border: '0', padding: '7px 25px', borderRadius: '5px', marginTop: '20px' }}>Send a Message</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  );
};

export default Contact;
