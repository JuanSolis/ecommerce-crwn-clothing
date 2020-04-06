import React from 'react';
import {
    FormInputContainer,
    FormInputLabel, 
    Group
} from './form-input.styles';


const FormInput = ({handleChange, label, ...otherProps}) => (
    <Group>
        <FormInputContainer onChange={handleChange} {...otherProps}/>
        {
            label ? 
            (<FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
                {label}
                </FormInputLabel>
            ): null
        }
    </Group>
);

export default FormInput;