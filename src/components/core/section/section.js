import React from "react";
import './Section.scss';

export class Section extends React.Component { 

    render() {
        return (
           <section id={this.props.id} className="m-4 p-2">
                <div className='d-flex justify-content-center align-items-center flex-column'>
                { this.props.heading &&
                    <>
                        <div className='text-uppercase text-muted text-center fs-2 fw-bold'>{this.props.heading}</div>
                        <div className="title-underline my-1"></div>
                    </>
                }
                </div>
                <div className="p-3 my-5">
                    {this.props.children}
                </div>
           </section>
        )
    }
}