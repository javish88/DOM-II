// Your code goes here

const funLinks = document.querySelectorAll('.nav-link');
funLinks.forEach((funLinks) => {
    funLinks.addEventListener('click', () => {
        funLinks.style.color = "red";
    })
})

funLinks.forEach((funLinks) => {
    funLinks.addEventListener('dblclick', () => {
        funLinks.style.border = "solid blue";
    })
})

funLinks.forEach((funLinks) => {
    funLinks.addEventListener('focus', () => {
        funLinks.style.color = "blue";
        funLinks.preventDefault();
    })
})

const buttons = document.querySelectorAll('.btn');
buttons.forEach((buttons) => {
    buttons.addEventListener('mouseenter', () => {
        buttons.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        if (buttons.length < 7) color += "0";
    })
})

buttons.forEach((buttons) => {
    buttons.addEventListener('mouseleave', () => {
        buttons.style.backgroundColor = "#17A2B8";
    })
})

const newBusImg = document.querySelector('.intro img');
window.addEventListener('resize', () => {
    newBusImg.src = "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80";
})

const logoTitle = document.querySelector('.logo-heading');
logoTitle.addEventListener('mouseenter', () => {
       logoTitle.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
       if (color.length < 7) color += "0";
   }) 

const wheelBus = document.querySelector('.content-destination img');
wheelBus.addEventListener('wheel', () => {
    wheelBus.setAttribute('src', 'https://images.unsplash.com/photo-1446941303752-a64bb1048d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80')
})   

const footScroll = document.querySelector('.footer');
document.addEventListener('scroll', (event) => {
    footScroll.style.background = "red";
    event.stopPropagation();
})
    
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === "f") {
        alert(`You Pressed ${keyName}! You got a praying bus , Jeebuz be with you`)
    }
})

