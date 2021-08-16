//7.a question
let array = [1,2,3,4];
let [ele1, ele2, ele3, ele4] = array;
console.log("3rd element: ",ele3);
console.log("----------------------------------------------------");

//7.b question
var organization = {
    nameObj: "Capgemini",
    address: { country: "India", pincode: 440012}
}
let {nameObj, address: a} = organization;
console.log("deep match destructured pincode: ",a.pincode);