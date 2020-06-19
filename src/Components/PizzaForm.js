import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function PizzaForm(props){
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
    } = props

    return(
        <div className='pizza'>
            <Form onSubmit={onSubmit}>
                <div className='errors'>
                    <span>{errors.name}</span> 
                </div>

                {/*Text Feild */}
                <FormGroup>
                    <Label>Name&nbsp;
                        <Input
                            value = {values.name}
                            onChange = {onInputChange}
                            name = 'name'
                            type = 'text'
                            placeholder="First name, Last Name"
                        />
                    </Label>
                </FormGroup>
               

                {/*Dropdown*/}
                <FormGroup>
                    <Label>Select a size
                        <Input
                            type='select'
                            onChange = {onInputChange}
                            value = {values.size}
                            name = 'size'
                        >
                            <option value=''>-Select an option-</option>
                            <option value='Large'>Large</option>
                            <option value='Medium'>Medium</option>
                            <option value='Small'>Small</option>

                        </Input> 
                    </Label>
                </FormGroup>


                {/*Checkbox*/}
                <FormGroup check>
                    <Label check>Cheese
                        <Input
                            name='Cheese'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.toppings.Cheese}
                        />
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>Pineapple
                        <Input
                            name='Pineapple'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.toppings.Pineapple}
                        />
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>Jalapeno
                        <Input
                            name='Jalapeno'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.toppings.Jalapeno}
                        />
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>Meat
                        <Input
                            name='Meat'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.toppings.Meat}
                        />
                    </Label>
                </FormGroup>

                {/*Text Feild */}
                <FormGroup>
                    <Label>Special Instructions&nbsp;
                        <Input
                            value = {values.specialInstructions}
                            onChange = {onInputChange}
                            name = 'specialInstructions'
                            type = 'textarea'
                        />
                    </Label>
                </FormGroup>
                

                <Button disabled={disabled}>Add to Order</Button>
            </Form>
        </div>
    );
}

export default PizzaForm;