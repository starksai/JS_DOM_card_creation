
let card = document.getElementById("card");
card.style.backgroundColor="rgb(251, 246, 233)";
card.style.width="300px";
card.style.height="auto";
card.style.border="1px solid black";
card.style.boxShadow="1px 1px 10px black"
card.style.padding="10px";
card.style.marginBottom="20px"
card.innerHTML=`
                <h2 style="text-align: center;"> Game Changer </h2>
                <img src='https://images.filmibeat.com/img/2024/07/gamechanger-1721585650.jpg' width='100%' heigth='100%'>
                <p> <strong>Hero</strong> : Ram Chran </p>
                <p> <strong>Herion</strong> : Kiara Advani </p>
                <p> <strong>Directed by</strong> : S. Shankar </p>
                <center><button  id="btn"> Book Now </button></center>
                `

let btn = document.getElementById("btn");
btn.style.backgroundColor="#8174A0";
btn.style.color="white";
btn.style.padding="10px 20px";
btn.style.border="2px solid red";
btn.style.borderRadius="5px";
btn.style.cursor="pointer";

