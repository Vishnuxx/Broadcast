# Broadcast
Broadcast is an event broadcasting library which can trigger multiple function in single call. Helps in code decoupling and to build scalable modular code.

##Example

 import Broadcast from './Broadcast.js';

        var b = new Broadcasgtit();

        b.register(function(a , b){
            console.log(a+b);
        })
        b.register(function(){
            console.log('vishnu')
        })
        b.register(function(){
            console.log("vishhh")
        })

        b.dispatch(4 , 5);
