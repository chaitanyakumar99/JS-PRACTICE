const duplicates = [5, 7, 9, 5, 15, 12, 7, 9, 11]


removeduplicates = duplicates.filter((currentvalue, accumulatevalue) => duplicates.indexOf(currentvalue) == accumulatevalue)

console.log(removeduplicates);