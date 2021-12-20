function addToCart(quantity, productName = "Elma"){
    console.log("Sepete Eklendi " + productName + " ve " + quantity +" tane")
}

//addToCart()
addToCart(10)
//addToCart(15)

let dolarDun = 5
let sayHello = ()=>{
     console.log("Hello World!")
}
sayHello()
let sayHello2 = function(){
    console.log("hello w. 2")
}
sayHello2()

function adToCard2(productName, quantity, unitPricee){

}
//Bu kısımda hangisi quantity di hangisi adtti karışırdık bunu çömek 
//alttakini yapıcaz
addToCart3("Elma", 5, 10)

//kapsülledik, bi kapsüle koyduk
let product1 = {productName:"Ema", unitPrice:10, quantity:5}
//kapsülden çıkardık
function addToCart3(product1) {
    console.log("ürün: " + product1.productName 
    + " Adedi : " + product1.quantity + " fiyatı : " + product1.unitPrice)
}
addToCart3(product1)

let product2 = {productName:"Ema", unitPrice:10, quantity:5}
let product3 = {productName:"Ema", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)

function addToCart4(x) {
    console.log(products) // products tanımlanmadığı için bi st scops'da
    //bir üst scop da aşağıdaki let ile başlayan 
}
// ürünler listesi gelir bize 
let products = [
    {productName: "ELma", uniProce:10, quantity:5},
    {productName: "Kavun", uniProce:10, quantity:5},
    {productName: "Karpuz", uniProce:10, quantity:5},
]
addToCart4(products)

// rest js de params işlmmi ...x ile yapılır
// function add(num1, num2) {
    //     console.log(num1 + num2)
    // }

    function add2(...numbers) { // rest OPERATÖRÜ deniliyor, ikinci prmetre alacaksa sona rest yazılır!
        let total = 0
        for (let i = 0; i < numbers.length; i++) {
            total += numbers[i]
        }
        console.log(total)  
    }
    // add2(10)
    // add2(10, 20)
     add2(10, 30, 40)
     
     let numbers2 = [20,14,43,57,86]
     console.log(Math.max(...numbers2))
     
     let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
        {name: "İç Anadolu", populationn: "20M"},
        {name: "marmara", populationn: "30M"},
        {name: "karadeniz", populationn: "10M"},
        [
            ["Ankara", "Konya"],
            ["İstanbul", "Bursa"],
            ["Sinop", "Trabzon"],
        ]
        ]
 
     console.log(icAnadolu.name)
     console.log(marmara.populationn)
     console.log(icAnadoluSehirleri)

     let newProductName,newUitPrice, newQuantity // üç değişken tanımladım
     //aşağıda da nesne var 
     //soldakini sağdakine ata çağırılınca new li olan çağırılıyor
     ({productName:newProductName, unitPrice:newUitPrice, quantity:newQuantity}
     = {productName: "Kavun", unitPrice:10, quantity:5})

     console.log(newProductName)
     console.log(newQuantity)
     console.log(newUitPrice)