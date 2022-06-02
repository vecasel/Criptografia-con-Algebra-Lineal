

const text = document.getElementById("text");
const key = document.getElementById("key");
const decision = document.getElementById("select");


function cifradoHill(){
    const textArray = text.value.toLowerCase().split("");
    const keyArray = key.value.split("");
    const numArray = textSplit(textArray);
    const arrayVector = vector(numArray);
    const keyArrayVector = vector(keyArray);
    let arrayVal = [];
    let arraySolution = [];
    let arraySolution2 = [];
    
    for(i=0;i<arrayVector.length;i++){
      for(j=0;j<keyArrayVector.length;j++){
          arrayVal = [];
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
    console.log(arraySolution2);
}

    

    
   








