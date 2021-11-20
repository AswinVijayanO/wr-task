export const increment = (num)=>{
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decrement = ()=>{
    return {
        type: 'DECREMENT'
    }
}

export const signIn = (payload) =>{
    return {
        type: 'SIGNIN',
        payload:payload
    }
}