import React, { PropTypes } from 'react';
import Styles from './Styles/main.scss';
import cx from 'classnames';

import Logo from 'components/Assets/Icons/Logo';
import Palette from 'components/Assets/Palette';
import Hamburger from 'components/Assets/Icons/Hamburger';
import Instagram from 'components/Assets/Social/instagram';
import Facebook from 'components/Assets/Social/Fb';
import Twitter from 'components/Assets/Social/Tw';
import YouTube from 'components/Assets/Social/YouTube';
import Ok from 'components/Assets/Social/Ok';
import Vk from 'components/Assets/Social/Vk';
import MenuLive from 'components/Assets/Icons/menuLive';

export default function Header(props) {
    const { handleMenu, isMenuVisible, language, socialLinks, menu, priorityFilter } = props;

    const ukClass = cx({
        [Styles.active]: language === 'uk',
        [Styles.language]: true
    });

    const ruClass = cx({
        [Styles.active]: language === 'ru',
        [Styles.language]: true
    });

    const dynamicStyle = {
        display: isMenuVisible ? 'flex' : 'none'
    };

    const mainMenuItems = menu.main
        .filter(priorityFilter)
        .map((el) => {
            const target = el.external ? {
                target: '_blank',
                rel: 'noopener noreferrer'
            } : null;

            const liveIcon = el.id === 'live' ? (
                <MenuLive className={ Styles.liveIcon } color={ Palette.paletteColor1 }/>
            ) : null;

            return (
                <li key={ el.id }>
                    { liveIcon }
                    <a { ...target } href={ el.url }>{ el.title }</a>
                </li>
            );
        })
    ;

    const subMenuItems = menu.sub
        .map((el) => {
            const target = el.external ? {
                'target': '_blank',
                'rel': 'noopener noreferrer'
            } : null;

            return (
                <li key={ el.id }>
                    <a { ...target } href={ el.title }>
                        { el.title }
                    </a>
                </li>
            );
        })
    ;

    return (
        <section className={ Styles.headerComponent }>
            <div className={ Styles.header }>
                <Logo className={ Styles.logo } color={ Palette.paletteColor10 }/>
                <ul className={ Styles.menu }>
                    { mainMenuItems }
                </ul>
                <Hamburger
                    className={ Styles.hamburger }
                    color={ Palette.paletteColor10 }
                    isOpened={ isMenuVisible }
                    onClick={ handleMenu }
                />
            </div>
            <div className={ Styles.popup } style={ dynamicStyle }>
                <div className={ Styles.content }>
                    <ul className={ Styles.menu } >
                        { subMenuItems }
                    </ul>
                    <div className={ Styles.footer }>
                        <div className={ Styles.social }>
                            <a href={ socialLinks.youtube } className={ Styles.youtube }><YouTube/></a>
                            <a href={ socialLinks.instagram } className={ Styles.instagram }><Instagram/></a>
                            <a href={ socialLinks.twitter } className={ Styles.twitter }><Twitter/></a>
                            <a href={ socialLinks.vk } className={ Styles.vk }><Vk/></a>
                            <a href={ socialLinks.facebook } className={ Styles.facebook }><Facebook/></a>
                            <a href={ socialLinks.ok } className={ Styles.ok }><Ok/></a>
                        </div>
                        <div className={ Styles.languages }>
                            <span className={ Styles.choose }>Язык сайта:</span>
                            <span className={ ruClass }>Русский</span>
                            <span className={ ukClass }>Украинский</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

Header.propTypes = {
    mediaType: PropTypes.string.isRequired,
    handleMenu: PropTypes.function,
    isMenuVisible: PropTypes.boolean,
    language: PropTypes.string,
    socialLinks: PropTypes.string,
    menu: PropTypes.object,
    priorityFilter: PropTypes.function
};