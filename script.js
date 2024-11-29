
function dataSubmit(){
    const name=document.getElementById("name").value.trim();
    const pass=document.getElementById("pass").value
    const conpass=document.getElementById("conpass").value
    const error=document.getElementById("er");
    error.textContent=""; //clear previous message
    const n_p=/[A-Za-z ]$/;
if(!n_p.test(name)){
    error.textContent="name must be more then 3 char";
    return false;
}
const p_p=/[a-zA-Z0-9#@]{8,15}$/;
if(!p_p.test(pass)){
    error.textContent="check the password pattern";
  

if(pass!==conpass ){
    error.textContent="password not matched";
    
}

}}