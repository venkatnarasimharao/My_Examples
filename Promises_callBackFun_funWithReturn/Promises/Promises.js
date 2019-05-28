
function f1(n){
    return new Promise (function(resolve,reject){
        debugger;
        if (n%2==0){
            resolve('even')
        }
        else{
            reject('odd')
        }
    })
}