var b = 34

if(true){
    let a = 10
    var b = 44
    const c = 554
}
// console.log(a)
// console.log(b)
// console.log(c)



// ------------------ NESTED SCOPING -------------------------------------
function one(){
    const username = "abhijit"

    function two(){
        const website = "youtube"
        console.log(username)
    }

    // console.log(website)
    two()

}

one()
