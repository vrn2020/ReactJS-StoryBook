const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

//https://us-central1-storybook-bb525.cloudfunctions.net/helloWorld

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello StoryBook!", {structuredData: true});
  response.send("Hello StoryBook!");
});

const createNotification = (notification => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => {
      console.log('notification added', doc)
    });
});

exports.storyCreated = functions.firestore
  .document('Stories/{storyId}')
  .onCreate((doc) => {
    const story = doc.data();
    const notification = {
      content:'Added a new story',
      user: `${story.authorFirstName} ${story.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp() 
    }
    return createNotification(notification);

});

exports.userJoined = functions.auth.user()
  .onCreate((user) => {
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {
        const newUser = doc.data();
        const notification = {
          content:'Joined the party',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
      })
})