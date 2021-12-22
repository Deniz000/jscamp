//bu veri başka bir sistemden data olarak gelir. 
let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150}
]

// cart nesnesini tek tek dolaşmaya yarıyor. .map() gezerken de isimlendirme yapıyor.
//(içindeki isim) sepeti.dolaş = cart.map(ürün) map->ççok önemli!!
//birden fazla işlem yapmak istiyorsak {} açar içine yazarız 
cart.map(product=>{
    console.log(product.productName + " : " + product.unitPrice*product.quantity)
})

//acc= akümülatör 
//toplam fiyat hesaplanacak bunun için başlangıç akümülatörüne ihtiyaç var
//bir de product yazıyoruz her bir ürün için, şu 0 kaçtan başlanacak kısmı
//0 + ile uniprice , sonra yeni uniprice .... toplam+= uniprice gibi çalışıyor 
let total = cart.reduce((acc, product) => acc+ product.unitPrice * product.quantity, 0)
console.log(total)
//filter(x) her bir x için, x de cat ın elmanları
let quantityOver2 = cart.filter(product=> product.quantity > 2)
 // uyanları yeni array a ata, quantityOver2 e 

 console.log(quantityOver2)







//ref.tipler push yazınca yukarıdakilerin bellekteki yerlerini değiştirmiyoruz. 
// ama refrasnı değiştirimemiz gerekiyor
function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat Kılıfı", quantity:1, unitPrice:20})
}

addToCart(cart)
console.log(cart)

let sayi = 10

function sayiTopla(number) {
    number+=1
}
sayiTopla(sayi)
console.log(sayi)