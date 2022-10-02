/* Desenvolva sua lógica aqui */

function showDivDefault(){
    
    let divDefault = document.querySelector(".divDefault")
    let buttonRegister = document.querySelector(".register")
    buttonRegister.addEventListener("click",()=>{
        showModal()
    })
    

    if(insertedValues.length == 0){ 
    let cards = document.querySelector(".cards")
    let divDefault = document.createElement("div")
    let titleDefault = document.createElement("h4")
    let textDefault = document.createElement("p")

    divDefault.classList.add("divDefault")
    divDefault.addEventListener("click",()=>{
        showModal()
    })

    titleDefault.classList.add("titleDefault")
    titleDefault.innerText="Nenhum valor cadastrado"

    textDefault.classList.add("textDefault")
    textDefault.innerText="Registrar novo valor"
    
    cards.appendChild(divDefault)

    divDefault.append(titleDefault,textDefault)

    }else if(insertedValues.length !== 0 && divDefault == true ){
        let remo = document.querySelector(".divDefault")
        remo.remove()
    }
}
showDivDefault()

function renderCards(array){

    array.forEach(element => {
        let aux 

        if(element.categoryID == 1 ){
            aux = "Entrada"
        }else if(element.categoryID == 2){
            aux = "Saída"
        }

        let cards = document.querySelector(".cards")
        let card = document.createElement("div")
        let ValueCard = document.createElement("span")
        let corner = document.createElement("div")
        let status = document.createElement("span")
        let trash = document.createElement("button")


        card.classList.add("card")
        ValueCard.classList.add("ValueCard")
        ValueCard.innerText= element.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        corner.classList.add("corner")
        status.classList.add("status")
        status.innerText= aux
        trash.classList.add("trash")
        trash.addEventListener('click',() =>{
            cards.innerHTML=""
            let index = array.indexOf(element)

            array.splice(index,1)

            renderCards(insertedValues)
            
            showDivDefault()
        })


        cards.appendChild(card)
        card.append(ValueCard,corner)
        corner.append(status,trash)
        
    });
    
    sumValues()
}

renderCards(insertedValues)


function onClickAll(){
    let cards = document.querySelector(".cards")
    let buttonAll = document.querySelector(".all")
    buttonAll.addEventListener("click",()=>{
        cards.innerHTML=""
        renderCards(insertedValues)
    })

}
onClickAll()

function onClickEntry(){
    let cards = document.querySelector(".cards")
    let buttonEntry = document.querySelector(".entry")
    buttonEntry.addEventListener("click",()=>{
        cards.innerHTML=""
        let entrys = insertedValues.filter((element)=>{return element.categoryID === 1})
        console.dir(buttonEntry)
        renderCards(entrys)
    })
}
onClickEntry()

function onClickExit(){
    let cards = document.querySelector(".cards")
    let buttonExit = document.querySelector(".exit")
    buttonExit.addEventListener("click",()=>{
        cards.innerHTML=""
        let exits = insertedValues.filter((element)=>{return element.categoryID === 2})
        renderCards(exits)
    })
}
onClickExit()

function sumValues(){
    let resultSum = document.querySelector(".resultSum")

    


     let resSum = insertedValues.reduce((a,b) => 
       {return a.value + b.value || a + b.value},0)

    resultSum.innerText= resSum.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

}