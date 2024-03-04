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
  const popped = [];
  const colors = ["green", "orange", "purple", "red"];
  // assets created by www.2nd.systems!!!
  colors.forEach((color) => {
    balloons.push(`assets/${color}Balloon.gif`);
    popped.push(`assets/${color}Pop.gif`);
  });

  function drawCard() {
    if (Math.random() > 0.6) return; // manually staggering balloons
    if (card > getRandomInt(25,70)) return clearInterval(int);
    const rand = getRandomInt(0,balloons.length);
    const balloon = `https://iguannalin.github.io/balloons/${balloons[rand]}`;
    const pop = `https://iguannalin.github.io/balloons/${popped[rand]}`;
    const text = `<!DOCTYPE html><html> <head> <title>${card+1}</title><meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      body{margin:0 auto;text-align:center;color: #f9faffde;
      text-shadow: #858ebc -2px 2px 8px;width:100vw;height:100vh;
      display:flex;align-items:center;justify-content:center;background-color:rgb(35, 35, 35);}
      img{width:60%;height:auto;cursor:pointer;}
    </style>
    <body>
      <div>
          <img id="balloon" src="${balloon}"/>
      </div>
      <script>
        const balloon = document.getElementById("balloon");
        let x = window.screenLeft;
        let y = window.screenTop;
        window.setInterval(()=>{
          if (y >= screen.height-200) {
            balloon.src="${pop}";
            setTimeout(window.close, 350);
          }
          y+=1;
          x=Math.random()>0.3?x+0.5:Math.random()>0.3?x-0.5:x;
          window.moveTo(x, y);
        },25);
        window.onclick = () => {
          balloon.src="${pop}";
          setTimeout(window.close, 350);
        };
        </script>
        </body></html>`;
        const blob = new Blob([text], {type: "text/html"});
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank', `popup,location,status,scrollbars,resizable,width=100,height=100,top=${getRandomInt(0, screen.height/4)},left=${getRandomInt(200,screen.width-400)}`);
    window.URL.revokeObjectURL(blobUrl);
    card++;
  }

  button.onclick = () => {
    int = setInterval(drawCard, 500);
  };
});