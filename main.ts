// part 17 // question 21// object// interface

interface item{
    name: string
    price: number
}
// two object
const vegetable: item = {
    name: "aloo",
    price: 100

}
const fruit: item = {
    name: "orange",
    price: 200

}
console.log(`vegetable name ${vegetable.name}, vegetable price: ${vegetable.price}`)
console.log(`fruit name ${fruit.name}, fruit name ${fruit.price} `)