const disply=()=>{
arr={"temp": ["Zoho","Hcl","Tcs"]}
localStorage.setItem("list",JSON.stringify(arr))
document.write("Company name will be display soon!")
//alert("Company name will be display soon!")
}



const insert=()=>{

    var mom=document.getElementById("user").value
    var perm= localStorage.getItem("list")
    //console.log(perm)
    alert(perm)
    var store=JSON.parse(perm)
    //alert(store)
    alert (store["list"]+"pre add")

     store["temp"].push(mom)
    alert(store["list"]+"post Add")
     localStorage.setItem("list",JSON.stringify(store))
    //document.write(mom+"added")
    alert(mom+"added finally")

}


// const insert=()=>{
//     let hi=document.getElementById("user").value
//     var tmp=localStorage.getItem("menu")
//     console.log(tmp)
//     var yet=JSON.parse(tmp)
//     alert(yet)
//     alert(yet["foods"]+" before push")
//     yet["foods"].push(hi)
//     alert(yet["foods"]+" after push")
//     localStorage.setItem("menu",JSON.stringify(yet))
//    // alert(hi+" has added to the menu")
