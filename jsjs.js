function checkElig() {
    let age = 15
    if(age > 18){
        yesMsg = 'you can vote'
        return yesMsg
    }
    else{
        noMsg = 'you can not vote'
        return noMsg
    }
}
checkElig()


if (checkElig() == 'you can vote') {
    console.log('smjh gaye guru')
} else {
    console.log('pending')

}

// IIT DELHI 