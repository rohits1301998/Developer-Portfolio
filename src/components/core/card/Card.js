import React from 'react';
import './Card.scss';



export class Card extends React.Component {
    hasPadding = true;
    constructor(props) {
        super(props);
        this.hasPadding = props.hasPadding ?? true;
    }

    render() {
        return (
            <div className='d-flex align-items-center justify-content-center flex-column'>
                <div className={`w-100 d-flex align-items-center justify-content-center card ${this.hasPadding ? 'p-2' : 'p-0'} ${this.props.hasShadow ? 'dp-card' : ''}`}>
                    {this.props.body}
                </div>
                <div className="card-footer d-flex align-items-center justify-content-center flex-column">
                    {this.props.footer}
                </div>
            </div>
        )
    }
}