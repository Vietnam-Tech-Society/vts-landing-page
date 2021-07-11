import { Col, Row, Image, Container } from 'react-bootstrap'
import './MemberGrid.css';
import * as constants from '../../util/constants';

const MemberGrid = () => {

    return (
        <div  className="team-container">
            <Container>
                <Row>
                {constants.teamInfo.map((member, index) => {
                  return (
                    <Col xs={6} md={3} key={index} className="team-img-container">
                      <Image className="team-img" src={member.url.default} alt="avatar" />
                      <div className="team-description">
                        <div className="name">{member.name}</div>
                        <div className="role">{member.pos}</div>
                      </div>
                    </Col>
                    
                  );
                })} 
                </Row>
              </Container>
              
        </div>
    )

}
export default MemberGrid