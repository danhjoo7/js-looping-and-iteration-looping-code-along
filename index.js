const names = ["Ada", "Brendan", "Ali"];

function writeCards(names, event) {
    let messages = [];
    for(let i=0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages
}

// console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
console.log(writeCards(names, "birthday"));


function countDown(integer) {
    while(integer>=0) {
        console.log(integer)
        integer--
    }
}

countDown(7)