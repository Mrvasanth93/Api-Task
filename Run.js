
 = 'https://jsonplaceholder.typicode.com/comments'
let Name = [];
let Email = [];
let Content = [];
let size = Number(0);
let parent = document.getElementById("parent");
fetch(link)
.then((response)=>{return response.json()})
.then((msg)=> details(msg));
function details(msg){
    for (let i = 0; i <31; i++) {
        let detail = Object.entries(msg);
        Name[i] =  detail[i][1].name;
        Email[i] = detail[i][1].email;
        Content[i] = detail[i][1].body;
    }
    for(let i =0; i<56; i++){
        if (i%2 != 0 ) {
            parent.childNodes[i].childNodes[1].childNodes[1].innerText = "Name :" + " " + Name[size];
            parent.childNodes[i].childNodes[1].childNodes[3].innerText = Content[size];
            parent.childNodes[i].childNodes[1].childNodes[5].innerText = "Email : " + " " + Email[size++];      
        }   
    }
}
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
