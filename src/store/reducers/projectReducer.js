const initState = {
    projects:[
        {id:1, title:'Story 1', description:'Description of the project'},
        {id:2, title:'Story 2', description:'Description of the project'},
        {id:3, title:'Story 3', description:'Description of the project'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
        default:
            return state;
    }
    
}

export default projectReducer;