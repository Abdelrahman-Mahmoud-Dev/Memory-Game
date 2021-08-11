document.querySelector('.control-btn .container-start').firstElementChild.onclick = function(){
    let yourName = prompt(`What's Your Name?`)
    if(yourName==null||yourName==""){
        document.querySelector('.container-info span').textContent = 'Unknow'
    }else{
        document.querySelector('.container-info span').textContent = yourName
    }
    document.querySelector('.control-btn').remove()
}
/************************* */
document.querySelector('.control-btn .container-start').lastElementChild.onclick = function(){
document.querySelector('.control-btn').remove()
document.querySelector('.control-btn1').style.display = "block";

document.querySelector('.container-levels').children[1].onclick = function(){ 
    document.querySelector('.control-btn1').remove()
     setInterval(()=>{
        timer()
        
    },1000)
    let s = 100;
function timer(){
    let min = Math.floor(s/60);
    let seconds = s % 60;
    seconds<10 ? seconds = "0" + seconds :false
    document.querySelector('.container-info .timer span').innerHTML = min + ":" + seconds ; 
    if(s>0){
        s --
        console.log(s)
    }else{
        clearInterval(s)
    }

}
}
}

/*****************************************/
//**/timer */



/************************* */
// document.querySelector('.container-levels').children[1].onclick = function(){ 
//     document.querySelector('.control-btn1').remove()
//     let timeEasy = setInterval(()=>{
//         timer(180)
        
//     },1000)

// }
// document.querySelector('.container-levels').children[2].onclick = function(){  document.querySelector('.control-btn1').remove()
//     let timeEasy = setInterval(()=>{
//         timer(120,timeEasy)
//     },1000)

// } 
// document.querySelector('.container-levels').children[3].onclick = function(){  document.querySelector('.control-btn1').remove()
//     let time = 60;
//     let timeEasy = setInterval(()=>{
//         timer(60,timeEasy)
//     },1000)
// }
/*****************************************/
let decoration =1000;

let containerBlocks = document.querySelector('.memory-game-blocks');
let blocks = Array.from(containerBlocks.children);
let orderRange = Array.from(Array(blocks.length).keys())

shuffle(orderRange)
// add order css prop to game block

blocks.forEach((block,i)=>{
    block.style.order = orderRange[i];
    block.addEventListener('click',function(){
        flipBlock(block)
    });
});


//flip block function 
function flipBlock(slectedblock){
    //add class is-transfrom
    slectedblock.classList.add('is-transfrom');

    //collection all transfrom cards
    let allflipedblocks = blocks.filter(flipblock=>flipblock.classList.contains('is-transfrom'));
    //if theres two selected blocks
    if(allflipedblocks.length===2){
        stopClicking()
        check(allflipedblocks[0],allflipedblocks[1])
    }else{

    }
}


function shuffle(array){
let current = array.length,
temp,
random;
while(current>0){
    //get random number
    random = Math.floor(Math.random() * current);
    //decrease length by one 
    current--

    temp = array[current]
    array[current] = array[random]
    array[random] = temp
    /**
    [1] save current element in stash 
    [2] current element  = random element 
    [3] random element = get element from stash 
     */
  } 
  return array;
}


function stopClicking(){
    //add class no clicking  on main container
    containerBlocks.classList.add('no-clicking')
    setTimeout(()=>{
        containerBlocks.classList.remove('no-clicking')
    },decoration)
}

function check(first,second){
    let tries = document.querySelector('.container-info .tries span');
    if(first.dataset.avatar===second.dataset.avatar){
        first.classList.remove('is-transfrom')
        second.classList.remove('is-transfrom')
        first.classList.add('is-matched')
        second.classList.add('is-matched')
    }
    else{
        setTimeout(()=>{
            tries.textContent = parseInt(tries.textContent) + 1
            first.classList.remove('is-transfrom')
            second.classList.remove('is-transfrom')
        },decoration)
    }
}