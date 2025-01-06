import { errors } from 'com';
const { SystemError } = errors

export default () =>
    fetch(`${import.meta.env.VITE_API_URL}/products`, {
        method: 'GET',
        mode: 'no-cors',
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
            }
            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(({ error, message }) => { throw new errors[error](message) })
        })

