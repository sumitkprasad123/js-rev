// constructer function
function Student(n,c,u,i,b){
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `web-${b}`;
}

function studentData(e){
    e.preventDefault()
    let form = document.querySelector("form")
    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;

    let student = new Student(name,course,unit,image,batch)
    console.log({"student":student})

    // local storage with key student
    let data = JSON.parse(localStorage.getItem("student")) || []
    data.push(student)
    localStorage.setItem("student",JSON.stringify(data))

}

