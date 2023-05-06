import telephone from '../../images/telephone.svg'
import bag from '../../images/bag.svg'

import { Link } from 'react-router-dom';
import { useState } from 'react';

import ModalWindow from '../modalWindow/ModalWindow';

function LinksContacts(props) {

    const [modalActive,setModalActive] = useState(false);

    return (
        <div className='links__contacts-bag-container'>
            <div className='links__contacts-and-bag'>
                <div className='links__phone'>
                    <img src={telephone} alt='' onClick={() => setModalActive(true)}/>
                    <span>+380-12-3456-789</span>
                </div>
                <div className='links__bag'>
                    <div className='links__bag-amount'>{props.amountValue}</div>
                    <Link to='/bag'><img src={bag} alt='' /></Link>
                </div>
            </div>
            <ModalWindow active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default LinksContacts;