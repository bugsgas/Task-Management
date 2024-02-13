import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDY8IkXwsVGy1x-aXFzQ717uoUBpKouSxw",
  authDomain: "task-management-83d24.firebaseapp.com",
  projectId: "task-management-83d24",
  storageBucket: "task-management-83d24.appspot.com",
  messagingSenderId: "215033862642",
  appId: "1:215033862642:web:91a59b188917f612bdb36b"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }