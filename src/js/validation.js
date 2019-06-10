



const Validation = (form) =>{

    
    
  
    let require = form.querySelectorAll('[required]')
    let getValidState = []
   

    require.forEach(element => {
        if(element.getAttribute('min') || element.getAttribute('max')) getValidState.push(checkLength(element))
        

        if(element.getAttribute('type')=='email'){
            
            getValidState.push(checkEmail(element))
        }
      

    });

    if(getValidState.indexOf(false)<0){
        getValidState = true
        form.querySelectorAll('label').forEach(element => {
            element.classList.remove('show')
          });
    } else getValidState = false
     
   
    return getValidState    

}




const checkEmail = elm =>{
    
    var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(emailPattern.test(elm.value)) {
       elm.value = ''
       return true
   }else return false
}

const checkLength = elm =>{
    let min = elm.getAttribute('min')
    let max = elm.getAttribute('max')
   
    if(elm.value.length<min || elm.value.length>max ){
        getErrorField(elm)
        return false
    } else{
        return true
    } 
   
}

const getErrorField = (elm) =>{
    let id = elm.getAttribute('id')
    let label = elm.parentNode.querySelector("[for="+id+"]")
    label.classList.add('show')
}

export default Validation