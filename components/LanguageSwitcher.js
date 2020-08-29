import { i18n } from '../i18n'
import styled from "@emotion/styled"
import { useContext } from 'react'
import { I18nContext } from 'next-i18next'

function LanguageSwitcher() {
    const { i18n: { language } } = useContext(I18nContext)

    return(
        <LanguageSwitcherStyled>
            <button type="button" onClick={() => i18n.changeLanguage('hr')} className={language === 'hr' ? 'is-active': ''}>HR</button>
            <button type="button" onClick={() => i18n.changeLanguage('en')} className={language === 'en' ? 'is-active': ''}>EN</button>
        </LanguageSwitcherStyled>
    )
}

const LanguageSwitcherStyled = styled.div`
    button.is-active {
        background: #000;
        color: #fff;
    }
`;

export default LanguageSwitcher
