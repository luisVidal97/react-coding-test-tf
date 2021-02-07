import React from 'react';

interface PropsCard {
    picture: string,
    firstName: string,
    lastName: string,
    age: string | number,
    slogan: string,
    votes: number
}

export const CardUser: React.FC<PropsCard> = ( {picture, firstName, lastName, age, slogan, votes}) => {
    return (
        <div className="cardUser">
            <img src={picture} />
            <div className="cardUser__fullName">
                <h3>{`${firstName} ${lastName}`}</h3>
                <h5>{`Age: ${age}`}</h5>
            </div>

            <div className="cardUser__slogan">
                <blockquote>{`"${slogan}"`}</blockquote>  
            </div>

            <div className="cardUser__votes">
                <h5>Votes:</h5>
                <span>{votes}</span>  
            </div>

            <button title="Increment his/her vote" className="cardUser_buttons">
                <i className="fas fa-plus fa-3x"></i>
            </button>

            <button title="Decrement his/her vote" className="cardUser_buttons">
                <i className="fas fa-minus-circle fa-3x"></i>
            </button>
        </div>
    );
}
