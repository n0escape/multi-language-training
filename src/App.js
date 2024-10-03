
import './App.css';

import { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import  i18n from './i18n';
import { useTranslation } from 'react-i18next';

import MainPage from './components/MainPage/MainPage'
import ServicePage from './components/ServicePage/ServicePage';
import Header from './components/Header/Header';

const languages = {
	uk: "Ukrainian",
	ru: "Russian"
};

const App = () => {
	const { t } = useTranslation();
	const [language, setLanguage] = useState(i18n.language);

	useEffect(() => {
		document.documentElement.lang = language;
        i18n.changeLanguage(language)		
	}, [language]);

	return (
		<>
			<Router>
				<Header langs={languages} currLang={i18n.language} setLanguage={setLanguage} />
				<Routes>
					{/* Добавляем редирект для корневого пути */}
					<Route path="/" element={<Navigate to={`${language}`} />} />
					<Route path=":language">
						<Route index element={<MainPage lang={language}
							aboutUs={t('aboutUs')} services={t('services')} 
						/>}/>
						<Route path="service/:idFromUrl" element={<ServicePage lang={language}
							services={t('services')} 
						/>} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
