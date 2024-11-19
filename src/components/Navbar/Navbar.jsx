import { useState } from "react";
import { Menu } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleExternalLink = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=916360214369",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <main className={styles.navContainer}>
          {/* Logo and Name */}
          <div className={styles.logoContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
              <path
                className={styles.c6qeh}
                d="M16.975 3.036c6.402.475 11.514 5.586 11.99 11.989H24.32a7.345 7.345 0 0 1-7.345-7.345V3.036Zm-1.95 21.284v4.644c-6.402-.475-11.514-5.587-11.989-11.99H7.68a7.345 7.345 0 0 1 7.345 7.346Z"
              ></path>
              <path
                className={styles.c7moj}
                d="M3.036 15.025c.475-6.403 5.587-11.514 11.99-11.99V7.68a7.345 7.345 0 0 1-7.346 7.345H3.036Zm21.284 1.95h4.644c-.475 6.402-5.586 11.514-11.989 11.989V24.32a7.345 7.345 0 0 1 7.345-7.345Z"
              ></path>
            </svg>
            <span className={styles.brandName}>Magnum</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className={styles.desktopLinks}>
            {/* <a href="/" className={styles.navLink}>
              About
            </a>
            <a href="/about" className={styles.navLink}>
              Team
            </a>
            <a href="/services" className={styles.navLink}>
              Resources
            </a>
            <a href="/contact" className={styles.navLink}>
              Tools
            </a> */}
            <div className={styles.navButton} onClick={handleExternalLink}>
              Talk to Magnum
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className={styles.menuIcon} />
          </button>
        </main>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuLinks}>
              {/* <a href="/" className={styles.navLink}>
                Home
              </a>
              <a href="/about" className={styles.navLink}>
                About
              </a>
              <a href="/services" className={styles.navLink}>
                Services
              </a>
              <a href="/contact" className={styles.navLink}>
                Contact
              </a> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
