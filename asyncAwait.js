function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Used data retrieved')
            resolve(100)
        }, 8000)
    })
}

getUserData()

console.log('mypromise')