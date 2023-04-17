let newarray = posts.map(function(value,index){

    let myarray = Comments.filter(function(a,b){

        return a.userId == value.id;
    })

    value["Comments"] = myarray;
    return value;
})

console.log (newarray)