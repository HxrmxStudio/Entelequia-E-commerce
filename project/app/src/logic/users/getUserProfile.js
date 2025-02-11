import { errors } from 'com'
import { extractPayloadFromJWT } from '../../../../util/index'

const { SystemError } = errors

export default () => {
    const { sub: userId } = extractPayloadFromJWT(localStorage.token)

    return fetch(`${import.meta.env.VITE_API_URL}/users/${userId}/profile`, {

        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.token}`
        }
    })
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(res => {
            if (res.ok)
                return res.json()
                    .catch(error => {
                        throw new SystemError(error.message);

                    })
            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(({ error, message }) => { throw new errors[error](message) })
        })
}