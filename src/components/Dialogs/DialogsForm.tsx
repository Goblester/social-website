import React from 'react';
import {Field, Form} from 'react-final-form';
import {TextArea} from '../common/FormsControls/FormsControls';
import {combineValidators, isRequired, maxLength} from '../../utils/validation/validators';

type DialogsFormDataType = {
    message: string
}


type DialogsFormPropsType = {
    sendMessage: (message: string) => void
}

function DialogsForm(props: DialogsFormPropsType) {

    const onMessageSubmit = (data: DialogsFormDataType) => {
        props.sendMessage(data.message);
    }

    return (
        <Form onSubmit={onMessageSubmit}
              render={({handleSubmit, form, invalid}) => (
                  <form onSubmit={handleSubmit}>
                      <Field name={'message'}
                             component={TextArea}
                             type={'textarea'}
                             placeholder={'enter the message'}
                             validate={combineValidators(isRequired, maxLength(15))}
                      />
                      <button type={'submit'}
                              disabled={invalid}
                              onMouseLeave={() => {
                                  form.reset()
                              }}>send
                      </button>
                  </form>
              )}/>
    )
}


export default DialogsForm;