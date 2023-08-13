// reducer method
const numbers= [3,5,6,8,9,2,6];
const sum = numbers.reduce((accumulator,currentValue)=> {
    return accumulator+currentValue
},0);
console.log(sum);



//Example


const userCart =[
    {productId:1, productName: "mobile", price:12000 },
    {productId:2, productName: "laptop", price:22000 },
    {productId:3, productName: "tv", price:15000 },
];

const totalAmount = userCart.reduce((totalprice,currentProduct)=>{
    return totalprice+currentProduct.price;
},0)
console.log(totalAmount);

