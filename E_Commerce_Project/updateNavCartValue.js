

let navCartValue = document.querySelector("#navCartValue")
export const updateNavCartValue = (dataFromLocalStorage)=>{

 return (navCartValue.innerText = dataFromLocalStorage.length);

}