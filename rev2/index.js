

let data
const getData = async() => {
    try{
      let res = await fetch(`https://fakestoreapi.com/products`)
      data = await res.json()
      append(data)
    }catch(err){
        console.log(err.message)
    }
}
getData()



const append = (data) => {
    let container = document.querySelector(".container")
    container.innerHTML = null;
    console.log(data)
    data.forEach((el,i) => {
        let div = document.createElement("div")
        div.setAttribute("class","items")
        let title = document.createElement("h2")
        title.textContent = el.title;
        let desc = document.createElement("p")
        desc.textContent = el.description;
        desc.setAttribute("id","desc")
        let price = document.createElement("h2")
        price.textContent = `price :  $${el.price}`;
        let image = document.createElement("img")
        image.src = el.image

        let btn = document.createElement("button")
        btn.innerText = "Remove"
        btn.setAttribute("class","r_btn")
        btn.addEventListener("click",function(){
            Remove(i)
        })
        div.append(image,title,desc,price,btn)
        container.append(div)
    })
}

const Remove = (i) => {
    data = data.filter((ele,ind) => {
         return ind !== i
    })
    console.log({"newData":data})
    append(data)
}

const LH = () => {
    let sortData = data.sort(function(a,b){
        return a.price - b.price
    })
    append(sortData)
}

const HL = () => {
   let sortData = data.sort(function(a,b){
        return b.price - a.price
    })
    append(sortData)
}

const search = () => {
    let query = document.querySelector("#query").value
    data = data.filter((el,i) => {
        return el.title.toLowerCase().includes(query)
    })
    append(data)
}