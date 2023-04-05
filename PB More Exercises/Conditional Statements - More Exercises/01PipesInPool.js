function pipesInPool(input) {
    let capacity = Number(input[0]);
    let pipe1 = Number(input[1]);
    let pipe2 = Number(input[2]);
    let time = Number(input[3]);
    let isOverflow = pipe1 * time + pipe2 * time;
 
    if (isOverflow <= capacity) {
        let percentFull = Math.trunc(isOverflow / capacity * 100);
        let p1ToPercent = ((pipe1 * time / isOverflow) * 100);
        let p2ToPercent = ((pipe2 * time / isOverflow) * 100);
        console.log(`The pool is ${percentFull.toFixed(2)}% full. Pipe 1: ${p1ToPercent.toFixed(2)}%. Pipe 2: ${p2ToPercent.toFixed(2)}%.`);
    } else if (isOverflow > capacity) {
        let diffFullOver = (isOverflow - capacity).toFixed(1);
        console.log(`For ${time} hours the pool overflows with ${diffFullOver} liters.`);
    }
}

pipesInPool([ "1000", "100", "120", "3" ]);