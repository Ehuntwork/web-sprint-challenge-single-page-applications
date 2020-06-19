import React, {useState,useEffect} from "react";
import axios from 'axios'
import * as Yup from 'yup'
import { Route } from 'react-router-dom';

//imported files
import scheme from './Validation/scheme'
import Header from './Components/Header'
import PizzaForm from './Components/PizzaForm'

///intial states
const intialValues = {
  name:'',
  size:'',
  toppings:{
    Cheese: false,
    Pineapple: false,
    Jalapeno: false,
    Meat: false,
  },
  specialInstructions:'',
}

const intialErrors = {
  name:'',
  size:'',
  toppings:'',
  specialInstructions:'',
}

const intialUser = [];
const initialDisabled = true

///APP///////////////////////////////////////
const App = () => {
  //setStates//
  const [pizza, setPizza] = useState(intialUser)
  const [formValues, setFormValues] = useState(intialValues)
  const [error, setError] = useState(intialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)       
  
    ///basic form stuff////////////////////
    const getNewPizza = ()=>{
      axios.get('https://reqres.in/api/users', formValues)
      .then(res=>{
        setPizza([...pizza, res.data])
      })
      .catch(err=>{
        console.log(err)
        debugger
      })
    };
  
    const postNewPizza = (newPizza)=>{
      axios.post('https://reqres.in/api/users', newPizza)
      .then(res=>{
        setPizza([...pizza, res.data])
      })
      .catch(err=>{
        console.log(err)
        debugger
      })
      .finally(() => {
        setFormValues(intialValues)
        console.log('hey')
      })
    }
  
    const onInputChange = evt =>{//this is where yup does it's stuff
      const{name, value} = evt.target;
  
      Yup
        .reach(scheme, name)
        .validate(value)
        .then(
          setError({
          ...error,
          [name]:''
          }))
        .catch(err=>{
          setError({
            ...error,
            [name]: err.errors[0]
          })
        })
  
      setFormValues({
        ...formValues,
        [name]: value,
      })
    }
  
    const onSubmit = evt =>{//this is where you call postNewUser
      evt.preventDefault()
  
      const newPizza = {
        name:formValues.name,
        size:formValues.size,
        toppings:{
          Cheese: formValues.Cheese,
          Pineapple: formValues.Pineapple,
          Jalapeno: formValues.Jalapeno,
          Meat: formValues.Meat,
        },
        specialInstructions:formValues.specialInstructions,
      }
  
      postNewPizza(newPizza)
    }

    ///unique to this project stuff////////
    const onCheckboxChange = evt =>{
      const { name, checked } = evt.target
      setFormValues({
        ...formValues, 
        toppings:{
          ...formValues.toppings,
          [name]: checked
        }
      })
    }

    //not sure what this does but I don't have time to not include it
    useEffect(()=>{
      getNewPizza()
    },[])

    //disables button until form is valid with Yup
    useEffect(() => {
      scheme.isValid(formValues).then(valid => {
        console.log(valid)
        setDisabled(!valid)
      })
    }, [formValues])

  return (
    <div className='App'>
    <Header path='/'/>
    <Route path='/pizza'>
      <PizzaForm
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={error}
      />
    </Route>

  </div>
  );
};
export default App;
