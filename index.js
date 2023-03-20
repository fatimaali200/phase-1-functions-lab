// Code your solution in this file!

function distanceFromHqInBlocks(someValue){

    let numberOfBlock;
    if(someValue > 42){
       numberOfBlock=someValue-42;
    }
    else{
        numberOfBlock = 42 -someValue;
    }
    return numberOfBlock;
}

function distanceFromHqInFeet(someValue){

  let blocks=distanceFromHqInBlocks(someValue)
  return blocks*264;
}

function distanceTravelledInFeet(start, destination){
  if(destination > start){
    return (destination-start)*264;
  }
  else if(destination < start){
    return (start-destination)*264
  }
}

function calculatesFarePrice(start, destination){

    let feetNumber=distanceTravelledInFeet(start,destination);
    if(feetNumber < 400){
      return 0;
    }
    else if(feetNumber >400 && feetNumber<2000){
       return 0.02*(feetNumber-400);
       
    }
    else if(feetNumber > 2000 && feetNumber <2500){
        return 25;
    }
    else {
        return'cannot travel that far';
    }
}