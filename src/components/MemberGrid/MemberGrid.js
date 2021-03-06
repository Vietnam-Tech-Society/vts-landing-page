import { Col, Row, Image, Container } from 'react-bootstrap'
import './MemberGrid.css';

const MemberGrid = ({ array }) => {

    return (
        <div  className="team-container">
          <Container>
            <Row>
              {array.map((member, index) => {
                return (
                  <Col sm={12} md={6} lg={3} className="team-img-container">
                    <Image className="team-img" src={member.url.default} alt="avatar" />
                    <div className="team-description">
                      <div className="name">{member.name}</div>
                      <div className="org">{member.org}</div>
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