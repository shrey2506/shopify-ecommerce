import React from 'react';
import './productmoreinfo.css'

export class ProductMoreInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 1,
        }
    }

    handlePrevClick () {

        let x=this.state.currentImage;
        if (x==1){
            console.log(this.state.currentImage)
           x=5;
        }
        x--;

        this.setState({
            currentImage:x
    })
    }

      handleNextClick () {
          let x=this.state.currentImage;
        if (x==4){
            console.log(this.state.currentImage)
           x=0;
        }
        x++;

        this.setState({
            currentImage:x
        })
    }


    render() {


        const style={
            opacity:this.state.currentImage,
        }

        const stylemainimage={
            display:'block'
        }



        return (

            <div className="productmoreinfo-container">
                <div className="left">

                    <div className="mainimage">
                        <img style={this.state.currentImage==1?stylemainimage:{}} className="img fade" captain="hi" src={this.props.imageUrl} />
                        <img style={this.state.currentImage==2?stylemainimage:{}} className="img fade" src={this.props.imageUrl} />
                        <img style={this.state.currentImage==3?stylemainimage:{}} className="img fade" src={this.props.imageUrl} />
                        <img style={this.state.currentImage==4?stylemainimage:{}} className="img fade" src={this.props.imageUrl} />
                       
                            <a className="prevbtn" onClick={this.handlePrevClick.bind(this)}> &#10094;</a>
                            <a className="nextbtn" onClick={this.handleNextClick.bind(this)}> &#10095;</a>
                            
                       


                    </div>

                    <div className="smallimage">
                        <div style={this.state.currentImage==1?style:{}} className="imageitem active image-1 ">
                        <img className="img" src={this.props.imageUrl} onClick={()=>this.setState({currentImage:1})}/>
                        </div>
                        <div style={this.state.currentImage==2?style:{}} className="imageitem image-2">
                        <img className="img" src={this.props.imageUrl} onClick={()=>this.setState({currentImage:2})}/>
                        </div>
                        <div style={this.state.currentImage==3?style:{}} className="imageitem image-3">
                        <img className="img" src={this.props.imageUrl} onClick={()=>this.setState({currentImage:3})}/>
                        </div>
                        <div style={this.state.currentImage==4?style:{}} className="imageitem image-4">
                        <img className="img" src={this.props.imageUrl} onClick={()=>this.setState({currentImage:4})}/>
                        </div>

                    </div>

                </div>

                <div className="right">
                    <div className="title">
                        <h5>{this.props.name}</h5>
                    </div>
                    <br/>
                    <div className="details">
                        <p>hi,how are you.this is definitely is what you want in your whole life.</p>
                    </div>
                </div>

            </div>


        )
    }
}