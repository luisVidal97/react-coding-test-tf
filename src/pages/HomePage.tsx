import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
    return (
        <div className="default-bg">
            <div className="homepage__github">
                <Link to={{pathname:"https://github.com/luisVidal97/react-coding-test-tf"}}  target="_blank">
                    <i className="fab fa-github fa-3x navbar__icons"></i>
                </Link>
            </div>
            <div className="homepage__container">

                <h1 className="title text-center homepage__title">
                    Luis Fernando  <br />
                    Cruces Vidal
                </h1>

                <div className="homepage__div-links">
                    <Link to="/focusable-input" className="homepage__buttons">
                       Focusable input. Test it now!
                    </Link>
                    <Link to="/" className="homepage__buttons">
                        Part 2
                    </Link>
                </div>

            </div>
        </div>
    )
}
