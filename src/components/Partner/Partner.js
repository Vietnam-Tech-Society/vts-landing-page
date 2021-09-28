import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import VNGLogo from '../../assets/img/VNG.png';
import './Partner.css';

const Partner = () => {
  return (
    <div className="partner-container">
      <Container>
        <Row>
          <Col md={12} lg={4}>
            <div className="partner-logo-container">
                <img src={VNGLogo} alt="VNG Logo" className="vng-logo" />
            </div>
          </Col>
          <Col md={12} lg={8}>
            <p>
            VNG Corporation is Vietnam Tech Society’ founding partner. With this partnership, VNG 
            envisions  to support and grow Vietnam tech enthusiasts worldwide. 
            </p>
            <p>
              Established in 2004, VNG is the technology champion of Vietnam and now serves millions 
              of users and organizations in more than 100 countries. VNG’s mission is to "Build 
              technologies and Grow people. For a better life." Operating an innovative ecosystem 
              with four key groups of products, VNG is committed to offering a more diverse and 
              seamless online experience to customers worldwide.
            </p>
            <p>
              Online Games: As one of the top game publishers in the Southeast Asian region, VNGGames 
              imports and distributes major Intellectual Property (IP) game titles in Vietnam and 
              across the Southeast Asian region. Besides, ZingPlay is VNG’s international platform 
              that focuses on our self-developed games.
            </p>
            <p>
              Connected Platforms: VNG's technology ecosystem consists of mobile platforms and 
              applications that support users in daily activities, including Zalo, ZingMP3, 
              BaoMoi, Zing TV and so on.
            </p>
            <p>
              Finance & Payment: ZaloPay, a digital wallet developed by VNG and a flagship product 
              of VNG, functions as an intermediary payment platform for seamless online transactions. 
            </p>
            <p>
              Cloud Services: VNG Cloud provides businesses with world-class cloud computing services 
              and solutions, supporting companies in their digital transformation journey via products 
              such as vServer, vCDN, vCloudcam and many more.
            </p>
          </Col>
        </Row>
      </Container>
  </div>
  );
};

export default Partner;