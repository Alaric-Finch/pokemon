const container =document.getElementById("container");
let baseUrl = "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";
// for(let i =1;i <= 150;i++){
//     //tao phan tu con moi
//     const newImg = document.createElement("img");
//     newImg.src = `${baseUrl}${i}.png`;
//     //them phan tu con vao container
//     container.appendChild(newImg);
// }

for(let i =1;i <= 150;i++){
    //tao 1 the div de chua phan tu img va so thu tu
    const newDiv = document.createElement("div");
    // them div vao cuoi container
    //va lay node moi tao ra va gian va parentDiv
    const parentDiv = container.appendChild(newDiv);
    //tao phan tu con them vao parentDiv
    const newImg = document.createElement("img");
    newImg.src = `${baseUrl}${i}.png`;
    // them vao trong khoi parentDiv
    parentDiv.appendChild(newImg);
    // them the span so thu tu vao trong parentDiv
    const newSpan = document.createElement("span");
    newSpan.innerText = `#${i}`;
    parentDiv.appendChild(newSpan);
}
