/* Desenvolva sua lógica aqui */

function showModal(){
    //criar

    let body = document.querySelector("body")
    let outsideModal = document.createElement("section")
    let bodyModal= document.createElement("div")
    let modalContent= document.createElement("div")
    let titleAndX = document.createElement("div")
    let titleModal= document.createElement("h2")
    let xModal= document.createElement("button")
    let modalText= document.createElement("p")
    let formModal= document.createElement("form")
    let labelInputValue = document.createElement("label")
    let fakePlaceholder = document.createElement("div")
    let valueOfInput = document.createElement("label")
    let inputValueOfInput= document.createElement("input")
    let divTypeValue = document.createElement("div")
    let textTypeOfValue = document.createElement("span")
    let radio0= document.createElement("input")
    let inputEntryModal = document.createElement("label")
    let radio1 = document.createElement("input")
    let inputExitModal = document.createElement("label")
    let divbuttonsModal = document.createElement("div")
    let cancel = document.createElement("button")
    let insertValue = document.createElement("button")

    // alimentar - adicionar clases

    outsideModal.classList.add("outsideModal")
    bodyModal.classList.add("bodyModal")
    modalContent.classList.add("modalContent")
    titleAndX.classList.add("titleAndX")

    titleModal.classList.add("titleModal")
    titleModal.innerText ="Registro De Valor"

    xModal.classList.add("xModal")
    xModal.innerText ="X"
    xModal.addEventListener("click",(evento)=>{
        evento.preventDefault()
        removeModal()
    })

    modalText.classList.add("modalText")
    modalText.innerText ="Digite o valor e em seguida aperte no botão referente ao tipo do valor"
    
    
    formModal.classList.add("formModal")
    formModal.addEventListener("submit", (evento)=>{
        evento.preventDefault()
        getValues()
    })

    labelInputValue.classList.add("labelInputValue")
    labelInputValue.innerText="Valor"
    labelInputValue.for = "valueOfInput" 
    

    fakePlaceholder.classList.add("fakePlaceholder")

    valueOfInput.htmlFor="valueOfInput"
    valueOfInput.innerText ="R$ "

    inputValueOfInput.classList = "valueOfInput inputValueOfInput"
    inputValueOfInput.required ="true"
    inputValueOfInput.name="value"
    inputValueOfInput.id="valueOfInput"
    inputValueOfInput.placeholder="0.00"
    inputValueOfInput.type="text"
    inputValueOfInput.oninput=function(){
        this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(',', '.')
    };

    
    divTypeValue.classList.add("divTypeValue")

    textTypeOfValue.classList.add("textTypeOfValue")
    textTypeOfValue.innerText="Tipo de valor"

    radio0.classList.add("radio0")
    radio0.type="radio" 
    radio0.hidden=true
    radio0.id="0" 
    radio0.value="1"
    radio0.name="categoryID" 
    radio0.required ="true"

    inputEntryModal.classList.add("inputEntryModal") 
    inputEntryModal.classList.add("buttonOutline")
    inputEntryModal.tabIndex="0" 
    inputEntryModal.htmlFor="0"
    inputEntryModal.innerText="Entrada"

    radio1.classList.add("radio1")
    radio1.type="radio" 
    radio1.hidden=true
    radio1.id="1" 
    radio1.value="2" 
    radio1.name="categoryID" 
    radio1.required ="true"

    inputExitModal.classList.add("inputExitModal") 
    inputExitModal.classList.add("buttonOutline") 
    inputExitModal.tabIndex="1" 
    inputExitModal.htmlFor="1"
    inputExitModal.innerText="Saida"

    divbuttonsModal.classList.add("divbuttonsModal") 

    cancel.classList="buttonSegundary cancel"
    cancel.innerText="Cancel"
    cancel.addEventListener("click",(evento)=>{
        evento.preventDefault()
        removeModal()
    })

    insertValue.classList="buttonPrimary insertValue"
    insertValue.innerText="Inserir Valor"
    insertValue.type = "submit"

    

    // AFILIAR 
    
    
    body.appendChild(outsideModal) 
   
    outsideModal.appendChild(bodyModal)
    bodyModal.appendChild(modalContent)
    modalContent.append(titleAndX,modalText,formModal)
        titleAndX.append(titleModal,xModal)
        formModal.append(labelInputValue,fakePlaceholder,divTypeValue,divbuttonsModal)

            fakePlaceholder.appendChild(valueOfInput)
                valueOfInput.appendChild(inputValueOfInput)
            
            divTypeValue.append(textTypeOfValue,radio0,inputEntryModal,radio1,inputExitModal)

            divbuttonsModal.append(cancel,insertValue)

}


function removeModal(){
    let outsideModal = document.querySelector(".outsideModal")
    outsideModal.remove()
    
}

let idO =4

function getValues(){

    let formModal=Number(document.querySelector(".formModal").categoryID.value)
    let inputValueOfInput = Number(document.querySelector(".inputValueOfInput").value)
    let cards = document.querySelector(".cards")
    
    
   
    let objRes= {id:idO , value:inputValueOfInput , categoryID:formModal}
    
    
    insertedValues.push(objRes)
    idO++

    showDivDefault()
    removeModal()
    showModal()
    
    cards.innerHTML=""
    renderCards(insertedValues)

}

