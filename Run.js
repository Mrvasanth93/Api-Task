link = 'https://jsonplaceholder.typicode.com/comments'
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


/*console.log(a);
console.log(b);
console.log(c);*/
/*function create_card(params) {
    let root = document.getElementById("card")
    let parent = document.getElementById("parent");
    let col = document.createElement('div');
    let card = document.createElement('div');
    let card_head = document.createElement('div');
    let card_body = document.createElement('div');
    let card_footer = document.createElement('div');
    col.className = "col-6 col-md-4 col-lg-3";
    card.className = "card";
    card_head.id = "name";
    card_body.id = "content";
    card_footer.id = "footer"
    card_head.className = "card-header";
    card_body.className = "card-body";
    card_footer.className = "card-footer"
    root.append(parent)
    parent.append(card)
    card.append(card_head);
    card.append(card_body);
    card.append(card_footer);
    col.append(card);
}*/