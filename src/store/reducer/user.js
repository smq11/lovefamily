
function user(state='',action){
    switch (action.type) {
        case 'setUser':
            state=action.data;
            return state;
            break;
    
        default:
            return state;
    }
}

export default user;