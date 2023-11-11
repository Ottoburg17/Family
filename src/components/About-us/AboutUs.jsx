import React from 'react';
import './about.css'
import { Container, Row, Col } from 'reactstrap';
import aboutImg from '../../assets/images/about-us.png';
import CountUp from 'react-countup';

const AboutUs = () => {
  return <section>
      <Container>
         <Row>
            <Col lg='6' md='6'>
              <div className="about_img">
                <img src={aboutImg} alt=" "
                className='w-100' />
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="about_content">
                   <h2>Rólunk</h2>
                    <p>A Családi Routine egy olyan platform, amely az otthoni háztartási feladatok betartását segíti,
                       egészen a mindennapi teendőkig a családok számára.
                      Ezen szolgáltatás a legegyszerűbb és legkényelmesebb módja, az otthoni teendők elvégzésére.</p>

                    <div className="about_counter">
                       <div className="single_counter">
                          <span className=" ">
                                  <CountUp start={0} end={2}  duration=
                                   {80} suffix='' />

                                   <p className="counter_title"> 
                                   A Családi Routine 2023-ban alakult gyakorlati megoldási problémaként: rutinszerű, hatékony családtagok segítése a közös házimunka-elvégzéséhez.
                                   Dani, Ottó és Dávid a Budapest Külker technikum diákjai,
                                   közösen úgy döntöttek, hogy létrehozzák a Családi rutinok weboldalt.
                                   </p> 
                          </span>
                       </div>
                    </div>
              </div>
            </Col>
         </Row>
      </Container>
    
  </section>
  
}

export default AboutUs
