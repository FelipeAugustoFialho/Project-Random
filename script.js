function generateNumber() {
   const min = Math.ceil(document.querySelector('.input-min').value)
   const max = Math.floor(document.querySelector('.input-max').value)
   
   const result = Math.floor(Math.random() * (max - min + 1)) + min;
       
   alert (result)
}

                /*FUNÇÃO ORIGINAL */
/*
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/ 