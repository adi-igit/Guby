import "./live-auction.css";
import { Container, Row, Col } from "reactstrap";
import NftCard from "../Nft-card/NftCard";
import { NFT__DATA } from "../../../assets/data/data";

type Props = {};

const LiveAuction = ({}: Props) => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <div className="live_auction_top d-flex align-items-center justify-content-between">
              <h3>Live Auction</h3>
              <span>
                <a href="#">Explore</a>
              </span>
            </div>
          </Col>

          {NFT__DATA.slice(0, 4).map((item) => (
            <Col lg="3" md='4' sm='6' key={item.id} className="mb-4">
              <NftCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LiveAuction;
