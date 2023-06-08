import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/wallet.css";
import { motion } from "framer-motion";

const wallet_data = [
  {
    title: "Bitcoin",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae possimus numquam perspiciatis eum, in ratione!",
    icon: "ri-bit-coin-line",
  },
  {
    title: "Coinbase",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae possimus numquam perspiciatis eum, in ratione!",
    icon: "ri-coin-line",
  },
  {
    title: "MetaMask",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae possimus numquam perspiciatis eum, in ratione!",
    icon: "ri-money-cny-circle-line",
  },
  {
    title: "Authereum",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae possimus numquam perspiciatis eum, in ratione!",
    icon: "ri-bit-coin-line",
  },
];

type Props = {};

const Wallet = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.01 }}
    >
      <CommonSection title={`Connect Wallet`} />
      <section>
        <Container>
          <Row className="mt-5">
            <Col lg="12" className="mb-4 text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Connect your wallet</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Atque esse odit commodi voluptate a impedit libero, earum
                  quidem quaerat assumenda!
                </p>
              </div>
            </Col>
            {wallet_data.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                <div className="wallet_item">
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </motion.div>
  );
};

export default Wallet;
