const select =document.querySelectorAll('select');
const select_two =document.querySelectorAll('select-two');
const hi=document.getElementById("hi");
const tbody=document.getElementById('tbody');


select_two.forEach(e=>{
    e.onchange=()=>{
        hi.innerText=item.value;
    }
})

select.forEach(item=>{
    item.onchange=()=>{
        console.log(item.value);
        hi.innerText=item.value;
    }
})
function keyup(){
    let keyup=document.getElementById('keyup');
    hi.innerText=keyup.value;
}
