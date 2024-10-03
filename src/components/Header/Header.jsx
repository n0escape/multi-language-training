import { useState } from 'react';
import s from'./Header.module.css'
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({langs, currLang, setLanguage}) => {
    const [dropdownToggle, setDropdownToggle] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleToggleLang = (lang) => {
        const {pathname} = location;
        const newPath = pathname.replace(currLang, lang);
        navigate(newPath);
        setLanguage(lang);
        setDropdownToggle(false);
    }
  
    return (
        <header>
            <div className={s.langContainer}>
                <button className={s.currentLang} onClick={() => setDropdownToggle(!dropdownToggle)}>{currLang}</button>
                <div className={`${s.langDropdown} ${dropdownToggle ? s.active : null}`}>
                    {Object.keys(langs).map(lang => (
                        <div 
                            className={s.langOption}
                            onClick={() => handleToggleLang(lang)}
                        >
                            {lang}
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;