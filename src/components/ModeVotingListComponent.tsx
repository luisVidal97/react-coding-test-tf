import React from 'react'
import { CardUser } from './CardUser';

interface PropsModeVotingListComponent {
    mode?: string,
    title: string,
    lastVoted: string,
    candidatesArray: Array<Object>,
    handleIncrementVote: Function,
    handleDecrementVote: Function,
}

export const ModeVotingListComponent: React.FC<PropsModeVotingListComponent> = ({title, mode, candidatesArray, handleIncrementVote, handleDecrementVote, lastVoted }) => {
    
    let showButtons = true;
    if(mode === 'orderByVotes'){
        candidatesArray.sort((a: any, b: any) => b.votes - a.votes);
        showButtons = false;
    }
    else if(mode === 'orderByAge'){
        candidatesArray.sort((a: any, b: any) => b.age - a.age);
        showButtons = false;
    }

    return (
        <div className="modeVotingListComponent">
            <h3>{title}</h3>
            {
                candidatesArray.map((item: any) => 
                    <CardUser 
                        key={ item.id} 
                        {...item} 
                        handleIncrementVote= {handleIncrementVote}
                        handleDecrementVote= {handleDecrementVote}
                        showButtons= {showButtons}
                        lastVoted={lastVoted}
                    />
                )
            }
        </div>
    )
}
