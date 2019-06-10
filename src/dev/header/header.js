import Validation from '../../js/validation'



let navMenuHandler = document.querySelector('.header_show-nav')
let navMenu = document.querySelector('.header_navigation')
let dropdownItems = Array.from(document.getElementsByClassName('dropdown'))
let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let searchHolder  = document.querySelector('.header_search')
let headerForm = document.querySelector('.header_search-form')
let body = document.querySelector('body')






headerForm.addEventListener('submit',e=>{
    let searchInput = e.target.querySelector('.search_input')
    e.preventDefault()
    e.target.classList.remove('show')
   
    searchInput.value = ''
})

const setMenuToggleEvent = () =>{
    navMenuHandler.onclick = () => {
        navMenu.classList.toggle('show')
        body.classList.toggle('no-scroll')
    }
}

const headerSearchItem = () =>{ 
    searchHolder.onclick = ()=>{
        headerForm.classList.toggle('show')
    }
}

const setHoverOnDropdown = (width) =>{
   
    if(width<=1224){
      
        dropdownItems.forEach((item)=>{
           
            item.classList.remove('hover-effect')
        })

        dropdownItems.forEach((item)=>{
            item.onclick = () =>{
                item.classList.toggle('show')
            }
        })
            
            
        
    }else{
       
        dropdownItems.forEach((item)=>{
            item.classList.remove('show')
            item.classList.add('hover-effect')
        })
      
    }
}

window.onresize = () =>{
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    setHoverOnDropdown(width)
}




headerSearchItem()
setMenuToggleEvent()
setHoverOnDropdown(width)
setMenuToggleEvent()
