
function city(state='北京',action){
    switch (action.type) {
        case 'setCity':
            state=action.data;
            return state;
            break;
    
        default:
            return state;
    }
}

export default city;