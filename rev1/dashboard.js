append()

function append(){
    let data = JSON.parse(localStorage.getItem("student")) || []

    let container  = document.querySelector("#container")
    container.innerHTML = null

    data.forEach((ele,i) => {
        let div = document.createElement("div")
        div.setAttribute("class","items")

        let name = document.createElement("h2")
        name.innerText = ele.name;
        let course = document.createElement("h3")
        course.innerText = `course : ${ele.course}`;
        let unit = document.createElement("h3")
        unit.innerText = `unit : ${ele.unit}`;
        let image = document.createElement("img")
        image.src = ele.image;
        let batch = document.createElement("h3")
        batch.innerText = ele.batch
        let btn = document.createElement("button")
        btn.innerText = "Delete"
        btn.addEventListener("click",function(){
            Delete(i)
        })

        div.append(image,name,course,unit,batch,btn)
        container.append(div)
    })
    
// deleteing the unique element
function Delete(i){
        let data = JSON.parse(localStorage.getItem("student")) || []
        let new_data = data.filter((el,ind) => {
            if(i === ind){
                let trash = JSON.parse(localStorage.getItem("trash")) || []
                trash.push(el)
                localStorage.setItem("trash",JSON.stringify(trash))
            }else{
                return i !== ind
            }
        })
        console.log(new_data)
        localStorage.setItem("student",JSON.stringify(new_data))
        append()
        calculate()
    }
}

// calculate the students with batch
function calculate(){
    let student = JSON.parse(localStorage.getItem("student")) || []
    let obj = {}

    for(let i=0;i<student.length;i++){
        if(obj[student[i].batch] == undefined){
            obj[student[i].batch] = 1 
        }else{
            obj[student[i].batch]++
        }
    }
    localStorage.setItem("batch",JSON.stringify(obj))

    let batch = JSON.parse(localStorage.getItem("batch")) || []
    let navbar  = document.querySelector("#navbar")
    let b = "";
    for(let key in batch){
        b+=key+"-"+batch[key]+", "
    }
    navbar.innerText = b
}

calculate()