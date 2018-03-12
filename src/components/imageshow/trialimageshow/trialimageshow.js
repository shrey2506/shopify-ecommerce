import Slider from 'react-slick';
import React, { component } from 'react';
import './trialimageshow.css'

export const TrialImageShow = () => {

    return (
        <div className="container">
            <Slider >

                <div className="one">one</div>
                <div className="two">two</div>
                <div className="three">three</div>
            </Slider>

        </div>

    )
}