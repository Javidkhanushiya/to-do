
let inputbtn = document.querySelector("#inputbtn")


inputbtn.addEventListener("click", () => {

  const taskInput = document.getElementById("todoinput").value;
  const tasklistul = document.querySelector(".tasklistul");
  const makeli = document.createElement("li");

  tasklistul.appendChild(makeli);
  makeli.textContent = taskInput;
  document.getElementById("todoinput").value = "";
  remove(makeli)
  underline(makeli)

  // underline(makeli)

  console.log("Task added:", taskInput);
});


// rmove function 

function remove(makeli) {

  let diletbtn = document.createElement("button")
  diletbtn.textContent = "dilet"
  diletbtn.classList.add("btn")
  makeli.appendChild(diletbtn)

  diletbtn.addEventListener("click", () => {
    makeli.remove()
  })

}





function underline(makeli) {
  let underlineitem = document.createElement("button")
  underlineitem.textContent = "under line"
  underlineitem.classList.add("btn")

  makeli.appendChild(underlineitem)

  underlineitem.addEventListener("click", () => {
    makeli.classList.add("line-on-text")
  })
}




// chang body input

let changinput = document.querySelector("#chang-body-color")

let body = document.querySelector("body")

// console.log(changinput);


changinput.addEventListener("input" , () => {
  let colorvallu = document.querySelector("#chang-body-color").value;

  console.log(colorvallu)
  
  body.style.backgroundColor = colorvallu;
})



