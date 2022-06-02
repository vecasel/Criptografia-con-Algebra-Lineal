import textSplit, {vector, criptoCalc} from "./functions.js";

const text = document.getElementById("text");
const key = document.getElementById("key");
const decision = document.getElementById("action");
const enviar = document.getElementById("button");


enviar.addEventListener("click", () => {
  const textArray = text.value.toLowerCase().split("");
  const keyArray = key.value.split("");
  const numArray = textSplit(textArray);
  const arrayVector = vector(numArray);
  const keyArrayVector = vector(keyArray);
  if(decision.value == 'encrypt'){
    document.getElementById("output").innerHTML = criptoCalc(arrayVector, keyArrayVector).join(" - ");
  }
  document.getElementById("form__container--output").style.display = "flex";

});
  


    

    
   








