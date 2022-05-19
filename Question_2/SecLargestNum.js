const SecondLargestNum = (arr) =>
{
    const num = Math.max(...arr)
    arr.splice(arr.indexOf(num), 1);
    const second = Math.max(...arr)
    
  return console.log(second)
}

SecondLargestNum([3, 7, 8, 90, 0, 99, 87, 900])