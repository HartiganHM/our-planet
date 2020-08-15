import React from 'react';
import copyContent from '../../data/copyContent';
import './Footer.scss';

const { backendTag, backendUrl, contactTag, contactUrl, description, frontendTag, frontendUrl } = copyContent.footer;

const Footer = () => (
  <div className="footer">
    <div className="footer__wrapper">
      <span className="footer__copy">{description}</span>
      <div className="footer__links">
        <a href={contactUrl} className="footer__link">
          <div className="footer__icon footer__contact" />
          <span>{contactTag}</span>
        </a>

        <a
          href={frontendUrl}
          className="footer__link"
        >
          <div className="footer__icon footer__github" />
          <span>{frontendTag}</span>
        </a>

        <a
          href={backendUrl}
          className="footer__link"
        >
          <div className="footer__icon footer__github" />
          <span>{backendTag}</span>
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
