export const createProject = (project) => {
    return (dispatch, getState, {getFirestore,getFirebase}) => {
       // make async calls to database. 
       const firestore = getFirestore();
       const profile = getState().firebase.profile;
       const authorId = getState().firebase.auth.uid;

       firestore.collection('Stories').add({
            ...project,
            authorFirstName:profile.firstName,
            authorLastName:profile.lastName,
            authorId:authorId,
            createdAt:new Date()
       }).then(() => {
        dispatch({type:'CREATE_PROJECT', project}); 
       }).catch((err) => {
           dispatch({type:'CREATE_PROJECT_ERROR',err});
       });
    }
};