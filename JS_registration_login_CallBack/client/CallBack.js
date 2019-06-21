function sendReq(m,u,d,cb){
    var httpObj=new XMLHttpRequest();
    httpObj.open(m,u,true);
    httpObj.setRequestHeader('Content-type','application/json');
    // When receiving data from a web server, the data is always a string.

    // Parse the data with JSON.parse(), and the data becomes a JavaScript object.

    httpObj.send(JSON.stringify(d));
    httpObj.onload=function(){
        var res=httpObj.responseText;
        cb(res);
    }
    httpObj.onerror=function(){
        alert('something went wrong');
    }
}