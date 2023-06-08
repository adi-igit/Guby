import "./step-section.css";
import { Container, Row, Col } from "reactstrap";

type Props = {};

const STEP_DATA = [
  {
    title: "Setup your wallet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi, aut sapiente voluptas omnis veritatis.",
    icon: "ri-wallet-line",
  },
  {
    title: "Create your collection",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi, aut sapiente voluptas omnis veritatis.",
    icon: "ri-layout-masonry-line",
  },
  {
    title: "Add your NFTs",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi, aut sapiente voluptas omnis veritatis.",
    icon: "ri-image-line",
  },
  {
    title: "List them for sale",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi, aut sapiente voluptas omnis veritatis.",
    icon: "ri-list-check",
  },
];

const StepSection = ({}: Props) => {
  return (
    <section>
      <Container style={{ marginBottom: '100px' }}>
        <Row>
          <Col lg="12" className="mb-5">
            <h3 className="step_title">Create and Sell Your NFTs</h3>
          </Col>
          {STEP_DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
              <div className="single_step_item">
                <span>
                  <i className={item.icon}></i>
                </span>
                <div className="step_item_content">
                  <h5>
                    <a href="#">{item.title}</a>
                  </h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
