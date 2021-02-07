import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

export const HomePage: React.FC = () => {

    const history = useHistory();

    const handleOnClick = () => {

        Swal.fire({
            title: 'Enter candidates number',
            input: 'number',
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: (number) => {
                console.log(number);
                history.push(`/voting-list/${number}`);
            }
        });

    }

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
                    <button onClick={ handleOnClick } className="homepage__buttons">
                        Voting list. Check it now!
                    </button>
                </div>

            </div>
        </div>
    );
}
