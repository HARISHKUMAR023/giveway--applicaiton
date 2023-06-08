const enterinput=document.getElementById('getinput');
const submitbutton=document.getElementById('btn');
const addetter=document.querySelectorAll('div')
console.dir(addetter)
function addtextes(){
    const mycontent = document.createElement('p')
    mycontent.innerHTML=enterinput.value
    addetter.forEach((div) => {
        div.appendChild(mycontent.cloneNode(true));
      });
}
submitbutton.addEventListener('click',addtextes)

const myobj=[1,2,3,4,5]
myobj.forEach((item,index) => {
    console.log(item,index)
});