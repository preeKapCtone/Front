// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: #8f9dff;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContainer = styled.footer`
  width: 95%;
  max-width: 1200px;
  padding: 20px;
  background-color: #7f8cff;
  color: white;
  font-size: 1rem;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.div`
  text-align: center;
  font-weight: bold;
  display: flex;
  gap: 10px;
`;

const FooterLogo = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterText>
                    <span>we made</span>
                    <FooterLogo>sBOOKY</FooterLogo>
                    <span>we are 🐢BOOGIE Corporation</span>
                </FooterText>
            </FooterContainer>
        </FooterWrapper>
    );
};

export default Footer;