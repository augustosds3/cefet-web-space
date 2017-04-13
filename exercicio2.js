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

  var n = 0;

  function next(){
  	if (n == todasAsImagens.length-1) {
  		n=0;
  		document.getElementById('slide').src = servidorDasImagens.concat(todasAsImagens[n]);
  	} else{
      document.getElementById('slide').src = servidorDasImagens.concat(todasAsImagens[n+1]);
     n++;
    };
  	
  }

  function previous(){
    if (n == 0) {
      n=todasAsImagens.length-1;
      document.getElementById('slide').src = servidorDasImagens.concat(todasAsImagens[n]);

    } else{
      document.getElementById('slide').src = servidorDasImagens.concat(todasAsImagens[n-1]);
      n--;
    };
    
  }
