# Broadcast
Broadcast is an event broadcasting library which can trigger multiple function in single call. Helps in code decoupling and to build scalable modular code.

## Usage

     .register( callbackfunction )  => registers a function
     .enable()                      => listens the trigger for dispatch
     .disable()                     => stops listening for dispatch
     .dispatch()                    => triggers the registered functions

## Example

 import Broadcast

        var b = new Broadcast();

        b.register(function(a , b){
            console.log(a+b);
        })
        b.register(function(){
            console.log('vish')
        })
        b.register(function(){
            console.log("vishnuxx")
        })

        b.dispatch(4 , 5); //triggers all function which are registered
