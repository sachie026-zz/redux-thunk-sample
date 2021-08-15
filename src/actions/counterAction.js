export const incAction = (val) => {
    console.log('inc action', val)
    return {
        type: 'INC',
        payload: val,
    }
}