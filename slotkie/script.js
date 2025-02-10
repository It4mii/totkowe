document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const body = document.body;

    let fontSize = 16; 

    noButton.addEventListener("click", function () {
        if (noButton.innerText === "nie.") {
            const interval = setInterval(function () {
                fontSize += 10; 
                yesButton.style.fontSize = fontSize + "px";

                
                if (fontSize >= window.innerHeight) {
                    clearInterval(interval); 
                    yesButton.style.width = "100vw";
                    yesButton.style.height = "100vh";
                    yesButton.style.fontSize = "5vw";
                    yesButton.innerText = "NIE MASZ WYJŚCIA!";

                    
                    noButton.innerText = "JASNE, ŻE TAK";
                    noButton.style.fontSize = "24px";
                    noButton.style.backgroundColor = "#ff69b4"; 
                    noButton.style.color = "white";
                }
            }, 100); 
        } else if (noButton.innerText === "JASNE, ŻE TAK") {
            
            yesButton.style.display = "none";
            noButton.style.display = "none";

            
            const heading = document.createElement("h1");
            heading.innerText = "YUPPIE, TOTAM CIĘ!";
            heading.style.position = "absolute";
            heading.style.top = "30%";
            heading.style.left = "50%";
            heading.style.transform = "translate(-50%, -50%)";
            heading.style.color = "#ff69b4"; // 
            heading.style.fontSize = "40px";
            heading.style.fontWeight = "bold";
            heading.style.fontFamily = "'Indie Flower', cursive";
            heading.style.textAlign = "center";

            
            const catGif = document.createElement("img");
            catGif.src = "https://i.pinimg.com/originals/25/e5/43/25e543bf9e35171ef1fdd476468844d7.gif"; 
            catGif.style.position = "absolute";
            catGif.style.top = "50%";
            catGif.style.left = "50%";
            catGif.style.transform = "translate(-50%, -50%)";
            catGif.style.width = "300px"; 

            
            body.appendChild(heading);
            body.appendChild(catGif);
        }
    });
});

