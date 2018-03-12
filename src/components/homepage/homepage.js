import React from 'react';
import { ImageShow } from './imageshow/imageshow';
import { MainListsContainer } from '../../containers/homepagecontainer/mainlistscontainer';
import { Loading } from '../animation/loading';
import './homepage.css'


export const HomePage =(props)=>{

    return (
        <div className="homepage-container">
        <ImageShow />
        {props.productsList[0]?<MainListsContainer />:<Loading />}
        </div>
    )

}