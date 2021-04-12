
export const updateObjectsInArray = (items: Array<any>, itemId: number, objPropName: string, newObjProps:{[key:string]:any})=>{
    debugger;
    return items.map(item => {
        if (item[objPropName] === itemId) {
            return {...item, ...newObjProps};
        }
        return item;
    })
}