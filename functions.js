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
    console.log(numArray);
    return numArray;
  }
  
  function vector(array){
    let cont = 1;
    let vectorOne = [], vectorTwo = [], vectorThree = [], vectorFour = [], VectorFive = [], VectorSix = [], VectorSeven = [], VectorEight = [], VectorNine = [], VectorTen = [];
  
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
    });
  
    const arrayVector = [vectorOne, vectorTwo, vectorThree, vectorFour, VectorFive, VectorSix, VectorSeven, VectorEight, VectorNine, VectorTen];
    return arrayVector;
  }

console.log("Prueba")
export default textSplit;
export {vector};