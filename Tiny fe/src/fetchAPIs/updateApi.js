export default function UpdateApi(data,form) {
    console.log(data,form,'data Update');
       return new Promise((resolve, reject) => {
           const url = `http://localhost:3001/student/${data}`
           fetch(url, {
               method: 'PUT',
               body:form 
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