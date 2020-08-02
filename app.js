document.addEventListener('DOMContentLoaded', () => {
    //card options  
    const cardArray = [  
      {  
        name: 'auntie100',  
        img: 'images/auntie100.png'  
      },  
      {  
        name: 'babyfeet100',  
        img: 'images/babyfeet100.png'  
      },  
      {  
        name: 'babyone100',  
        img: 'images/babyone100.png'  
      },  
      {  
        name: 'feet100',  
        img: 'images/feet100.png'  
      },  
      {  
        name: 'halfpricedbook',  
        img: 'images/halfpricedbook.png'  
      },  
      {  
        name: 'pink100',  
        img: 'images/pink100.png'  
      },  
      {  
        name: 'auntie100',  
        img: 'images/auntie100.png'  
      },  
      {  
        name: 'babyfeet100',  
        img: 'images/babyfeet100.png'  
      },  
      {  
        name: 'babyone100',  
        img: 'images/babyone100.png'  
      },  
      {  
        name: 'feet100',  
        img: 'images/feet100.png'  
      },  
      {  
        name: 'halfpricedbook',  
        img: 'images/halfpricedbook.png'  
      },  
      {  
        name: 'pink100',  
        img: 'images/pink100.png'  
      }  
    ]  
  
    cardArray.sort(() => 0.5 - Math.random())  
  
    const grid = document.querySelector('.grid')  
    const resultDisplay = document.querySelector('#result')  
    var cardsChosen = []  
    var cardsChosenId = []  
    const cardsWon = []  
  
    //create your board  
    function createBoard() {  
      for (let i = 0; i < cardArray.length; i++) {  
        var card = document.createElement('img')  
        card.setAttribute('src', 'images/granny100.png')  
        card.setAttribute('data-id', i)  
        card.addEventListener('click', flipCard)  
        grid.appendChild(card)  
      }  
    }  
  
    //check for matches  
    function checkForMatch() {  
      var cards = document.querySelectorAll('img')  
      const optionOneId = cardsChosenId[0]  
      const optionTwoId = cardsChosenId[1]      
  
      if(optionOneId == optionTwoId) {  
        cards[optionOneId].setAttribute('src', 'images/granny100.png')  
        cards[optionTwoId].setAttribute('src', 'images/granny100.png')  
        alert('You have clicked the same image!')  
      }  
      else if (cardsChosen[0] === cardsChosen[1]) {  
        alert('You found a match')  
        cards[optionOneId].setAttribute('src', 'images/blankred100.png')  
        cards[optionTwoId].setAttribute('src', 'images/blankred100.png')  
        cards[optionOneId].removeEventListener('click', flipCard)  
        cards[optionTwoId].removeEventListener('click', flipCard)  
        cardsWon.push(cardsChosen)  
      } else {  
        cards[optionOneId].setAttribute('src', 'images/granny100.png')  
        cards[optionTwoId].setAttribute('src', 'images/granny100.png')  
        alert('Sorry, try again')  
      }  
      cardsChosen = []  
      cardsChosenId = []  
      resultDisplay.textContent = cardsWon.length  
      if  (cardsWon.length === cardArray.length/2) {  
        resultDisplay.textContent = 'Congratulations! You found them all!'  
      }  
    }  
  
    //flip your card  
    function flipCard() {  
      var cardId = this.getAttribute('data-id')  
      cardsChosen.push(cardArray[cardId].name)  
      cardsChosenId.push(cardId)  
      this.setAttribute('src', cardArray[cardId].img)  
      if (cardsChosen.length ===2) {  
        setTimeout(checkForMatch, 500)  
      }  
    }  
  
    createBoard()  
  })