// 1. Destructure the name and password from
// {  name: 'career', password: 'admin@123', hostname:'careerquotient', client: 'chrome' }
const user={  
    name: 'career', 
    password: 'admin@123', 
    hostname:'careerquotient',
     client: 'chrome' 
    }
const { name, password } = user;
console.log( name , password)

// 2. Destructure the pincode and rename to pin
// {  name: 'career', address: {  pincode: 123456}  }
const details={  
    name: 'career', 
    address: {  pincode: 123456} 
 }
const {address}=details;
const{address:{pincode:pin}}=details;
console.log(pin);

// 3. Destructure the first value and second value of the array
// [ 100, 200, 500, 600 ]
let arr1=[ 100, 200, 500, 600 ];
let [fisrtvalue,secondvalue]=arr1;
console.log(fisrtvalue,secondvalue);


// 4. Destructure to get the value 50 from this array
// [ 100, [  50, 60, 70  ]   ]
let arr2=[ 100, [  50, 60, 70  ]  ];
let [,tens]=arr2;
let[ones]=tens
console.log(ones)

// 5. Destructure to get the value 2,3 into a new array
// [  1, {  
//      arr: [ 1, 2, 3 ]
//    }
//  ]
let arr3=[  1, {  
    arr: [ 1, 2, 3 ]
  }
]
let[,one]=arr3;
const{arr:[,two,three]}=one
let new_arr=[two,three]
console.log(new_arr);



