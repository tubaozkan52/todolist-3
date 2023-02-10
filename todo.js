let inputDOM = document.querySelector("#input")
let eklebtn = document.querySelector("#ekleBtn")
let ulDOM = document.querySelector("#list")






eklebtn.addEventListener("click", addTodo)

function addTodo(e) {
    let todo = inputDOM.value.trim()
    if(todo.length>0) {
        
        addTodoList(todo)
            
        deleteItem()
        
        


        inputDOM.value = ""
    
    }   else {
        $(".error.toast").toast("hide")
    }

    e.preventDefault()


}
function addTodoList(todo) {
    let liDOM = document.createElement("li")
    liDOM.classList.add("Lii")
    liDOM.innerHTML = `${todo}`
    let span = document.createElement("span")
    span.classList.add("close")
    span.innerHTML = `x`

    $(".success.toast").toast("show")
    
    checkLi(liDOM)
    
    


    liDOM.append(span)
    ulDOM.appendChild(liDOM)
    
    //local storage add
    let object = [todo]
    let list = JSON.parse(localStorage.getItem("Todos"))
    if(list) {
        list.push(object)
        localStorage.setItem("Todos", JSON.stringify(list))
    } else {
        localStorage.setItem("Todos", JSON.stringify(object))
    }
      
}


function deleteItem() {
    let deleteItem = document.querySelectorAll(".close")
    if(deleteItem.length>0) {
        deleteItem.forEach(function(x) {
            x.addEventListener("click", function(){
                x.parentElement.remove()
                
            })
            
            
        })
    }
    
    



    
    


}

function checkLi(isaretlendi) {
    isaretlendi.addEventListener("click", function() 
            {  
                if(isaretlendi.classList.contains("checked")) {
                    isaretlendi.classList.remove("checked")
                    
                } else {
                    isaretlendi.classList.add("checked")
                    
                } })
}