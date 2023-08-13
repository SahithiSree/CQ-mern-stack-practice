//1.Given an array of numbers print the cube of those numbers (map)
let a1 = [1,2,3,4,5];
function cube(x){
   return x**3;
}
const output1=a1.map(cube);
console.log(output1)

//2. Given an array of numbers print the numbers divisible by 3 (filter)
let a2=[3,4,6,9,10];
function multiple(x){
    if(x%3===0){
        return x
    }
}
const output2=a2.filter(multiple)
console.log(output2)
//3. Given an array of numbers print the product of all numbers (reduce)
let a3=[1,2,5,8,10.5,2.9]
const output3=a3.reduce(function(product,curr){
    product=product*curr;
    return product
})
console.log(output3)

//4. Given an array of strings print the length of each string (map)
let str1=['apple','banana','grapes','cherry']
function len(x){
    return x.length;
}
const output4=str1.map(len)
console.log(output4)

//5. Given an array of strings print the strings whose first or last letter is a (filter)
let str2=['apple','banana','grapes','cherry']
function frst(x){
    let l=x.length
    if(x[0]==='a' || x[l-1]==='a'){
        return x
    }
}
const output5=str2.filter(frst)
console.log(output5)

//6. Given an array of strings print the snake case of the strings (reduce) [Assume Small case strings]
const str = 'This is a simple sentence';
const toSnakeCase = (str = '') => {
   const strArr = str.split(' ');
   const snakeArr = strArr.reduce((acc, val) => {
      return acc.concat(val.toLowerCase());
   }, []);
   return snakeArr.join('_');
};
console.log(toSnakeCase(str));

//7. Given an array of numbers find the sum of cubes if the number is divisible by 3
let a4=[1,3,2,6]
const output6=a4.filter(x=>x%3===0).map(x=>x**3).reduce(function(sum,curr){
    sum=sum+curr;
    return sum
})
console.log(output6)

//8. Given an array of strings print the sum of lengths if the characters in the string are odd
let str3=['apple','banana','grapes','cherry']
const output7=str3.reduce(function(sum1,curr){
    sum1=sum1+curr.length
    return sum1
},0)
console.log(output7)