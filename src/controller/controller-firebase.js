export const singIn=(email,password)=>{
 firebase.auth().signInWithEmailAndPassword(email, password)
}

export const addNote=(textNote)=>{
    firebase.firestore().collection('notes').add({
        title: textNewNote,
     
})
}

export const deleteNote = (idNote) =>
  firebase.firestore().collection('notes').doc(idNote).delete()

  