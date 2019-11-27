function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
      ctx.fillStyle = "rgb(200,0,0)"

      ctx.strokeRect(200, 25, 100, 100);
      ctx.fillStyle = "rgb(0,200,0)"
    }
  }
  draw()

  /* function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true);  // Cercle extérieur
      ctx.moveTo(110,75);
      ctx.arc(75, 75, 35, 0, Math.PI, false);  // Bouche (sens horaire)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Oeil gauche
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Oeil droite

      ctx.fillStyle = "rgb(200,0,0)"
      ctx.stroke();

    }
  } */