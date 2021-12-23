//ekranımız gibi düşünebiliriz

import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js" // ..  demek bulunduğum
//klasörden bir üst klasöre git. src deki service lerin altına 
//userService ye git. js yi eklemeyi Unutma !! 
// userervice de default demeseydik {} içerisinde fonk. adlarını yamamımz gerekecekti

console.log("User Component yüklendi!")
// kullanıcıları listelemek isteyebilirim.

// ama. ekleme yapabilmek, ekleme yapabilmek için ilgili metot bu sınıfın içinde
let logger1 = new MongoLogger()
let userService = new UserService(logger1)

//nesne lazım onu da şu şekilde oluşturum : 
let user1 = new User(1, "Engin", "Demiroğ", "Ankara")
let user2 = new User(1, "Deniz", "Ozdemir", "Adana")
// new lenince constructor çalışır
//şimdi userService içindekii add fon.'a add() geçtim  
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))

userService.getById(1)
userService.list()

let customer = {id:1, firstName:"Engin"}
customer.lastName = "Demiroğ"
//sonradan değer eklenebiliyor js de ve buna da prototyping denir
