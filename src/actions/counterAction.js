export const incAction = (val) => {
    return () => {
        console.log('inc action', val)
        if(val === 0) {
            return {
                type: 'INC',
                payload: val,
            }
        }
    }

}