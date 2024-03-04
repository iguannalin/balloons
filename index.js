window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const container = document.getElementById("container");
  const button = document.getElementById("button");
  let int;
  let card = 0;
  const balloons = [];
  const colors = ["green", "orange", "purple", "red"];
  const types = ["Balloon", "Pop"];
  colors.forEach((color) => balloons.push(`assets/${color}Balloon.gif`));
  console.log(balloons);

  function drawCard() {
    if (card > 5) return clearInterval(int);

    const text = `<!DOCTYPE html><html> <head> <title>${card+1}</title><meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      body{margin:0 auto;text-align:center;color: #f9faffde;
      text-shadow: #858ebc -2px 2px 8px;width:100vw;height:100vh;
      display:flex;align-items:center;justify-content:center;background-color:rgb(35, 35, 35);}
      img{width:60%;height:auto;}
    </style>
    <body>
      <div>
          <img src="https://iguannalin.github.io/balloons/${balloons[getRandomInt(0,balloons.length)]}"/>
      </div>
      <script>
      let x = (Math.random()*window.screenLeft)+(window.screenLeft-100);
      let y = window.screenTop;
      window.setInterval(()=>{
          y+=1;
          x=Math.random()>0.5?x+1:x;
          window.moveTo(x, y);},50);
          window.onclick = () => alert("clicked!");
      </script>
      </body></html>`;
    const blob = new Blob([text], {type: "text/html"});
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank', `popup,location,status,scrollbars,resizable,width=100,height=100,top=0,left=${getRandomInt(0,window.innerWidth)}`);
    window.URL.revokeObjectURL(blobUrl);
    card++;
  }

  button.onclick = () => {int = setInterval(drawCard, 250);};
});