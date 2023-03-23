let char = `123abcde.fmnopqlABCDE@FJKLMNOPQRSTUVWXYZ456789stuvwxyz0!#$%&ijkrgh'*+-/=?^_${'`'}{|}~`;

const createToken = (key) => {
    let token = ''
    for(let i = 0; i < key.length; i++) {
        let index = char.indexOf(key[i]) || char.length / 2
        let randomIndex = Math.floor(Math.random() * index)
        token += char[randomIndex] + char[index - randomIndex]
    }
    console.log(token)
    return token
}

const compareToken = (token, key) => {
    let string = ''
    for(let i = 0; i < token.length; i++) {
        let i1 = char.indexOf(token[i])
        let i2 = char.indexOf(token[i+1])
        string += char[i1 + i2]
    }
    if(string === key) {
        return true
    }
    return false
}

/* ///////////////////////////////////////////////////////////////
2/23/23 - 12 pm

Left off trying to send data to front end and authenticate user
token.
Working on createToken, generateToken, processData

*/ ///////////////////////////////////////////////////////////////