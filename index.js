function displayRandomText() {
    var containerElement = document.getElementById("container");
    var words = ["信仰しろ", "バルベニア万歳", "バルベニア神は絶対", "信仰しろ"];
    var displayTime = 100000; // 表示時間（ミリ秒）
    var fadeOutDuration = 5000; // フェードアウトの時間（ミリ秒）
    
    function createTextElement() {
      var textElement = document.createElement("span");
      textElement.className = "text";
      textElement.textContent = words[Math.floor(Math.random() * words.length)];
      
      var fontSize = Math.floor(Math.random() * 20) + 50; // ランダムな文字の大きさ（12から31までの範囲）
      textElement.style.fontSize = fontSize + "px";
      
      var randomLeft = Math.random() * (window.innerWidth - textElement.offsetWidth);
      var randomTop = Math.random() * (window.innerHeight - textElement.offsetHeight);
      
      textElement.style.top = randomTop + "px";
      textElement.style.left = randomLeft + "px";
      
      containerElement.appendChild(textElement);

      setTimeout(function() {
        textElement.style.opacity = 0;
        setTimeout(function() {
          containerElement.removeChild(textElement);
        }, fadeOutDuration);
      }, displayTime);
    }
    
    setInterval(createTextElement, 200); // 0.2秒ごとにテキストを表示
  }

  /* ここまで宗教の演出
  */

/*画像光る*/ 
  function addHighlight(element) {
    element.classList.add("highlight");
  }

  function removeHighlight(element) {
    element.classList.remove("highlight");
  }
  /*画像光る */
  
 