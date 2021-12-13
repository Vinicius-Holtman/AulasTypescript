
type User = { username: string, password: string }
type VeriftUser = (user: User, sentValue: User) => boolean

const verifyUser: VeriftUser = (user, sentValue) => {
    return (
        user.username === sentValue.username && user.password === sentValue.password
    )
}

const bdUser = { username: 'Vinicius', password: 'teste' }
const sentUser = { username: 'Vinicius', password: 'teste' }
const loggedIn = verifyUser(bdUser, sentUser)
console.log(loggedIn)
