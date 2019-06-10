import 'babel-polyfill';
import _ from 'lodash';
import $ from "jquery"

import './../sass/styles.scss';
import '../dev/header/header'


import Validation from './validation'


let abonentForm = document.querySelector('.abonement_form')
let contactForm = document.querySelector('.contact_form')


abonentForm.addEventListener('submit',e=>{
  e.preventDefault()
  
  let getFormState = Validation(e.target)
  console.log(getFormState)
  if(getFormState){
    console.log('submited to submit')
  }
})


contactForm.addEventListener('submit',e=>{
  e.preventDefault()
  
  let getFormState = Validation(e.target)
  if(getFormState){
    console.log('submited to submit')
  }
  
})