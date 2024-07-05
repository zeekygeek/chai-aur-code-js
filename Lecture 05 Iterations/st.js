// const tryObj = {
//     js: "javascript",
//     py: "python",
//     cpp: "c++",
//     rb: "ruby",
//   };

  
// console.log(tryObj['js'])

// console.log(Object.keys(tryObj))


function changecol(e){
    document.getElementById('title').style.color = e.target.value;
}

let box = document.querySelectorAll('.box')
    box.addEventListener('click', function changecol(e) {
        document.getElementById('title').style.color = e.target.style.backgroundColor;
    })