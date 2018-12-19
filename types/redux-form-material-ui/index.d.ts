// Type definitions for redux-form-material-ui 5.0.0-beta.3
// Project: https://github.com/erikras/redux-form-material-ui
// Definitions by: Mark Nelissen <https://github.com/marknelissen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { CheckboxProps } from '@material-ui/core/Checkbox';
import { RadioGroupProps } from '@material-ui/core/RadioGroup';
import { SelectProps } from '@material-ui/core/Select';
import { SwitchProps } from '@material-ui/core/Switch';
import { ComponentType } from 'react';
import { WrappedFieldProps } from 'redux-form';

export const Checkbox: ComponentType<WrappedFieldProps & CheckboxProps>;

export const RadioGroup: ComponentType<WrappedFieldProps & RadioGroupProps>;

export const Select: ComponentType<WrappedFieldProps & SelectProps>;

export const Switch: ComponentType<WrappedFieldProps & SwitchProps>;

interface TextFieldProps { }

export const TextField: ComponentType<WrappedFieldProps & TextFieldProps>;