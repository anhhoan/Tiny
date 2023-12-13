export default function deleteApi(data) {
       return new Promise((resolve, reject) => {
           const url = `http://localhost:3001/student/?id=${data.payload.id}&key=${data.payload.key}`
           console.log(url,'hoan loggggg');
           fetch(url, {
               method: 'DELETE', 
           })
               .then((respone) => respone.json())
               .then((res) => {
                   resolve(res)
                   
               })
               .catch((err) => {
                   reject(err)
               })
       })
   }