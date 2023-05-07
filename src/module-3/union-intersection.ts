type NoobDeveloper = {
    name : string
}

// type JuniorDeveloper ={
//     name : string,
//     experience : number,
//     expertize : string
// }
// Intersection 
type JuniorDeveloper = NoobDeveloper & {
    experience : number,
    expertize : string
}

// Union types 
const newDeveloper : NoobDeveloper | JuniorDeveloper ={
    name : "Arif biswas",
    experience : 20,
    expertize : "React"
}

type NextLabelDeveloperType = JuniorDeveloper & {
    leaderShipExperience : number,
}

const nextDeveloper : NextLabelDeveloperType = {
    name : "Arif biswas",
    experience : 20,
    expertize : "React",
    leaderShipExperience : 10
}

// Thats mean | this symbol is Union and & this symbol is Intersection on typescripts