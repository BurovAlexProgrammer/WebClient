import { localeDTO } from 'burovalex-webdal/DAL';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { CookieKeys } from 'common/cookies';
import importedLocales from 'burovalex-webdal/langs.json';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

export const LanguageDropdown = (props: Props & React.HTMLAttributes<Dropdown>) => {
    const [ cookies, setCookies, removeCookies ] = useCookies();
    const t1 = cookies[CookieKeys.currLocale];
    const [ currLocale, setCurrLocale ] = useState(cookies[CookieKeys.currLocale] || 'en') ;
    const [ currLocaleTitle, setCurrLocaleTitle ] = useState("English");
    const locales = (importedLocales as localeDTO[]).sort((a, b) => a.title > b.title ? 1 : -1);

    useEffect(() => {
        setCurrLocaleTitle(getLocale(currLocale).title);
    }, [currLocale]);

    const changeLocale = (localKey) => {
        console.log(localKey)
        setCurrLocale(localKey);
        setCookies(CookieKeys.currLocale, localKey);
        //items.forsEach((x) => x.props.active = x.key === currLocale);
    }

    const getLocale = (localeKey: string) => {
        return locales.find(x => x.locale === localeKey) || {locale: "en", title: "English"};
    }

    const items = locales.map(x => {
        return <DropdownItem eventKey={x.locale} key={x.locale} active={x.locale===currLocale}>
            {x.title}
        </DropdownItem>;
    })

    return  <DropdownButton  
                title={currLocaleTitle}
                onSelect={changeLocale}
                size='sm'
                className='language-dropdown'>
                        {items}
            </DropdownButton>;
}

interface Props {
}