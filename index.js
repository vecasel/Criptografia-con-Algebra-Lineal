
function cifradoHill(array, array2){

    let arrayVal = [];
    let arraySolution = [];
    
    for(i=0;i<array2.length;i++){
        for(j=0;j<array.length;j++){
            arrayVal = [];
            let contador = 0;
            while(contador<3){
                arrayVal.push(array[j][contador] * array2[i][contador]);
                contador++;
                if(arrayVal.length == 3){
                  arraySolution.push(arrayVal.reduce((sum, item) => {return sum + item;},0));
                }
    
            }
          
        }
    }
      return arraySolution;
    
    }
    
    
    
    const array = [[3,2,1],[0,1,1],[1,1,2]];
    const array2 = [[3,1,19],[9,12,12],[5,18,15],[1,14,1]];
    
    cifradoHill(array, array2)








