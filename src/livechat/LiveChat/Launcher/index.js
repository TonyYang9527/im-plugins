import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Badge from './Badge';
import openLauncher from '../../../assets/icon/tools/launcher_button.svg';
import close from '../../../assets/icon/tools/clear-button.svg';
import './style.scss';


const Launcher = observer(({ toggle, chatOpened, badge }) => {
    return (
        <button type="button" className={chatOpened ? 'rcw-launcher rcw-hide-sm' : 'rcw-launcher'} onClick={toggle}>
            <Badge badge={badge} />
            {chatOpened ?
                <img src={close} className="rcw-close-launcher" alt="" /> :
                <img src={openLauncher} className="rcw-open-launcher" alt="" />
            }
        </button>
    );


});

Launcher.propTypes = {
    toggle: PropTypes.func,
    chatOpened: PropTypes.bool,
    badge: PropTypes.number
};

export default Launcher ;