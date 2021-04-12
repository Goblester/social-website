import React from 'react';
import './FormControls.module.css';
import s from './FormControls.module.css';
import Element from '../../../hoc/FormControl/FormControl';

/*export const FormControl = ({meta, children}: any) => {
    const hasError = meta.invalid && meta.touched;
    return (
        <div className={s.textareaForm}>
            <div className={hasError && s.error}>
                {children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}*/

export const Input = Element('input');

export const TextArea = Element('textarea');