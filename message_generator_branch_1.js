// this is a message generator. each time of output will be a ramdom message.
//  the messages should all consist of" You would like to does what at where. "
// "You would like to " is unchanged part. the changed part are do. what, at where.
// so there are three arrays for each aspect which contains several different words.
// meanwhile there is a function acting as a generator for each part in the sentence which outputs random word each time program runs.
// finally, within the function, there is combinator to concatenate the string (words) together, then to output the sentence.
// code starts below
const doArr = ['live with', 'ride on','eat','fight with','swallow','cook','walk with','speak','sit on','lift','slap','foster','learn from','sing to','play with','dance with','wrestle with','sleep with','clean','rub yourself against','huddle with','laugh with'];
const whatArr = ['icecream','an horse','a sheep','a chair','grapes','iphone','mashmallow','a panda','a cat','a dog','a gorilla','an elephant','a tiger','a hippo','a bear','a penguin','a camel','patrick star','micky mouse','donald duck','pikachu','bunny','sponge bob'];
const atWhereArr = ['at park', 'in cinema', 'at home', 'on the street', 'on a plane', 'on a boat', 'in the sea', 'at beach', 'at Disneyland', 'on mountain', 'at Everst', 'in forest', 'on the moon', 'in desert','on clouds','amidst sharks'];
const categoryArr = [doArr, whatArr, atWhereArr];

const ramdomWord = array => {
    let randomIndex = Math.floor(Math.random() * array.length);
    let wordOfIndex = array[randomIndex];
    return wordOfIndex;
}

const ramdomMessage = () => {
    const msgObj = 'You would like to';
    const msgContentArr = [];
    for (let i = 0; i < categoryArr.length; i++) {
        let msgContent = ramdomWord(categoryArr[i]);
        msgContentArr.push(msgContent);
    }
    return console.log(`${msgObj} ${msgContentArr[0]} ${msgContentArr[1]} ${msgContentArr[2]}.`)
}

ramdomMessage();






