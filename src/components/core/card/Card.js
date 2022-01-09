import React from 'react';
import './Card.scss';



export class Card extends React.Component {

    render() {
        return (
            <div className='d-flex align-items-center justify-content-center flex-column'>
                <div className={`card p-2 ${this.props.hasShadow ? 'dp-card' : ''}`}>
                    {this.props.body}
                </div>
                <div className="card-footer d-flex align-items-center justify-content-center flex-column">
                    {this.props.footer}
                </div>
            </div>
        )
    }
}