import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { getDevice } from "../comps/helper";

const Footer = () => {
  const device = getDevice();

  return (
    <div className="main-container footer-banner-wrapper" id="contact">
      <footer className="footer-bar">
        {/* Arrow/Chevron avatar badge on the left */}
        <div className="footer-avatar-badge">
          <AccountCircleOutlinedIcon
            style={{ fontSize: 28, color: "#ffffff" }}
          />
        </div>

        {/* Contact info cards */}
        <div className="footer-contacts">
          <div className="footer-contact-item">
            <div className="footer-contact-icon location">
              <LocationOnOutlinedIcon style={{ fontSize: 20 }} />
            </div>
            <div className="footer-contact-text">
              <span className="footer-contact-label">LOCATION</span>
              <span className="footer-contact-value">
                Buldhana, Maharashtra, India
              </span>
            </div>
          </div>

          <a
            href="mailto:dsuradkar111@gmail.com"
            className="footer-contact-item"
            style={{ textDecoration: "none" }}
          >
            <div className="footer-contact-icon email">
              <EmailOutlinedIcon style={{ fontSize: 20 }} />
            </div>
            <div className="footer-contact-text">
              <span className="footer-contact-label">EMAIL</span>
              <span className="footer-contact-value">
                dsuradkar111@gmail.com
              </span>
            </div>
          </a>

          <a
            href="tel:+919657531971"
            className="footer-contact-item"
            style={{ textDecoration: "none" }}
          >
            <div className="footer-contact-icon phone">
              <LocalPhoneOutlinedIcon style={{ fontSize: 20 }} />
            </div>
            <div className="footer-contact-text">
              <span className="footer-contact-label">PHONE</span>
              <span className="footer-contact-value">+91 9657531971</span>
            </div>
          </a>
        </div>

        {device === "mobile" && <hr />}

        {/* Social links */}
        <div className="footer-socials">
          <a
            href="https://github.com/DhammapalSuradkar-123"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub"
          >
            <GitHubIcon style={{ fontSize: 20 }} />
          </a>
          <a
            href="https://www.linkedin.com/in/dhammapalsuradkar/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn"
          >
            <LinkedInIcon style={{ fontSize: 20 }} />
          </a>
          <a
            href="https://www.instagram.com/_dhamma_1999_/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Instagram"
          >
            <InstagramIcon style={{ fontSize: 20 }} />
          </a>
          <a
            href="https://x.com/Dhammapal__S"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="X (Twitter)"
          >
            <XIcon style={{ fontSize: 18 }} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
