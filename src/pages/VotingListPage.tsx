import React from 'react';
import { useParams } from 'react-router-dom';
import { CardUser } from '../components/CardUser';


import { NavBarComponent } from '../components/NavBarComponent';
import { useFetchRandomUsers } from '../customHooks/useFetchRandomUsers';

export const VotingListPage: React.FC = () => {

    const { candidates }: {candidates: string} = useParams();
    
    const { data: candidatesArray , isLoading} = useFetchRandomUsers(candidates);
    

    

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
                <div >
                    
                    {
                        candidatesArray.map((item: any) => <CardUser key={ item.id} {...item}/>)
                    }
                    <br/>
                </div>
                
            }
        </>
    );
}
