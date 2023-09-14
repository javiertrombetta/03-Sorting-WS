function split(wholeArray) {  
  let middle = Math.ceil(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, middle);
  let secondHalf = wholeArray.slice(middle);
  return [firstHalf, secondHalf];
}

function merge(arrIzq, arrDer) {
  let nuevoArray = [];
  let punteroIzq = 0;
  let punteroDer = 0;

  while (punteroIzq < arrIzq.length && punteroDer < arrDer.length)
  {
    if (arrIzq[punteroIzq] <= arrDer[punteroDer])
    {
      nuevoArray.push(arrIzq[punteroIzq]);
      punteroIzq++;
    } 
    else
    {
      nuevoArray.push(arrDer[punteroDer]);
      punteroDer++;
    }
  }
  while (punteroIzq < arrIzq.length)
  {
    nuevoArray.push(arrIzq[punteroIzq]);
    punteroIzq++;
  }
  while (punteroDer < arrDer.length)
  {
    nuevoArray.push(arrDer[punteroDer]);
    punteroDer++;
  }
  return nuevoArray;
}

function mergeSort(array) {
  if (array.length <= 1)
  {
    return array;
  }
  let [arrIzq, arrDer] = split(array);
  return merge(mergeSort(arrIzq), mergeSort(arrDer));
}