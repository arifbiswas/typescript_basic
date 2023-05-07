
interface DtailsInterface{
    id: number;
    name: string;
    description: string;
}

interface LocalMarket<Nam,Price, agun = DtailsInterface> {
    name : Nam,
    price : Price,
    object? : DtailsInterface
}

const newMarket : LocalMarket<string,number,Object> = {
    name : "New Market",
    price : 100,
    object : {
         name : "New Market",
         id : 5,
        description : "onek kichu uiiii bolar ache tumi sudu tahko takia ki jani boro dekhe ami nosto hoya jai chok khani asa kore achi bose ami tomari jonno aka bose asbe kobe tomar pohor sodan kore norobe bose sopnota jani dupre pure geshi nibe nah.."
    }
}

// console.log(newMarket);

interface MarketMember<FirstPerson,SecondPerson>{
    leaderShip : FirstPerson,
    member? : SecondPerson,
} 

const newMember : MarketMember<string,undefined> = {
    leaderShip : "New Member",
    // member : "New Member"
}
const addMember : MarketMember<string,Object>={
    leaderShip : "Rustum Member",
    member : {
        name : "Rustum Member",
        id : 5,
    }
}