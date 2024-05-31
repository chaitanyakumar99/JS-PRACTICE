// ascending order

numbers=[5,9,2,100,40,1,6]   // lowest to highest
numbers.sort((a,b)=>a-b)
console.log(numbers);

// descending order

  numbers=[100,600,800,500]   // highest to lowest
  numbers.sort((a,b)=>b-a)
  console.log(numbers);


// remove the duplicates

const dupliactes=[9, 4, 9, 1, 4, 6, 7, 2, 1, 6]

removeDuplicates=dupliactes.filter((currentvalue,acumalativevalue)=>dupliactes.indexOf(currentvalue)==acumalativevalue)
console.log(removeDuplicates);