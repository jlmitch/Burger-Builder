import React from 'react';
import Classes from './Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = ({ children, modalClosed, show }) => (
    <Auxiliary>
        <Backdrop 
            show={show}
            clicked={modalClosed} />
        <div 
            className={Classes.Modal}
            style={{
                transform: show ? 'translateY(0)' : 'translateY(-10)',
                opacity: show ? '1' : '0',
            }}>
            {children}
        </div>
    </Auxiliary>
    
)

export default modal;