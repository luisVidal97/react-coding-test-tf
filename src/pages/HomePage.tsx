import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div className="default-bg">
            <div className="homepage__container">

                <h1 className="title text-center homepage__title">
                    Luis Fernando  <br />
                    Cruces Vidal
                </h1>

                <div className="homepage__div-links">
                    <Link to="" className="homepage__buttons">
                       Part 1 
                    </Link>
                    <Link to="/" className="homepage__buttons">
                        Part 2
                    </Link>
                </div>

            </div>
        </div>
    )
}
