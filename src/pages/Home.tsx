import HeroSection from "../components/ui/HeroSection";
import LiveAuction from "../components/ui/Live-auction/LiveAuction";
import SelllerSection from "../components/ui/Seller-section/SelllerSection";
import StepSection from "../components/ui/Stop-section/StepSection";
import TrendingSection from "../components/ui/Trending-section/TrendingSection";
import { motion } from 'framer-motion';

type Props = {};

const Home = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.01 }}
    >
      <HeroSection />
      <LiveAuction />
      <SelllerSection />
      <TrendingSection />
      <StepSection />
    </motion.div>
  );
};

export default Home;
