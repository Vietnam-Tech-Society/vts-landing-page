import { Col, Row, Image, Container } from 'react-bootstrap'
import './MemberGrid.css';

const MemberGrid = ({ array }) => {

    return (
        <div  className="team-container">
            <Container>
                <Row>
                {array.map((member, index) => {
                  return (
                    <Col xs={6} md={3} key={index} className="team-img-container">
                      <Image className="team-img" src={member.url} alt="avatar" />
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