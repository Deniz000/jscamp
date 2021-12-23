export class BaseLogger{
    log(data, logType){
        console.log("default logger : " + data)
    }
}
export class ElasticLogger extends BaseLogger{
    //base class daki log u ezdik 
    log(data){
        console.log("Logged to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo" + data)
    }
}
