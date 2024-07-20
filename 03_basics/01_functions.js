function loginUserMsg(userName) {
    if(!userName){
        return `${userName} Please Enter UserName`;

    }
    return `${userName} You are logged In`;

}

console.log(loginUserMsg("Devkaran K Vaghasiya"));
console.log(loginUserMsg(false));  

