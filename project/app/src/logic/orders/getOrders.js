import { errors } from 'com';

const { SystemError } = errors

export default () => {
    return fetch(`${import.meta.env.VITE_API_URL}/orders`, {

        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.ok)
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(({ error, message }) => { throw new errors[error](message) })
        })
}




// export default () => {
//     fetch(`http://${import.meta.env.VITE_API_URL}/orders`, {
//         // headers: {
//         //     'Content-Type': 'application/json'
//         // }
//     })
//         .catch(error => { throw new SystemError(error.message) })
//         .then(res => {
//             if (res.ok)
//                 return res.json()
//                     .catch(error => { throw new SystemError(error.message) })

//             return res.json()
//                 .catch(error => { throw new SystemError(error.message) })
//                 .then(({ error, message }) => { throw new errors[error](message) })
//         })
// }