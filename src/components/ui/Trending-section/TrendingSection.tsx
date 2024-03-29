import './trending-section.css';
import { Container, Row, Col } from "reactstrap";
import { NFT__DATA } from '../../../assets/data/data';
import NftCard from '../Nft-card/NftCard';

type Props = {};

const TrendingSection = ({}: Props) => {
  return <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <h3 className="trending_title">Trending</h3>
        </Col>
        {
          NFT__DATA.slice(0,8).map(item=>(
            <Col lg='3' md='4' sm='6' key={item.id} className='mb-4'>
              <NftCard item={item} />
            </Col>
          ))
        }
      </Row>
    </Container>
  </section>;
};

export default TrendingSection;
