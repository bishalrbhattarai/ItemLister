const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const input = e.target.add.value;
    console.log(input);
    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    li.textContent = `${input} `
    li.classList.add('list-group-item')
    const button = document.createElement('button')
    button.textContent = ' X '
    button.classList.add('btn','btn-danger','float-end')
    li.appendChild(button)
    ul.appendChild(li)


const deleteBtn = document.querySelectorAll('.card-body .btn')
deleteBtn.forEach( btn=>{
    btn.addEventListener('click',(e)=>{
        const parent =   e.target.parentElement
        const grandParent = parent.parentElement
          grandParent.removeChild(parent)
      })
   })
})

    
const searchInput = document.querySelector('#search')
searchInput.addEventListener('keyup',(e)=>{
    const searchValue = e.target.value.toLowerCase()
    const list = document.querySelectorAll('li')
    list.forEach(li=>{
        const text = li.textContent.toLowerCase()
        if(text.indexOf(searchValue) === -1){
            li.style.display = 'none'
        }else{
            li.style.display = 'block'
        }
    })
})

