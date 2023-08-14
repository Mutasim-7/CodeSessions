// let btn = document.getElementById('btn');

// btn.addEventListener('click',function(){     
//     let inp1 = document.getElementById('inp1').value;
//     let inp2 = document.getElementById('inp2').value;
//     let text = document.getElementById('text');
//     let result = parseInt(inp1) + parseInt(inp2);
//     text.innerHTML = result;
//     console.log(result)
// })

// let btn2 = document.getElementById('btn2');
// btn2.addEventListener('click',function(){
//     let box = document.getElementsByClassName('box')[0];
//     box.style.backgroundColor = 'red'
//     box.style.transition = '1s'
//     box.style.width = '500px'
// })



// let btn1 = document.getElementById('btn1');
// btn1.addEventListener('click',function(){
//     let box = document.getElementsByClassName('box')[0]
//     box.classList.toggle('hide')
// });

// window.addEventListener('keydown',function(letter){
//     if(letter.code === "ArrowUp"){
//         console.log(letter.code)
//     let box = document.getElementsByClassName('box')[0]
//     box.classList.toggle('hide')
// }
// });


let box = document.getElementsByClassName('box')[0]
setTimeout(()=>{
    box.classList.toggle('hide')
}, 4000)