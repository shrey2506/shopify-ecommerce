import React, { Component } from 'react';
import './imageshow.css'

import image1b from '/Users/FirstFolder/Documents/projects/shopify api/src/images/image1b.jpg';

import image11 from '/Users/FirstFolder/Documents/projects/shopify api/src/images/image11.jpg';
import image12 from '/Users/FirstFolder/Documents/projects/shopify api/src/images/image12.jpg';
import image13 from '/Users/FirstFolder/Documents/projects/shopify api/src/images/image13.jpg';

import familyactivity from '/Users/FirstFolder/Documents/projects/shopify api/src/images/familyactivity.png';
import ttent from '/Users/FirstFolder/Documents/projects/shopify api/src/images/ttent.jpg';
import shoe from '/Users/FirstFolder/Documents/projects/shopify api/src/images/shoe.png';
import speaker from '/Users/FirstFolder/Documents/projects/shopify api/src/images/speaker.jpg';
import event from '/Users/FirstFolder/Documents/projects/shopify api/src/images/event.jpg';
import backpack from '/Users/FirstFolder/Documents/projects/shopify api/src/images/backpack.jpg';
import greentent from '/Users/FirstFolder/Documents/projects/shopify api/src/images/greentent.jpg';
import b2 from '/Users/FirstFolder/Documents/projects/shopify api/src/images/b2.jpeg';
import b3 from '/Users/FirstFolder/Documents/projects/shopify api/src/images/b3.jpeg';
import b4 from '/Users/FirstFolder/Documents/projects/shopify api/src/images/b4.jpeg';
import b5 from '/Users/FirstFolder/Documents/projects/shopify api/src/images/b5.jpeg';
import b6 from '/Users/FirstFolder/Documents/projects/shopify api/src/images/b6.jpeg';




export class ImageShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            direction: '',
            interval:true

        }
        this.handleClickPlus = this.handleClickPlus.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);
    }

    componentDidMount() {

       

            let myInterval=setInterval(() => {

            
            if (this.state.position == 1) {
                this.setState({
                    position: 3,
                    direction: 'left'

                })
                return
            }
            this.setState({
                position: this.state.position - 1,
                direction: 'left'

            })},4000
        );
        this.setState({
            myInterval:myInterval
        })
    
    }

    componentWillUnmount (){
        clearInterval(this.state.myInterval)
    }


    handleClickPlus(event) {

                const cal = () => {
                    if (this.state.position == 3) {
                        return 1;
                    }
                    return this.state.position + 1;
                }


        this.setState({

                    position: cal(),
                    direction: "right",
                });
                if (this.state.myInterval){
                    clearInterval(this.state.myInterval)
                }

            }

    handleClickMinus(event) {
                const cal = () => {
                    if (this.state.position == 1) {
                        return 3;
                    }
                    return this.state.position - 1
                }
        this.setState({
                    position: cal(),
                    direction: "left",
                    interval:false,

                });
                if (this.state.myInterval){
                    clearInterval(this.state.myInterval)
                }
                

     
            }


    render() {


                let styleimage1 = {};

                let styleimage2 = {};
                let styleimage3 = {};
                let styleimage5 = {};



                if(this.state.position == 2 && this.state.direction == "right") {
            styleimage1 = {
                left: "0%",
                transform: 'translate(100%)',
                transition: '.6s ease'
            }

            styleimage2 = {
                left: "-100%",
                transform: 'translate(100%)',
                transition: '.6s ease'
            }



        }

        if (this.state.position == 3 && this.state.direction == "right") {

            styleimage1 = {
                left: "500%",
            }

            styleimage2 = {
                left: "0%",
                transform: 'translate(100%)',
                transition: '.6s ease'
            }

            styleimage3 = {
                left: "-100%",
                transform: 'translate(100%)',
                transition: 'transform .6s ease'
            }



        }

        if (this.state.position == 1 && this.state.direction == "right") {

            styleimage1 = {
                left: '-100%',

                transform: 'translate(100%)',
                transition: 'transform .6s ease'

            }

            styleimage3 = {
                left: "0%",
                transform: 'translate(100%)',
                transition: ' .6s ease'
            }





        }





        if (this.state.position == 3 && this.state.direction == "left") {

            styleimage1 = {
                left: '0%',
                transform: 'translate(-100%)',
                transition: '.6s ease'

            }

            styleimage3 = {
                left: '100%',
                transform: 'translate(-100%)',
                transition: 'transform .6s ease'

            }





        }


        if (this.state.position == 2 && this.state.direction == "left") {

            styleimage3 = {
                left: '0%',
                transform: 'translate(-100%)',
                transition: '.6s ease'

            }

            styleimage2 = {
                left: '100%',
                transform: 'translate(-100%)',
                transition: 'transform .6s ease'

            }
            styleimage1 = {
                left: '500%',


            }
        }


        if (this.state.position == 1 && this.state.direction == "left") {

            styleimage1 = {
                left: '100%',
                transform: 'translate(-100%)',
                transition: 'transform .6s ease'

            }

            styleimage2 = {
                left: '0%',
                transform: 'translate(-100%)',
                transition: '.6s ease'

            }

        }


        return (
            <div className="imageshow-container">

                <div className="imageshow-left-container">

                    <div className='imageshow-left imageshow-left-01' style={styleimage1}>

                        <div className="info">
                            <p className="info-title">01 The first 100% waterproof shoes in the world!</p>
                            <p className="info-morebtn">check more!</p>
                        </div>
                        <div className="leftimage-container">
                            <img src={image11} />
                        </div>

                    </div>

                    <div className='imageshow-left imageshow-left-02' style={styleimage2}>

                        <div className="info">
                            <p className="info-title">02 Sleep in the rain, just Enjoy!</p>
                            <p className="info-morebtn">check more!</p>
                        </div>
                        <div className="leftimage-container">
                            <img src={image1b} />
                        </div>

                    </div>
                    <div className='imageshow-left imageshow-left-03' style={styleimage3}>

                        <div className="info">
                            <p className="info-title">03 Dryer than the Sahara during a downpour</p>
                            <p className="info-morebtn">check more!</p>
                        </div>
                        <div className="leftimage-container">
                            <img src={image13} />
                        </div>

                    </div>

                    <a className="prev" name="left" onClick={this.handleClickPlus}>&#10094;</a>
                    <a className="next" name="right" onClick={this.handleClickMinus}>&#10095;</a>

                    <div className="spotshow">
                        <span className={this.state.position == 3 ? 'active' : ''}></span>
                        <span className={this.state.position == 2 ? 'active' : ''}></span>
                        <span className={this.state.position == 1 ? 'active' : ''}></span>

                    </div>
                </div>

                <div className="imageshow-right-container">
                    
                    <div className="event">
                        <img src={familyactivity} />
                    </div >
                    <p style={styleimage5} className="joinbtn" > Join our fantastic FamilyFun events!</p>
                </div>

            </div>
        )

    }




}
