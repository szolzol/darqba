// import { ref } from 'vue'
// import { db } from '../firebase/config'
// import { collection, getDocs, query, orderBy, getCountFromServer } from "firebase/firestore";

const getPosts = () => {

  const posts = ref([])
  const error = ref(null)
  const count = ref(null)

  const load = async () => {
    try {
      //JSON server code:
      
      // Terminal: npx json-server --host 192.168.0.50 --watch data/db.json --port 8181
      
      let data = await fetch('http://192.168.0.50:8181/posts')
      if(!data.ok || posts.length <1) {
        throw Error('O-ó... Nincsenek adatok...')
      }
      posts.value = await data.json()
//       const postsRef = collection(db, "posts")
//       const q = query(postsRef, orderBy('postDate', 'desc'))
//       const querySnapshot = await getDocs(q);
// ;
//       posts.value = querySnapshot.docs.map(doc => {
//         // console.log(doc.data())
//         return { ...doc.data(), id: doc.id }
//       })

//       const coll = collection(db, "posts");
//       const snapshot = await getCountFromServer(coll);
//       count.value = snapshot.data().count
//       console.log('count: ', count.value);
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { posts, error, count, load }
}

export default getPosts