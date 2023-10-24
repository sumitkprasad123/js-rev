

async function getData(url){
    try{
      let res = await fetch(`${url}`)
      res = await res.json()
      return res
    }catch(err){
        console.log(err.message)
    }
}

async function append(data,container){

    container.innerHtml = null

    data.forEach(function({title,image}){
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = image;
        let desc = document.createElement("h4")
        desc.innerText = title

        div.append(img,desc)
        container.append(div)
    })
}

export { getData,append }    //name export