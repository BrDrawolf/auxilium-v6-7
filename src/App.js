import React, {Component} from 'react';
import {Grid, Col, Row, Panel, Image} from 'react-bootstrap';
import './App.css';
//import Carousel from 'nuka-carousel';
import Slider from 'react-slick';

class App extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
        };

        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={12}>
                        <Panel>
                            <Panel.Body>
                                <Row>
                                    <Col md={4} mdOffset={2}>
                                        <Image src={'http://via.placeholder.com/350/b0e0e6/placeholder.jpg?text=1'}
                                               rounded/>
                                    </Col>
                                    <Col md={4} mdOffset={1}>
                                        <Panel>
                                            <Panel.Body>
                                                <label>Contact Info</label>
                                            </Panel.Body>
                                        </Panel>
                                    </Col>
                                </Row>
                                <Row className={'marginFix'}>
                                    <Col md={10} mdOffset={1}>
                                        <Panel>
                                            <Panel.Body>
                                                {/*<Carousel slidesToShow={5}
                                                      swiping={true}
                                                      cellSpacing={2}
                                                      easing={'easeQuadInOut'}
                                                      autoplay={true}
                                                      renderTopCenterControls={({ currentSlide }) => (
                                                          <div>Slide: {currentSlide}</div>
                                                      )}
                                                      renderCenterLeftControls={({ previousSlide }) => (
                                                          <button onClick={previousSlide}>Previous</button>
                                                      )}
                                                      renderCenterRightControls={({ nextSlide }) => (
                                                          <button onClick={nextSlide}>Next</button>
                                                      )}
                                            >
                                                <Image src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=1'} rounded />
                                                <Image src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=2'} rounded />
                                                <Image src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=3'} rounded />
                                                <Image src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=4'} rounded />
                                                <Image src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=5'} rounded />
                                                <Image src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=6'} rounded />
                                                <Image src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=7'} rounded />
                                                <Image src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=8'} rounded />
                                                <Image src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=9'} rounded />
                                                <Image src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=10'} rounded />
                                            </Carousel>*/}
                                                <Slider {...settings}>
                                                    <div>
                                                        <Image
                                                            src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=1'}
                                                            rounded />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=2'}
                                                            rounded />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=3'}
                                                            rounded />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=4'}
                                                            rounded />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=5'}
                                                            rounded />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=6'}
                                                            rounded />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=7'}
                                                            rounded />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=8'}
                                                            rounded />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=9'}
                                                            rounded />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            src={'http://via.placeholder.com/150/b0e0e6/placeholder.jpg?text=10'}
                                                            rounded />
                                                    </div>
                                                </Slider>
                                            </Panel.Body>
                                        </Panel>
                                    </Col>
                                </Row>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
