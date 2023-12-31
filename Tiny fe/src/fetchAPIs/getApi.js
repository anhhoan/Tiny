export default function getApi(data) {
 
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/student`
        fetch(url, {
            method: 'GET',
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