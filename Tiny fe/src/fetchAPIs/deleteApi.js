export default function deleteApi(data) {
 console.log(data,'data delete');
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/student/${data}`
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