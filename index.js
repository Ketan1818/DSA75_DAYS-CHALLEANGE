// DSA DAY1
//factorial of n
function factorial(n){
   fac=1;
   for(let i=1;i<=n;i++){
    fac *=i;
    console.log(fac)
   }
}
console.log(factorial(5))

//prime number
function primeNum(n){
    for(let i=2;i<n;i++){
        if(n % i ===0)
            return false;
    }
    return true;
}
console.log(primeNum(4));

//dublicate in array
function Dublicate(arr){
    let sam=[]
    for(let i=1; i<arr.length; i++){
        let num=arr[i];
        if(sam.includes(num)){
            console.log(`dublicate elsement ${num}`)
        }else{
            sam.push(num)
        }
    }
}
let arr=[1,2,3,4,3]
console.log(Dublicate(arr))

//if dublicate false else true (PYTHON)

// class Solution:
//     def containsDuplicate(self, nums: List[int]) -> bool:
//         hashset = set()

//         for n in nums:
//             if n in hashset:
//                 return True
//             hashset.add(n)
//         return False


//FIND MAX AND MIN NUMBER IN AN ARRAY

function a(arr){
    let max=arr[0]
    let min =arr[0]
    
    for(let i=1;i<arr.length;i++){
        if(arr[i] > max){
           
            max=arr[i]

        }else if(arr[i] < min) {
            
            min=arr[i]

        }
    }
 return [max, min]
}

let arr =[1,2,3,4,5,2,12]
console.log(a(arr))
