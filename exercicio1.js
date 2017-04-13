// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

let buttonExpand = document.querySelectorAll('.botao-expandir-retrair');

for(let exp of buttonExpand){
	exp.addEventListener('click', function(evt){
			let par = evt.target.parentNode;
			if(par.classList.contains('expandido')){
				par.classList.remove('expandido');
				evt.target.innerHTML = '+';
			}
			else{
				par.classList.add('expandido');
				evt.target.innerHTML= '-';
			}
		
	});
}

