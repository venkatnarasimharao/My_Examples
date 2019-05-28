function check(n,CallBackfnAsAnArgument){
    debugger;
    if(n%2==0){
        CallBackfnAsAnArgument('even');
    }else{
        CallBackfnAsAnArgument('odd');
    }
};
