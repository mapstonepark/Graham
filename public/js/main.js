const deleteBtn = document.querySelectorAll('.del')
const contactsItem = document.querySelectorAll('span.not')
const contactsComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletecontacts)
})

Array.from(contactsItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(contactsComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deletecontacts(){
    const contactsId = this.parentNode.dataset.id
    try{
        const response = await fetch('contactss/deletecontacts', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'contactsIdFromJSFile': contactsId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const contactsId = this.parentNode.dataset.id
    try{
        const response = await fetch('contactss/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'contactsIdFromJSFile': contactsId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const contactsId = this.parentNode.dataset.id
    try{
        const response = await fetch('contactss/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'contactsIdFromJSFile': contactsId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}