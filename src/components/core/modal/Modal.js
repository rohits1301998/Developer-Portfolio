import react from 'react';
import './Modal.scss';
import ReactDOM from 'react-dom';


export class Modal extends react.Component {
    

    render() {
        const modal = <div className='modal'>
            <div className='modal-header row align-items-center'>
                <div className='col-10'>
                    <span className='px-2 fw-bold text-capitalize fs-6 text-primary'>{this.props.title}</span>
                </div>
                <div className='col-2 d-flex justify-content-end align-items-center'>
                    <button onClick={this.closeModal.bind(this)} className='rounded-circle d-block close-btn mx-4' >
                        <i className='mdi fw-bold mdi-close text-primary fs-6'></i>
                    </button>
                </div>
            </div>
            <div className='modal-body p-3'>
                {this.props.body}
            </div>
        </div>;
        document.documentElement.classList.add('overflow-hidden');
        return ReactDOM.createPortal(modal, document.body);
    }

    componentWillUnmount() {
        document.documentElement.classList.remove('overflow-hidden');
    }

    closeModal() {
        if (this.props.closeFn) {
            this.props.closeFn();
        }
    }
}