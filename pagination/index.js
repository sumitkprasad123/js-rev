let url = "https://jsonplaceholder.typicode.com/comments";
let res = []
const getData = async() => {
    try{
       res = await fetch(`${url}`)
       res = await res.json()
       console.log({"res":res})
       append(0)

    }catch(err){
        console.log(err.message)
    }
}
getData()

const append = (index) => {
    let container = document.querySelector(".container")
    container.innerHTML = null;
    
    let start = index * 10;
    let end = start + 10;
    let data = res.slice(start,end)

    data.forEach((ele,ind) => {
        let p = document.createElement("p")
        p.innerText = `${ele.id} - ${ele.name}`
        container.append(p)
    })

    showButton(index+1)
}

const showButton = (page) => {
    let btn_container = document.querySelector(".btn_container")
    btn_container.innerHTML = null;
    
    let start = 1

    if(page>4){
        start = page - 1
    }

    for(let i=start;i<=start+9;i++){
        let btn = document.createElement("button")
        btn.innerText = i;
        btn.onclick = () => {
            append(i-1)
        }
        btn_container.append(btn)
    }
}