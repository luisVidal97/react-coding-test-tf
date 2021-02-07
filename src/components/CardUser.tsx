import React from 'react';

interface PropsCard {
    id: string
    lastVoted: string,
    picture: string,
    firstName: string,
    lastName: string,
    age: string | number,
    slogan: string,
    votes: number,
    showButtons: boolean,
    handleIncrementVote: Function,
    handleDecrementVote: Function,
}



export const CardUser: React.FC<PropsCard> = ( {id, picture, firstName, lastName, age, slogan, votes, handleIncrementVote, handleDecrementVote, showButtons, lastVoted}) => {

    const structureWithButtons = 
        <>
            <h5>Votes:</h5>
            <span className="animate__animated animate__fadeIn">{votes}</span>  
            <div className="cardUser__divVotes">
                <button 
                title="Increment his/her vote" 
                className="cardUser_buttons"
                onClick={ () => handleIncrementVote(id)}
                >
                    <i className="fas fa-plus fa-2x"></i>
                </button>

                <button 
                    title="Decrement his/her vote" 
                    className="cardUser_buttons"
                    onClick={ () => handleDecrementVote(id)}
                >
                    <i className="fas fa-minus-circle fa-2x"></i>
                </button>
            </div>
        </>
    ;
    
    const structureWithoutButtons = 
        <div className="cardUser__withoutButtons">
            <h5>Votes:</h5>
            <span className="animate__animated animate__fadeIn">{votes}</span>  
        </div>
    ;


    return (
        <div className="cardUser animate__animated animate__fadeIn ">
            <img src={picture} />
            <div className="cardUser__fullName">
                <h4>{`${firstName} ${lastName}`}</h4>
                <h5>{`Age: ${age}`}</h5>
                <blockquote className="cardUser__slogan">{`"${slogan}"`}</blockquote> 
            </div>


            <div className="cardUser__votes">
                {
                showButtons?
                    structureWithButtons
                :
                    structureWithoutButtons
                }
                
            </div>
            {
                lastVoted === id &&
                <div className="cardUser__highlight">
                    <i className="fas fa-star fa-2x"></i>
                </div>
            }
            
        </div>
    );
}
