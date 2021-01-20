export const removeFeature=(data)=>{
    return{type: "REMOVE_FEATURE", payload: data}
}

export const addFeature=(data)=>{
    return{type: "ADD_FEATURE", payload: data}
}