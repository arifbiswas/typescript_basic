const getMyCarSpeed = (speed : unknown)=>{
    if( typeof speed === 'number'){
       const converCarSpeed = (speed * 1000)/3600;
       console.log("My speed is " + converCarSpeed);
    }
    if( typeof speed === 'string'){
        const value = speed.split(" ")[0];
        const converCarSpeed = (parseFloat(value) * 1000)/3600;
        console.log("My speed is " + converCarSpeed);
    }
}

getMyCarSpeed(20)
getMyCarSpeed("30 kmh^-1")