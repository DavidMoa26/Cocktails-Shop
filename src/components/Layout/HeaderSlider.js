import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/slider/Cocktails.png'
import img2 from '../../assets/slider/Cocktails1.png'
import img3 from '../../assets/slider/Cocktails2.png'
import img4 from '../../assets/slider/Cocktails3.png'


const HeaderSlider = () => {
    return <Fragment>
        <hr />
        <Carousel controls={false} interval="3000" >
            <Carousel.Item>
                <img src={img1} alt="Img1"></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img2} alt="Img2"></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img3} alt="Img3"></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img4} alt="Img4"></img>
            </Carousel.Item>
        </Carousel>
    </Fragment>
}

export default HeaderSlider;