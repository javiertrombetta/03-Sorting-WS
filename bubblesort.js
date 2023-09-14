function bubbleSort(array) {
  let isSwapped;
  do
  {
    isSwapped = false;
    for (let i = 0; i < array.length - 1; i++)
    {
      if (array[i] > array[i + 1])
      {
        swap(array, i, i + 1);
        isSwapped = true;
      }
    }
  } 
  while (isSwapped);
  return array;
}

function swap(arr, i1, i2)
{
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}