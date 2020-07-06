//SELECTORS
let nextjoke = document.querySelector('.submit')
let getjoke = document.querySelector('.getjoke')
let punchline= document.querySelector('.line')
let title = document.querySelector('.title')
let mainDiv = document.querySelector('main')
let introDiv = document.querySelector('.intro')

//FUNCTIONS
function fetchjokes () {
	fetch('https://official-joke-api.appspot.com/random_joke')
	.then(response => response.json())
	.then (data => {
		title.textContent = data.setup
		punchline.textContent = data.punchline
	})
	.catch(err => {
		console.error(err)
		title.textContent = "Unable to load joke"
		punchline.textContent = "Kindly check your network and refresh the page"
	})
	
}

//EVENT LISTENERS
nextjoke.addEventListener('click', function (e) {
	 e.preventDefault()
	 fetchjokes()
})
getjoke.addEventListener('click', function (e) {
	e.preventDefault()
	mainDiv.classList.add('show')
	introDiv.classList.replace('intro', 'hide')
	fetchjokes()
})