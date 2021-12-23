//niye model diyouruz: aslında componnentlerimizde kullanıcıya
//gösterdiğimiz veri tiplerinin veya kullanıcıdan alıp api ye
//gönderdiğimiz genel isim 
export default class User {
    //prototyping
    // api(veri kaynağından) user gelecek ve biz bunu 
    //karşılayacak br obje oluşturuyoruz. ! 
    //bu hareketi prototayping ille yapıyoruz
    //aslında constructor funksiyona bu değerleri eklemiş oluyoruz. 

    constructor(id, firstName, lastName, city) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
    }
}