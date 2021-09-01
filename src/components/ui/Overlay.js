import React from 'react'

const Overlay = ({ show, setShow }) => {
    const style = {
        show: `fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 opacity-100`,
    };

    return <div className={show ? style.show : ''} aria-hidden="true" onClick={() => setShow(false)} />;
}
export default Overlay
