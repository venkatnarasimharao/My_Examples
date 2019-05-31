function sendRequest(url){
    return new Promise(function (resolve, reject){
        var obj=new XMLHttpRequest();
        obj.open('get',url,true);
        obj.send();
        obj.onload=function(){
            debugger;
            var res=obj.responseText;
            resolve(res);
        }
        obj.onerror=function(){
            debugger;
            reject(res);
        }
    });
};