// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

  var i = 0;

  function nextPrev(){
  	if (i > todasAsImagens.length) {
  		i=0;
  		document.getElementById('slide').src = todasAsImagens[i];
  		i++;
  	};
  	
  }
