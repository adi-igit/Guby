import CommonSection from "../components/ui/Common-section/CommonSection";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { NFT__DATA } from "../assets/data/data";
import { motion } from "framer-motion";
import "../styles/nft-details.css";
import { Link } from "react-router-dom";
import LiveAuction from "../components/ui/Live-auction/LiveAuction";

type Props = {};

const NftDetails = ({}: Props) => {
  const { id } = useParams();

  const singleNft = NFT__DATA.find((item) => item.id === id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.01 }}
    >
      <CommonSection title={singleNft.title} />
      <section className="mt-5">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <img
                src={singleNft.imgUrl}
                alt=""
                className="w-100 single_nft-img"
              />
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="single_nft_content">
                <h2>{singleNft.title}</h2>
                <div className="d-flex align-items-center justify-content-between my-4">
                  <div className="d-flex align-items-center gap-4 single_nft-seen">
                    <span>
                      <i className="ri-eye-line"></i> 234
                    </span>
                    <span>
                      <i className="ri-heart-line"></i> 1234
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-2 single_nft-more">
                    <span>
                      <i className="ri-send-plane-line"></i>
                    </span>
                    <span>
                      <i className="ri-more-2-line"></i>
                    </span>
                  </div>
                </div>
                <div className="nft_creator d-flex gap-3 align-items-center">
                  <div className="creator_img">
                    <img src={singleNft.creatorImg} alt="" className="w-100" />
                  </div>
                  <div className="creator_detail">
                    <p>Created By</p>
                    <h6>{singleNft.creator}</h6>
                  </div>
                </div>
                <p className="my-4">{singleNft.desc}</p>
                <button className="singleNft-btn d-flex align-items-center gap-2 w-100"><i className="ri-shopping-bag-line"></i><Link to='/wallet'>Place a Bid</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <LiveAuction />
    </motion.div>
  );
};

export default NftDetails;
