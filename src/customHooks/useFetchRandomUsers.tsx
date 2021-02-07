import { useEffect, useState } from "react"
import { getRandomUsers } from "../helpers/getRandommUsers";

export const useFetchRandomUsers = (candidates: string) => {
    const [state, setstate] = useState({
        data: [],
        isLoading: true
    });

    useEffect( ()=> {
        getRandomUsers(candidates)
            .then( candidatesArray => {

                setTimeout( ()=>{
                    setstate({
                        data: candidatesArray,
                        isLoading: false
                    });

                },1000);
            } );
    }, [candidates])

    return state;
}