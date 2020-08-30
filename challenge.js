document.addEventListener('DOMContentLoaded', () => {
    let i = 0;
    let likes = 0;
    let buttonStatus = {'status': false}
    let interval = setInterval(increase, 1000)

    start()

    const counter = document.querySelector('#counter');

    function increase() {
        i++
        likes = 0;
        counter.innerText = i; 
    }

    function increaseOnClick() {
       if (i > 0) {
           i++
       }
        counter.innerText = i; 
    }

    function decreaseOnClick() {
        if (i > 0) {
            i--
        }
        counter.innerText = i; 
    }

    function hold() {
        i = i
    }
  
    function start() {    
        interval;     
    }

    const minusButton = document.querySelector("#\\-")

    minusButton.addEventListener('click', () => {
        decreaseOnClick()
    })
    
    const plusButton = document.querySelector("#\\+")

    plusButton.addEventListener('click', () => {
        increaseOnClick()
    }) 

    const likesSection = document.getElementById("ul-likes")

    const heartButton = document.querySelector("#\\<3")

    function like() {
        // const likesObject = {};
        likes++
        const likey = Object.assign({},{'currentI': counter.innerHTML}, {'likes': likes} )

    
        let likesLi = document.createElement('li')

        if (likey.likes !== 1){
            likesSection.lastChild.innerText = (`${likey.currentI} was liked ${likey.likes} times.`)
        } else if (likey.likes === 1) {
            likesLi.innerText = (`${likey.currentI} was liked ${likey.likes} times.`)
            likesSection.appendChild(likesLi)
        }
    }

    heartButton.addEventListener('click', () => {
        like()
    })  
    
    let status = false
    function toggleButtons () {
        status = !status
        minusButton.disabled = status
        plusButton.disabled = status
        heartButton.disabled = status
        buttonStatus['status'] = status
    }
    
    const pauseButton = document.querySelector("#pause")

    pauseButton.addEventListener('click', () => {
        
        if (buttonStatus.status === false) {
            toggleButtons()
            clearInterval(interval)
            pauseButton.innerText = ('resume')
            console.log(buttonStatus['status'])

        } else {
            toggleButtons()
            interval = setInterval(increase, 1000)
            pauseButton.innerText = ('pause')
            console.log(buttonStatus['status'])
        }      
    }) 

    const commentForm = document.querySelector('#comment-form')

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const commentField = commentForm.querySelector("input[type=text]")
        
        const commentSection = document.querySelector('#list')      
        const commDiv = document.createElement('div')
        commDiv.id = "list"
        commDiv.className = "comments"
        const comment = document.createElement('p')
        comment.innerText = commentField.value
        commDiv.append(comment)
        commentSection.appendChild(commDiv)
        e.target.reset()
    })
    
})



