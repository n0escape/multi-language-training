import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServicePage = ({ lang, services }) => {
	const { idFromUrl } = useParams();
	const [serviceData, setServiceData] = useState(null);
	useEffect(() => {
		setServiceData( services.find(item => item.id === idFromUrl) )
	}, [services, idFromUrl]);

	return (
		<>
		{serviceData && (
			<>
				<h3>{serviceData.title}</h3>
				<Link to={`/${lang}`}> Назад </Link>
			</>
		)}
		</>
	);
}

export default ServicePage;