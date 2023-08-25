function allowDrop(event) {
    event.preventDefault();   //previene que refresque la pagina
  }


  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

  function drop(event) {
    event.preventDefault();
    const pieceId = event.target.id;
    const imageId = event.dataTransfer.getData("text");
    const piece = document.getElementById(pieceId);
    const image = document.getElementById(imageId);
    piece.appendChild(image);
  }