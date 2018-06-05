let pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    var targetUrl = `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`

    //建立 XMLHttpRequest 實例才能發送ajax
    var ourRequest = new XMLHttpRequest();

    // 設定http方法和目標網址
    ourRequest.open('GET', targetUrl)

    // 一但request事件完成後執行該函式，回傳的json為字串，需用JSON.parse轉換成可讀物件
    ourRequest.onload = () => {
        let ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    }
    // 一但ourRequest open了即可發送 http 一次，並關閉 open 狀態
    ourRequest.send();
    pageCounter++;
    if(pageCounter > 3){
        document.getElementById("btn").style.display="none"
    }
});

let renderHTML = (data) => {
    let htmlString = '';

    for(let i=0; i < data.length; i++){
        //htmlString += '<p>' + data[i].name + 'is a' +  data[i].species + '<p>' ;
        htmlString += `<p> ${data[i].name} is a ${data[i].species} <p>` ;
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}