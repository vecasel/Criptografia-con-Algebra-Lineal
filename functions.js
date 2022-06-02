function textSplit(textArray){ 
    let numArray = [];
    textArray.map(item => {
      switch(true){
        case item === "a":
            numArray.push(1);
            break;
        case item === "b":
            numArray.push(2);
            break;
        case item === "c":
            numArray.push(3);
            break;
        case item === "d":
            numArray.push(4);
            break;
        case item === "e":
            numArray.push(5);
            break;
        case item === "f":
            numArray.push(6);
            break;
        case item === "g":
            numArray.push(7);
            break;
        case item === "h":
            numArray.push(8);
            break;
        case item === "i":
            numArray.push(9);
            break;
        case item === "j":
            numArray.push(10);
            break;
        case item === "k":
            numArray.push(11);
            break;
        case item === "l":
            numArray.push(12);
            break;
        case item === "m":
            numArray.push(13);
            break;
        case item === "n":
            numArray.push(14);
            break;
        case item === "o":
            numArray.push(15);
            break;
        case item === "p":
            numArray.push(16);
            break;
        case item === "q":
            numArray.push(17);
            break;
        case item === "r":
            numArray.push(18);
            break;
        case item === "s":
            numArray.push(19);
            break;
        case item === "t":
            numArray.push(20);
            break;
        case item === "u":
            numArray.push(21);
            break;
        case item === "v":
            numArray.push(22);
            break;
        case item === "w":
            numArray.push(23);
            break;
        case item === "x":
            numArray.push(24);
            break;
        case item === "y":
            numArray.push(25);
            break;
        case item === "z":
            numArray.push(26);
            break;
      }
    });
    return numArray;
  }
  

  function vector(array){
    let cont = 1;
    let vectorOne = [], vectorTwo = [], vectorThree = [], vectorFour = [], VectorFive = [], VectorSix = [], VectorSeven = [], VectorEight = [], VectorNine = [], VectorTen = [], VectorEleven = [], VectorTwelve = [], VectorThirteen = [], VectorFourteen = [], VectorFifteen = [], VectorSixteen = [], VectorSeventeen = [], VectorEighteen = [], VectorNineteen = [], VectorTwenty = [], VectorTwentyOne = [], VectorTwentyTwo = [], VectorTwentyThree = [], VectorTwentyFour = [], VectorTwentyFive = [], VectorTwentySix = [], VectorTwentySeven = [], VectorTwentyEight = [], VectorTwentyNine = [], VectorThirty = [];
  
    array.map(item => {
      if(cont < 4){
        vectorOne.push(item);
        cont++;
      }
      else if(cont < 7){
        vectorTwo.push(item);
        cont++;
      }
      else if(cont < 10){
        vectorThree.push(item);
        cont++;
      }
      else if(cont < 13){
        vectorFour.push(item);
        cont++;
      }
      else if(cont < 16){
        VectorFive.push(item);
        cont++;
      }
      else if(cont < 19){
        VectorSix.push(item);
        cont++;
      }
      else if(cont < 22){
        VectorSeven.push(item);
        cont++;
      }
      else if(cont < 25){
        VectorEight.push(item);
        cont++;
      }
      else if(cont < 28){
        VectorNine.push(item);
        cont++;
      }
      else if(cont < 31){
        VectorTen.push(item);
        cont++;
      }
      else if(cont < 34){
        VectorEleven.push(item);
        cont++;
      }
      else if(cont < 37){
        VectorTwelve.push(item);
        cont++;
      }
      else if(cont < 40){
        VectorThirteen.push(item);
        cont++;
      }
      else if(cont < 43){
        VectorFourteen.push(item);
        cont++;
      }
      else if(cont < 46){
        VectorFifteen.push(item);
        cont++;
      }
      else if(cont < 49){
        VectorSixteen.push(item);
        cont++;
      }
      else if(cont < 52){
        VectorSeventeen.push(item);
        cont++;
      }
      else if(cont < 55){
        VectorEighteen.push(item);
        cont++;
      }
      else if(cont < 58){
        VectorNineteen.push(item);
        cont++;
      }
      else if(cont < 61){
        VectorTwenty.push(item);
        cont++;
      }
      else if(cont < 64){
        VectorTwentyOne.push(item);
        cont++;
      }
      else if(cont < 67){
        VectorTwentyTwo.push(item);
        cont++;
      }
      else if(cont < 70){
        VectorTwentyThree.push(item);
        cont++;
      }
      else if(cont < 73){
        VectorTwentyFour.push(item);
        cont++;
      }
      else if(cont < 76){
        VectorTwentyFive.push(item);
        cont++;
      }
      else if(cont < 79){
        VectorTwentySix.push(item);
        cont++;
      }
      else if(cont < 82){
        VectorTwentySeven.push(item);
        cont++;
      }
      else if(cont < 85){
        VectorTwentyEight.push(item);
        cont++;
      }
      else if(cont < 88){
        VectorTwentyNine.push(item);
        cont++;
      }
      else if(cont < 91){
        VectorThirty.push(item);
        cont++;
      }
    });
  
    const arrayVector = [vectorOne, vectorTwo, vectorThree, vectorFour, VectorFive, VectorSix, VectorSeven, VectorEight, VectorNine, VectorTen];
    return arrayVector;
  }


function criptoCalc(arrayVector, keyArrayVector){
    let arraySolution = [];
    let arraySolution2 = [];

    for(let i = 0; i < arrayVector.length ; i++){
        for(let j = 0; j < keyArrayVector.length ; j++){
            let arrayVal = [];
            let contador = 0;
            while(contador<3){
                arrayVal.push(arrayVector[i][contador] * keyArrayVector[j][contador]);
                contador++;
                if(arrayVal.length == 3){
                  arraySolution.push(arrayVal.reduce((sum, item) => {return sum + item;},0));
                  }
              } 
          }
      }
      arraySolution2 = arraySolution.filter(item => !isNaN(item));
      return arraySolution2;
}
export default textSplit;
export {vector, criptoCalc};