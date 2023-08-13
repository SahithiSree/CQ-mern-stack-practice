
let n = 4;
var num=n
function pyramid(n){
  let  no=n
for (let i = 1; i <= n; i++) { //outer loop (n)
  let str2 = "";   
    for (let j = 1; j <=no; j++) { //inner loop no. of spaces or '.'
      str2 = str2 + '.'; 
    } 
    no--;

    for (let k = 1; k <= i; k++) {  //inner loop pattern '0.'
      str2 = str2 + '0'; 
      str2=str2+'.'
    
    }
    for (let j = 1; j <=no; j++) {  //inner loop no. of spaces or '.'
      str2 = str2 + '.'; 
    } 
    
    console.log("\n")
    console.log(str2); 
  } 
}
function inversePyramid(n){
  for (let i = n; i >= 1; --i) { 
    let str1 = "";   
      for (let j = 0; j <=num-i; ++j) { 
        str1 = str1 + '.'; 
        
      } 
      
      for (let k = i; k >= 1; --k) { 
        str1 = str1 + '0'; 
       if (k!=1){
         str1=str1+'.'
       }
      }
      for (let j = 0; j <=num-i; ++j) { 
        str1 = str1+ '.'; 
      } 
      
      console.log("\n")
      console.log(str1); 
    } 

}
function rohmbus(n){
  let  no=n
  for (let i = 1; i <= n; i++) { 
      let str = "";   
        for (let j = 1; j <=no; j++) { 
          str = str + '.'; 
        } 
        no--;
    
        for (let k = 1; k <= i; k++) { 
          str = str + '0'; 
          str=str+'.'
        
        }
        for (let j = 1; j <=no; j++) { 
          str = str + '.'; 
        } 
        
        console.log("\n")
        console.log(str); 
      } 
      for (let i = n-1; i >= 1; --i) { 
            let str1 = "";   
              for (let j = 0; j <=num-i; ++j) { 
                str1 = str1 + '.'; 
                
              } 
              
              for (let k = i; k >= 1; --k) { 
                str1 = str1 + '0'; 
               if (k!=1){
                 str1=str1+'.'
               }
              }
              for (let j = 0; j <=num-i; ++j) { 
                str1 = str1+ '.'; 
              } 
              
              console.log("\n")
              console.log(str1); 
            } 

}

pyramid(n)
inversePyramid(n)
rohmbus(n);


