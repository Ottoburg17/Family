import React from 'react';
import { Containe, Row, Col, Container } from 'reactstrap';
import heroImg from '../assets/images/family2.jpg';
import "./hero-section.css"





const HeroSection = () => {
  return (
  <section>
     <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className='hero_content'>
                <h2 className='mb-4'> Családunk tudja, mi a helyes út a gyermek számára elvégzendő, otthoni rutinfeladatok betartásához!</h2>
                <p className='mb-4'> Tiszta ház. A házi kedvencek megetetve. A gyerekek nyugodtan tanulnak. <br /> Mindezt anélkül, hogy megkérdezték volna! Legyen szó házi feladatról, vagy akár ház körüli munkáról. <br /> Feladalatrendszerünket szerteni fogja az egész család.    
                </p>

               </div>
            </Col>


            <Col lg='6' md='6'>
               <img src={heroImg} alt='' className='w-100' />
            </Col>
        </Row>
     </Container>

  </section>
  );
};

export default HeroSection;
