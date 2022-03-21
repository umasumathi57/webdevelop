let arr=["sriumadevi",'B',"BE",1091,90.9]

const show=()=>
{
    alert(arr)
   
}

// const show=()=>
// {
//     var sum=""
//     arr.map((s)=>
//     {
//         sum=sum+s
//     })
//     document.getElementById("list").innerHTML=sum
// }
function del()
{
let d=prompt("enter the pos to be delete")
arr=arr.filter((data,index)=>

{
    return data!==arr[d]
}
)
show();
}

const update=()=>
{
    let u=document.getElementById("store").value;
    let u1=prompt("Enter the new data to be update")
    arr[u]=u1;
    show();

}
const add=()=>
{
    var a=document.getElementById("store").value
    arr.push(a)
    show();
}


