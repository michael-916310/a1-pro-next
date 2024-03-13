
const moveZeroToEnd = (value) => {
    let count =0

    for (let i =0; i<value.length ; i++) {
        if (value[i]===0) {
            count++;
            continue;
        }

        if (count>0 && i-count>=0) {
            value[i-count] = value[i];
        }
    }

    for (let j = value.length-1; j>=value.length-count; j--) {
        value[j]=0;
    }
    return value;
}


console.log(`moveZeroToEnd([])`, moveZeroToEnd([]))
console.log(`moveZeroToEnd([0,'0',23,22])`, moveZeroToEnd([0,'0',23,22]));
console.log(`moveZeroToEnd([0,'0',0,23,22])`, moveZeroToEnd([0,'0',0,23,22]));
console.log(`moveZeroToEnd([0,0,0,0])`, moveZeroToEnd([0,0,0,0]));
console.log(`moveZeroToEnd([1,[],0,6,"d",()=>{},4])`, moveZeroToEnd([1,[],0,6,"d",()=>{},4]))
console.log(`moveZeroToEnd([1,2,0,6,"d",()=>{},0])`, moveZeroToEnd([1,2,0,6,"d",()=>{},0]));
console.log(`moveZeroToEnd([1,2,0,6,0,0,0])`, moveZeroToEnd([1,2,0,6,0,0,0]))

