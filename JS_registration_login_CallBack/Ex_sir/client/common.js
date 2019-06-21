function sendReq(m,u,d,cb){
    var httpObj=new XMLHttpRequest();
    httpObj.open(m,u,true);
    httpObj.setRequestHeader('Content-type','application/json');
    httpObj.send(JSON.stringify(d));
    httpObj.onload=function(){
        var res=httpObj.responseText;
        cb(res);
    }

    httpObj.onerror=function(){
        alert('something went wrong');
    }

}