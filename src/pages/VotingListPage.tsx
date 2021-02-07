import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardUser } from '../components/CardUser';
import { ModeVotingListComponent } from '../components/ModeVotingListComponent';


import { NavBarComponent } from '../components/NavBarComponent';
import { useFetchRandomUsers } from '../customHooks/useFetchRandomUsers';

export const VotingListPage: React.FC = () => {

    const { candidates }: {candidates: string} = useParams();
    
    const [ candidatesArray , isLoading, setData] = useFetchRandomUsers(candidates);
    const [lastVoted, setLastVoted] = useState<string>('');
    

    const handleIncrementVote = (id: string) => {
        const user:any = candidatesArray.find( (item: any) => item.id === id);
        let votes = user.votes;

        if(votes === 20) return;
        
        votes++;
        setLastVoted(id);
        const newArray = candidatesArray.map((item: any)=> {
            if(item.id === id){
                item.votes = votes
            }
            return item;
        });
        
        setData((currentState: any) => ({
            ...currentState,
            data: newArray
        }));
    }

    const handleDecrementVote = (id: string) => {
        const user:any = candidatesArray.find( (item: any) => item.id === id);
        let votes = user.votes;

        if(votes === 0) return;
        
        votes--;
        setLastVoted(id);
        const newArray = candidatesArray.map((item: any)=> {
            if(item.id === id){
                item.votes = votes
            }
            return item;
        });
        
        setData((currentState: any) => ({
            ...currentState,
            data: newArray
        }));
    }

    return (
        <>
            <NavBarComponent />
            <br/>
            <br/>
            <h1 className="votingListPage__title">Voting list</h1>
            <br/>
            
            {
            isLoading?
                <div className="sk-circle">
                    <div className="sk-circle1 sk-child"></div>
                    <div className="sk-circle2 sk-child"></div>
                    <div className="sk-circle3 sk-child"></div>
                    <div className="sk-circle4 sk-child"></div>
                    <div className="sk-circle5 sk-child"></div>
                    <div className="sk-circle6 sk-child"></div>
                    <div className="sk-circle7 sk-child"></div>
                    <div className="sk-circle8 sk-child"></div>
                    <div className="sk-circle9 sk-child"></div>
                    <div className="sk-circle10 sk-child"></div>
                    <div className="sk-circle11 sk-child"></div>
                    <div className="sk-circle12 sk-child"></div>
                </div>
            :
                <div className="votingListPage__modes animate__animated animate__fadeIn">
                    <ModeVotingListComponent 
                        title="Candidates List"
                        candidatesArray={candidatesArray}
                        lastVoted={lastVoted}
                        handleIncrementVote= {handleIncrementVote}
                        handleDecrementVote= {handleDecrementVote}
                    />
                    <hr/>
                    <br />
                    <ModeVotingListComponent 
                        title="Order by votes"
                        mode= "orderByVotes"
                        lastVoted={lastVoted}
                        candidatesArray={[...candidatesArray]}
                        handleIncrementVote={handleIncrementVote}
                        handleDecrementVote={handleDecrementVote}
                    />
                    <hr/>
                    <br />
                    <ModeVotingListComponent 
                        title="Order by age"
                        mode= "orderByAge"
                        lastVoted={lastVoted}
                        candidatesArray={[...candidatesArray]}
                        handleIncrementVote= {handleIncrementVote}
                        handleDecrementVote= {handleDecrementVote}
                    />
                    
                    
                    <br/>
                </div>
                
            }
        </>
    );
}
