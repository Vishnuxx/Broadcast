

function Broadcast() {
    var handlers = [];
    var enabled = true;
 
    this.register = (callback) => {
        if(callback instanceof Function){
          handlers.add(callback);
        }else{
         throw "Can register only callback functions";
        }
        
    }
 
    this.enable = () => {
        enabled = true;
    }
 
    this.disable = () => {
        enabled = false;
    }
 
    this.dispatch = (...args) => {
        for(let callback of handlers) {
            callback(...args);
        }
    }
 }
 
 export default Broadcast;