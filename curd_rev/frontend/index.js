
let url = "http://localhost:3000/todos" ;

window.addEventListener("load",() => {
    getData()
})

const getData= async() => {
   try{
      let data = await fetch(`${url}`)
      data = await data.json()
      console.log({"data":data})
      renderTodo(data)
   }catch(err){
    console.log(err.message)
   }
}


const renderTodo = (data) => {
    let container = document.querySelector(".container")
    container.innerHTML = null;

    data.forEach((e,i) => {
        let div = document.createElement("div")
        div.setAttribute("class","items");
        let title = document.createElement("h3")
        title.innerText = e.title;
        let status = document.createElement("h3")
        status.innerText = e.status;
        // remove
        let btn = document.createElement("button")
        btn.innerText = "Remove"
        btn.addEventListener("click",function(){
            Remove(e.id)
        })
        // Toogle
        let toggle_btn = document.createElement("button")
        toggle_btn.innerText = "Toggle";
        toggle_btn.onclick = () => {
           Toggle(e.id)
        }

        div.append(title,status,btn,toggle_btn)
        container.append(div)
    })
  }

    // For Toggleing the perticular Data
    const Toggle = async(id) => {
        let res = await fetch(`${url}/${id}`)
        res = await res.json()
        console.log({"res":res})
        let status ={status: !res.status}

         await fetch(`${url}/${id}`,{
            method:"PATCH",
            body:JSON.stringify(status),
            headers:{
                "Content-Type":"application/json"
            }
        })
        getData()
    }

    // For deleting the perticular Todo
    const Remove = async(id) => {
        let res = await fetch(`${url}/${id}`,{
            method:"DELETE"
        })
        getData() ;
    };
    
    // For adding the Todo items
    const addTodo = async() => {
        let todo = document.querySelector("#todo").value

        let newTodo = {
            title:todo,
            id:Date.now()+todo,
            status:false
        }

        let res = await fetch(`${url}`,{
            method:"POST",
            body:JSON.stringify(newTodo),
            headers:{
                "Content-Type":"application/json"
            }
        });
        getData()
    }


