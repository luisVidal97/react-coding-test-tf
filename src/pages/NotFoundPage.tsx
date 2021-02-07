import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
    return (
        <div className="default-bg">
            <div className="notfoundpage__container">
                <h1 className="notfoundpage__text">
                    Page not found 404...
                </h1>
                <Link to="/" className="notfoundpage__text notfoundpage__link">
                    Please return to home page
                </Link>
                <br />
                <div className="notfoundpage__img">
                    <img src="./assets/Loft-404.gif"/>
                </div>
            </div>
        </div>
    );
}
