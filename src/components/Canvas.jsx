import React, { Component } from "react";

export default class Canvas extends React.Component 
{


    componentDidMount()
    {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        ctx.font = "24px Courier";
        ctx.fillText(this.props.canvasText, 210, 75);
    }



    render() 
    {
        return(
            <div>
                <canvas ref="canvas" width={this.props.width} height={this.props.height} />

            </div>
        )
    }



}
