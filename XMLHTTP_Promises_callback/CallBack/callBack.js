function sendReq(url,cb){
    var obj=new XMLHttpRequest();
    obj.open('Get' ,url,true);
    obj.send();
    obj.onload=function(){
        debugger;
        var res=obj.responseText;
        cb(res);
    },
    obj.onerror=function(){
        debugger;
        console.log('error.........');
    }

}