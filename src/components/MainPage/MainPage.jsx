import { Link } from "react-router-dom";

const MainPage = ({ lang, aboutUs, services }) => {
  
  return (
    <>
        <h3>{}</h3>
        <p>{aboutUs.description}</p>

        <ul>
            {services.map(service => (
                <li>
                    <h3>{service.title}</h3>
                    <Link to={`/${lang}/service/${service.id}`}> Детальніше </Link>
                </li>
            ))}
        </ul>
    </>
  );
}

export default MainPage;