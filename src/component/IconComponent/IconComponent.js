import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"

export default function IconComponent(props){
    function handleDownload(){
        alert('Downloading...')
    }
    return(
        <div className="IconContainer">
            <div className="icondisplay">
                <img src={props.img} alt=""/>
            </div>

            <div className="nameDownload">
                <div className="name">{props.name}</div>
                <div className="download">
                    <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1684618590/alx/Download_t7ulih.svg" onClick={handleDownload} alt=""/>
                </div>
            </div>
        </div>
    )
}