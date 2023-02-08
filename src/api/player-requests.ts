
type CareerStats = {
    shotAttempts: number
    madeBaskets: number 
    rebounds: number 
    blocks: number 
    assists: number
}

type PlayerNameAndStats = {
    fname: string 
    lname: string 
    careerStats: CareerStats 
}

export async function getPlayerNamesAndStats():Promise<PlayerNameAndStats[]>{

    const query = `query PlayerNames {
        players{
          fname
          lname
          careerStats{
            shotAttempts
            madeBaskets
            blocks
            rebounds
            assists
          }
        }
      }`
    
    const requestBody:string = JSON.stringify({query:query});
    //graphql DOES NOT use the verb to specify what you are doing. The verb is ALWAYS POST for ANY kind of operations
    //GET verbs in particular cannot have a request body
    const httpResponse = await fetch("http://127.0.0.1:8000/graphql", {method:"POST", body:requestBody, headers:{'Content-Type':"application/json"}});
    const responseBody = await httpResponse.json();
    const players:PlayerNameAndStats[] = responseBody.data.players;
    return players;
}

export type PlayerInput = {
    fname: string
    lname: string 
    heightInches: number 
    weightLbs: number
}

export async function addPlayer(newPlayer: PlayerInput):Promise<{playerId:number}>{

    const query = `mutation AddPlayer($playerInput: NewPlayerInput!){
  
        addPlayer(input:$playerInput){
          playerId
        }
      }`
    
    const variables = {playerInput:newPlayer};
    const requestBody: string = JSON.stringify({query,variables});
    const httpResponse = await fetch("http://127.0.0.1:8000/graphql", {method:"POST", body:requestBody, headers:{'Content-Type':"application/json"}});
    const responseBody = await httpResponse.json();
    const playerInfo:{playerId:number} = responseBody.data.addPlayer;
    return playerInfo
}

export async function findPlayersByLname(lname:string):Promise<PlayerNameAndStats[]>{
  throw "NOT IMPLENETED"
}