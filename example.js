import Broadcast from './Broadcast.js';

        var b = new Broadcast();

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
