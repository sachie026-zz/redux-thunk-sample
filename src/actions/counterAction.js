export const incAction = (val) => {
    // thunk implementation
    // return () => {
    //     console.log('inc action', val)
    //     if(val === 0) {
    //         return {
    //             type: 'INC',
    //             payload: val,
    //         }
    //     }
    // }
    
    return {
        type: 'INC',
        payload: val,
    }

}