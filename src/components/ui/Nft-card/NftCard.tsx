import { useState } from "react";
import "./nft-card.css";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

const NftCard = (props) => {
  const { title, id, currentBid, creatorImg, imgUrl, creator } = props.item;

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="single_nft_card">
      <div className="nft_img">
        <Link to={`/market/${id}`}>
          <img src={imgUrl} alt="" className="w-100" />
        </Link>
      </div>
      <div className="nft_content">
        <h5 className="nft_title">
          <Link to={`/market/${id}`}>{title}</Link>
        </h5>
        <div className="creator_info-wrapper d-flex gap-3">
          <div className="creator_img">
            <img src={creatorImg} alt="" className="w-100" />
          </div>
          <div className="creator_info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <p>{creator}</p>
            </div>
            <div>
              <h6>Current Bid</h6>
              <p>{currentBid} ETH</p>
            </div>
          </div>
        </div>
        <div className="mt-3 d-flex align-items-center justify-content-between">
          <button
            className="bid_btn d-flex alig-items-center gap-1"
            onClick={() => setShowModal(true)}
          >
            <i className="ri-shopping-bag-line"></i> Place Bid
          </button>
          {showModal && <Modal setShowModal={setShowModal} />}
          <span className="history_link">
            <a href="#">View History</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
