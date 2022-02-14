
mybutton=(e)=>{
    e.preventDefault();
    console.log(e.target)
let destination=document.getElementById('aboutdiv');
console.log(destination)
destination.scrollIntoView({behavior:'smooth'})
 }
 mybutton2=(e)=>{
e.preventDefault();
let destination=document.getElementById('portfiodiv');
destination.scrollIntoView({behavior:'smooth'})
 }
 mybutton3=(e)=>{
     e.preventDefault();
     let destination=document.getElementById("contact");
     destination.scrollIntoView({behavior:'smooth'})
 }
 filedownloader=(e)=>{
e.preventDefault();
window.location.href="./shah.doc";
 }