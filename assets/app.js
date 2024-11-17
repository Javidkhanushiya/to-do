
let inputbtn = document.querySelector("#inputbtn")


inputbtn.addEventListener("click", () => {

  const taskInput = document.getElementById("todoinput").value;
  const tasklistul = document.querySelector(".tasklistul");
  const makeli = document.createElement("li");

  tasklistul.appendChild(makeli);
  makeli.textContent = taskInput;
  document.getElementById("todoinput").value = "";
  remove(makeli)

  // underline(makeli)

  console.log("Task added:", taskInput);
});


// rmove function 

function remove(makeli) {

  let diletbtn = document.createElement("button")
  diletbtn.textContent = "dilet"
  diletbtn.classList.add("btn")
  makeli.appendChild(diletbtn)

  diletbtn.addEventListener ("click" , () => {
    makeli.remove()
  })

}



  let underlineitem = document.createElement("button")
// underlineitem.addEventListener ("click" , () => {
//   underline(makeli)
// })

function underline (makeli) {
  underlineitem.textContent = "under line"
  underlineitem.classList.add("btn")
  makeli.classList.add("line-on-text")
    makeli.appendChild(underlineitem)
}


