function generateAdder(a: number): (b: number) => number {

    return function(b: number) {
  
      return a + b;
  
    };
  
  }
  const addTwo = generateAdder(2);
  
  console.log(addTwo(3));
  
  console.log(addTwo(5));

  const arif =(kenu : number) : number=>{
    return kenu * kenu;
  }

  const lol = arif(5);
  console.log(lol);