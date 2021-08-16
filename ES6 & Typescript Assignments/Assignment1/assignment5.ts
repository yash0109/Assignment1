//5.a question
var add = () => 17; 

//5.b question
function userFriends(username: string, ...friends: Array<string>){
    console.log("username: ",username);
    console.log("friends: ",friends);
}

userFriends('Vamshi','Vaishnavi','SK','Revati','Tejas','Manav');


//5.c question
function capitals(...names: Array<string>){
    console.log();
    for(let i in names)
        console.log(names[i].toUpperCase());
}

capitals('Vamshi','Vaishnavi','SK','Revati','Tejas','Manav');
