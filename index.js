// class HTMLTag {
//   constructor(tagname, classList, textContent){
//     this.tagname = tagname
//     this.classList = [...classList],
//     this.textContent = textContent
//   }

//   addClass(param) {
//     this.classList.push(param)
//   } 
// }

// const newSection = new HTMLTag('section', ['middle'], 'Middle')

console.log('JS connected')

//querySelector
//# for id
//. for class
const h1 = document.querySelector('h1')
//const middleSection = document.querySelectorAll('.middle')

//getElement
const footer = document.getElementById('footer')

const middleSection = document.getElementsByClassName('middle')

// console.log(h1)
console.log(middleSection)
// console.log(footer)

middleSection[0].textContent = 'Something else'
middleSection[1].classList.add('something')
const classes = middleSection[1].classList

classes.add('different')

console.log(classes)

//create new element

for(let i = 0; i < 4; i++){
  const newPTag = document.createElement('p')
  newPTag.textContent = i
  
  // console.log(newPTag)
  
  middleSection[1].appendChild(newPTag)
}
