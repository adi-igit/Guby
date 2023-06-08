import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import NftCard from "../components/ui/Nft-card/NftCard";
import img from "../assets/images/img-01.jpg";
import avatar from "../assets/images/ava-01.png";
import "../styles/create-item.css";
import { motion } from 'framer-motion';

const item = {
  id: "04",
  title: "Guard",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
  imgUrl: img,
  creator: "Trista Francis",
  creatorImg: avatar,
  currentBid: 7.89,
};

type Props = {};

const Create = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.01 }}
    >
      <CommonSection title={`Create Item`} />
      <section>
        <Container>
          <Row className="mt-5">
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <NftCard item={item} />
            </Col>
            <Col lg="9" md="8" sm="6">
              <div className="create_item">
                <form>
                  <div className="form_input">
                    <label>Upload File</label>
                    <input
                      type="file"
                      placeholder="Browse"
                      className="upload_input"
                    />
                  </div>
                  <div className="form_input">
                    <label>Price</label>
                    <input
                      type="number"
                      placeholder="Enter price for one item (ETH)"
                    />
                  </div>
                  <div className="form_input">
                    <label>Minimum Bid</label>
                    <input type="number" placeholder="Enter minimum bid" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form_input w-50">
                      <label>Starting Date</label>
                      <input type="date" />
                    </div>
                    <div className="form_input w-50">
                      <label>Expiration Date</label>
                      <input type="date" />
                    </div>
                  </div>
                  <div className="form_input">
                    <label>Title</label>
                    <input type="text" placeholder="Enter title" />
                  </div>
                  <div className="form_input">
                    <label>Description</label>
                    <textarea
                      placeholder="Enter description"
                      className="w-100"
                    ></textarea>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  );
};

export default Create;
