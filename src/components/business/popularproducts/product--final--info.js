import React from 'react';
import './product--final--info.css';
import { Loading } from '../../animation/loading';


export class ProductFinalInfo extends React.Component {
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

        if (!this.props.businesses[0]) {
            return (<Loading />)
            
        }

        const findResult=this.props.businesses.find(element=>element.id==this.props.match.params.id);

        if (!findResult){
            return (<div>there is no such product</div>)
        }


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
                        <img style={this.state.currentImage==1?stylemainimage:{}} className="img fade" src={findResult.imageUrl} />
                        <img style={this.state.currentImage==2?stylemainimage:{}} className="img fade" src={findResult.imageUrl} />
                        <img style={this.state.currentImage==3?stylemainimage:{}} className="img fade" src={findResult.imageUrl} />
                        <img style={this.state.currentImage==4?stylemainimage:{}} className="img fade" src={findResult.imageUrl} />
                       
                            <a className="prevbtn" onClick={this.handlePrevClick.bind(this)}> &#10094;</a>
                            <a className="nextbtn" onClick={this.handleNextClick.bind(this)}> &#10095;</a>
                            
                       


                    </div>

                    <div className="smallimage">
                        <div style={this.state.currentImage==1?style:{}} className="imageitem active image-1 ">
                        <img className="img" src={findResult.imageUrl} onClick={()=>this.setState({currentImage:1})}/>
                        </div>
                        <div style={this.state.currentImage==2?style:{}} className="imageitem image-2">
                        <img className="img" src={findResult.imageUrl} onClick={()=>this.setState({currentImage:2})}/>
                        </div>
                        <div style={this.state.currentImage==3?style:{}} className="imageitem image-3">
                        <img className="img" src={findResult.imageUrl} onClick={()=>this.setState({currentImage:3})}/>
                        </div>
                        <div style={this.state.currentImage==4?style:{}} className="imageitem image-4">
                        <img className="img" src={findResult.imageUrl} onClick={()=>this.setState({currentImage:4})}/>
                        </div>

                    </div>

                </div>

                <div className="right">
                    <div className="title">
                    <h5>{findResult.id}</h5>
                        <h5>{this.props.match.params.id}</h5>
                        
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