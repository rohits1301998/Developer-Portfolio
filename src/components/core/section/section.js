import React from "react";
import './Section.scss';

export class Section extends React.Component { 

    render() {
        return (
           <section id={this.props.id} className={`py-2 py-md-3 mx-lg-3 mx-sm-1 mx-xs-1 px-2 portfolio-section ${this.props.hasBg ? 'bg-light' : ''}`}>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                { this.props.heading &&
                    <>
                        <div className='text-uppercase text-muted text-center fs-2 fw-bold text-dark'>{this.props.heading}</div>
                        <div className="title-underline my-1"></div>
                    </>
                }
                </div>
                <div className="p-lg-3 p-1">
                    {this.props.children}
                </div>
           </section>
        )
    }
}