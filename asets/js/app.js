
//get element


// const h1 = document.querySelector('h1');
// const input = document.querySelector('input');
// const button = document.querySelector('button');
// const select = document.querySelector('select');



// button.onclick = () => {
//    h1.innerHTML = input.value; 
// }


//Keyboard er behaviyar

// input.onkeyup = () => {
//     h1.innerHTML = input.value; 

// } 

// input.onkeydown= () => {
//     h1.innerHTML = input.value; 

// } 

// input.onkeypress= () => {
//     h1.innerHTML = input.value; 

// } 


//get element

// input.onfocus = () => {
//     console.log('Focus');
// }

// input.onblur = () => {
//     console.log('Bular Done');
// }

// input.onchange = () => {
//     console.log('change Event Fire Done');
// }



//00000000

// const h1 = document.querySelector('h1');
// const gender = document.querySelectorAll('input[name="gender"]');


// select.onchange = () => {
//     h1.innerHTML = select.value 
// }

// gender.forEach(item => {
//     item.onchange = () =>{
//         h1.innerHTML = item.value 
//     }
// })


//Facebook login informetion
// const search = document.querySelector('.search');
// const input = document.querySelector('input');
// const icon = document.querySelector('i');
// const tw = document.querySelector('.tol-wraper');



// let count = 0;


// input.onblur = () =>{
//     if (input.value == '') {
//         search.style.borderColor = 'red';
//         icon.style.display = 'block';
//         tw.style.display = 'block';

        
//     } else { 
//         search.style.borderColor = 'black';
//         icon.style.Color = 'none';

        
//     }
//     count++;

// }
//  input.onfocus = () =>{
     
//         tw.style.display = 'block';
//         search.style.borderColor = 'black';
//         icon.style.display = 'none';

//         if (input.value == '' && count > 0 ){
//             tw.style.display = 'block'; 
//         } else {
//             tw.style.display = 'none'; 
            
//         }
// }
 
// input.onkeyup = () => {
//     if (input.value == '') {
//         tw.style.display = 'block';
//     } else {
//         tw.style.display = 'none';

//     }
// }


//elementor page bulder

const heading = document.getElementById('heading');
const para = document.getElementById('para');
const font_size = document.getElementById('font_size');
const color = document.getElementById('color');
const fontfamele = document.getElementById('fontfamele');
const h1 = document.querySelector('h1');
const align = document.querySelectorAll('.align');


heading.onkeyup = () =>{
    h1.innerHTML = heading.value;
    h1.style.fontSize = '18px';
}

para.onkeyup = () =>{
    h1.innerHTML = para.value;
    h1.style.fontSize = '18px';
}

align.forEach ( item => {
    item.onchange = () => {
        h1.style.textAlign = item.value;
    }
});

font_size.oninput = () => {

        h1.style.fontSize = font_size.value + 'px';
}

color.oninput = () => {

        h1.style.color = color.value;
        // console.log(color.value);
}

fontfamele.oninput = () => {

        h1.style.fontFamily = fontfamele.value;
        // console.log(color.value);
}




//elementor page bulder
