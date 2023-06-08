import { useRef } from "react";
import "./header.css";
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {};

const Header = ({}: Props) => {
  const menuRef: React.MutableRefObject<any | null> = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("active_menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex gap-2 alig-items-center">
              <span>
                <i className="ri-fire-fill"></i>
              </span>
              GUBY
            </h2>
          </div>
          <div className="nav_menu" ref={menuRef} onClick={toggleMenu}>
            <motion.ul
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.5 }}
              className="nav_list"
            >
              <li className="nav_item">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "active" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink
                  to="/market"
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "active" : ""
                  }
                >
                  Market
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink
                  to="/create"
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "active" : ""
                  }
                >
                  Create
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "active" : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
            </motion.ul>
          </div>
          <div className="nav_right d-flex align-items-center gap-5">
            <button className="btn">
              <Link to="/wallet" className="d-flex gap-2 align-items-center">
                <span>
                  <i className="ri-wallet-line"></i>
                </span>
                Connect Wallet
              </Link>
            </button>
            <span className="mobile_menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
