var mail=".sahithi@gamil.com";
var At=mail.indexOf("@");
let spChars = /[!#$%^&*()+\=\[\]{};':"\\|,.<>\/?]+/ ;
let dots='..'
if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
    console.log("Valid");

}
else{
    console.log("Not Valid");
}

// if (At === -1 || At===0){
//     console.log("Not valid");

// }
// else if(spChars.test(mail)){
//     console.log("Not valid");
// }
// else if(dots.test(mail)){
//     console.log("Not valid");
// }
// else if (mail[At +1] === '.'){
//     console.log("Not valid");

// }
// else if(mail[0] === '.'){
//     console.log("Not valid");

// }
