// import { ref } from 'vue'
// import { db } from '../firebase/config'
// import { doc, getDoc, collection, getDocs } from "firebase/firestore";

const getPost = (id) => {

  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      //JSON server code:

      // Terminal: npx json-server --host 192.168.0.50 --watch data/db.json --port 8181

      let data = await fetch('http://192.168.0.50:8181/posts/' + id)
      if (!data.ok) {
        throw Error('Nincs ilyen feladványunk...')
      }
      post.value =  await data.json()
      // const docRef = doc(db, "posts", id );
      // const docSnap = await getDoc(docRef);

      // if (docSnap.exists()) {
      //         post.value = { ...docSnap.data(), id: docSnap.id }
      // } else {
      //   throw Error("Nincs ilyen feladványunk...");
      // }
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { post, error, load } 
}

export default getPost