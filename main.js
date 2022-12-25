//1.
let myStr ='abcadeecfb';
myStrArr= myStr.split('');

for(let i = 0 ; i <myStrArr.length ; i++){
    for(let j =i+1 ; j<myStrArr.length ; j++){
        if(myStrArr[i] === myStrArr[j]){
          myStrArr.splice(j, 1);
        }
    }    
}
myStr = myStrArr.join("");

console.log('After Deletion : ',myStr);


//2.
console.log("Question 2 : ");

let myStr2 ='abcadeecfb';

for(let i = 0 ; i < myStr2.length ; i++){
    count = 1;
    for(let j = i + 1 ; j < myStr2.length ; j++){

        if(myStr2[i] === myStr2[j]){
            count = count + 1;
            console.log(`${myStr2[i]} = ${count}`);
        }
        else if (myStr2.indexOf(i) === myStr2.lastIndexOf(i)){
            console.log(`${myStr2[i]} = ${count}`);
        }
        

    }
}