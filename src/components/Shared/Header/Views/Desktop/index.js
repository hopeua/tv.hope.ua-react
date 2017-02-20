import React, { PropTypes } from 'react';
import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';
import cx from 'classnames';

import Instagram from 'components/Assets/SocialFlat/instagram';
import Facebook from 'components/Assets/SocialFlat/Fb';
import Twitter from 'components/Assets/SocialFlat/Tw';
import YouTube from 'components/Assets/SocialFlat/YouTube';
import Vk from 'components/Assets/SocialFlat/Vk';
import Logo from 'components/Assets/Icons/Logo';
import Palette from 'components/Assets/Palette';
import MenuLive from 'components/Assets/Icons/menuLive';
import Worldwide from 'components/Assets/Icons/Worldwide';

export default function Header(props) {
    const {
        locale,
        socialLinks,
        menu,
        sortMenu,
        filterMenu,
        worldwide
    } = props;

    const ukClass = cx({
        [Styles.active]: locale === 'uk',
        [Styles.language]: true
    });

    const ruClass = cx({
        [Styles.active]: locale === 'ru',
        [Styles.language]: true
    });

    const subMenu = menu.items
        .filter(filterMenu('sub'))
        .sort(sortMenu('sub'))
        .map((el) => {
            const target = el.external ? {
                'target': '_blank',
                'rel': 'noopener noreferrer'
            } : null;

            return (
                <li key={ el.id }>
                    <a { ...target } href={ el.url }>{ el.title[locale] }</a>
                </li>
            );
        });

    const mainMenu = menu.items
        .filter(filterMenu('main'))
        .sort(sortMenu('main'))
        .map((el) => {
            const target = el.external ? {
                target: '_blank',
                rel: 'noopener noreferrer'
            } : null;

            const liveIcon = el.id === 'live' ? (
                <MenuLive className={ Styles.liveIcon } color={ Palette.mainColor3 }/>
            ) : null;

            return (
                <li key={ el.id }>
                    { liveIcon }
                    <a { ...target } href={ el.url }>{ el.title[locale] }</a>
                </li>
            );
        })
    ;
    const worldwideData = worldwide();

    return (
        <section className={ Grids.container }>
            <section className={ Styles.headerComponent }>
                <div className={ Styles.top }>
                    <a href={ worldwideData.url } className={ Styles.worldwideChannel }>
                        <Worldwide/>
                        { worldwideData.title[locale] }
                    </a>
                    <div className={ Styles.wrap }>
                        <ul className={ Styles.subMenu }>
                            { subMenu }
                        </ul>
                        <div className={ Styles.social }>
                            <a href={ socialLinks.youtube } className={ Styles.youTube }>
                                <YouTube/>
                            </a>
                            <a href={ socialLinks.instagram } className={ Styles.instagram }>
                                <Instagram/>
                            </a>
                            <a href={ socialLinks.twitter } className={ Styles.twitter }>
                                <Twitter/>
                            </a>
                            <a href={ socialLinks.vk } className={ Styles.vk }>
                                <Vk/>
                            </a>
                            <a href={ socialLinks.facebook } className={ Styles.fb }>
                                <Facebook/>
                            </a>
                        </div>
                        <div className={ Styles.languages }>
                            <a href="https://tv.hope.ua/ru" className={ ruClass }>Рус</a>
                            <span className={ Styles.slash }>/</span>
                            <a href="https://tv.hope.ua/uk" className={ ukClass }>Укр</a>
                        </div>
                    </div>
                </div>
                <div className={ Styles.main }>
                    <Logo className={ Styles.logo } color={ Palette.mainColor1 }/>
                    <ul className={ Styles.menu }>
                        { mainMenu }
                    </ul>
                </div>
            </section>
        </section>
    );
}

Header.propTypes = {
    locale: PropTypes.string.isRequired,
    socialLinks: PropTypes.object.isRequired,
    menu: PropTypes.object.isRequired,
    sortMenu: PropTypes.func.isRequired,
    filterMenu: PropTypes.func.isRequired,
    worldwide: PropTypes.func.isRequired
};
