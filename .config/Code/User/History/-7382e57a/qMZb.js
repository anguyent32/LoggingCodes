const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext(){
	claire.classList.add('hidden')
	// go to img claire that declared on top where it = to img claire, and add the class="hidden"
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden')
}

function claireNext(){
	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
	/*INSERTCODE*/.classList.toggle(/*INSERTCODE*/)
}

function sharleenNext(){
	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
	/*INSERTCODE*/.classList.toggle(/*INSERTCODE*/)
}
