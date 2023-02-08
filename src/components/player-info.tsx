import { useQuery } from "react-query"
import { getPlayerNamesAndStats } from "../api/player-requests"



export function PlayerInfo(){

    const {isLoading, data =[]} = useQuery("playercache", getPlayerNamesAndStats);

    if(isLoading){
        return <h1>LOADIN</h1>
    }

    return <>
        <h3>Player Info</h3>

        <ul>
            {data.map(p => <li>{p.fname} {p.careerStats.shotAttempts} {p.careerStats.madeBaskets}</li>)}
        </ul>
    </>
}