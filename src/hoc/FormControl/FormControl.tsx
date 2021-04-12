import React from 'react';
import s from '../../components/common/FormsControls/FormControls.module.css';

const Element = (Element:any) => ({input, meta, ...props}:any)=>{
    const hasError = meta.invalid && meta.touched;
    return (
        <div className={s.textareaForm}>
            <div className={hasError && s.error}>
                <Element {...input} {...props}/>
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}


export default Element;