
type ValidatorType = (value:any) =>undefined | string;

export const combineValidators = (...validators:Array<ValidatorType>) => (value:any) =>{
    return validators.reduce((error:undefined|string, validator)=> error || validator(value), undefined);
}


export const isRequired  = (value:any) =>{
    if(!value){
        return 'required';
    }
    return undefined;
}

export const maxLength = (length: number) => (value:any) => {
    if(value.length>length){
        return `max length is ${length}`;
    }
    return undefined;
}

