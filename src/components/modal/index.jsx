import React from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';
import './style.css';

const Modal = ({ children, isOpen, onClose, img }) => {
    //Use useRef to get the modal element
    const modalRef = React.useRef();

    //const animate use useSpring to animate the modal
    const animate = useSpring({
        config:{
            duration: 250
        },
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
    });

    //Add event listener to the modal to close it when the user clicks outside of it
    const closeModal = e => {
        if(modalRef.current === e.target) {
            onClose(false);
        }
    }

    //Add event listener to the modal to close it when the user presses the esc key
    const keyPress = React.useCallback(e => {
        if(e.keyCode === 27 && e.key === 'Escape' && isOpen) {
            onClose(false);
        }
    }, [onClose,isOpen]);

    //Add useEffect to remove event listeners
    React.useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return(
        <React.Fragment>
            {isOpen ? (
                <div className='modal__container' onClick={closeModal} ref={modalRef}>
                    <animated.div style={animate}>
                        <div className='modal__content'>
                            <img src={img} alt='Camara' className='modal__img'/>
                            <div className='modal__body'>{children}</div>
                            <MdClose className='modal__close' onClick={() => onClose(prev => !prev)}/>
                        </div>
                    </animated.div>
                </div>
            ) : null}
        </React.Fragment>
    )
}

export default Modal;