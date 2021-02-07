import { loremIpsum } from "lorem-ipsum";


export const getRandomUsers = async (candidatesNumber: string) =>{
    const url = `https://randomuser.me/api/?results=${candidatesNumber}&inc=gender,name,email,dob,picture,email`;
    let candidates = [];
    try {
        const response = await fetch( url );
        const {results} = await response.json();
        candidates = results.map( (item: any) => {
            const slogan = loremIpsum({
                sentenceLowerBound: 10,   // Min. number of words per sentence.
                sentenceUpperBound: 10,  // Max. number of words per sentence.
            });
            const votes = Math.floor(Math.random() * 10) + 1;
            let age = parseInt(item.dob.age) ;
            age =  age < 18? Math.floor(Math.random() * 100) + 18 : age;
            return ({
                id: item.email,
                firstName: item.name.first,
                lastName: item.name.last,
                picture: item.picture.thumbnail,
                age,
                slogan,
                votes
            });
        });
    } catch (error) {
        console.log(error);
    }
    
    return candidates;
}

