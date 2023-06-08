import "../styles/market.css";
import { useState } from 'react';
import CommonSection from "../components/ui/Common-section/CommonSection";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";
import NftCard from "../components/ui/Nft-card/NftCard";
import { NFT__DATA } from "../assets/data/data";

type Props = {};

const Market = ({}: Props) => {
  const [data, setData] = useState(NFT__DATA);

  const handleCategory = () => {};

  const handleItems = () => {};

  // SORTING DATA BY USING HIGH, MID, LOW RATE
  const handleSort = (e) => {
    const filterValue = e.target.value;

    if(filterValue === 'high'){
      const filterData = NFT__DATA.filter(item => item.currentBid > 6);
      setData(filterData)
    }
    if(filterValue === 'mid'){
      const filterData = NFT__DATA.filter(item => item.currentBid > 5.50 && item.currentBid < 6);
      setData(filterData)
    }
    if(filterValue === 'low'){
      const filterData = NFT__DATA.filter(item => item.currentBid > 4.89 && item.currentBid < 5.50);
      setData(filterData)
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.01 }}
    >
      <CommonSection title={`MarketPlace`} />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="market_product_filter my-5 d-flex align-items-center justify-content-between">
                <div className="filter_left d-flex align-items-center gap-5">
                  <div className="all_category_filter">
                    <select className='market_select' onChange={handleCategory}>
                      <option>All Categories</option>
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                      <option value="domain-name">Domain Name</option>
                      <option value="virtual-world">Virtual World</option>
                      <option value="trending-card">Trending Cards</option>
                    </select>
                  </div>
                  <div className="all_items_filter">
                    <select className='market_select' onChange={handleItems}>
                      <option>All Items</option>
                      <option value="single-item">Single Item</option>
                      <option value="bundle">Bundle</option>
                    </select>
                  </div>
                </div>
                <div className="filter_right">
                  <select className='market_select' onChange={handleSort}>
                    <option>Sort By</option>
                    <option value="high">High Rate</option>
                    <option value="mid">Mid Rate</option>
                    <option value="low">Low Rate</option>
                  </select>
                </div>
              </div>
            </Col>
            {data?.map((item) => (
              <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
                <NftCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </motion.div>
  );
};

export default Market;
