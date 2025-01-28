(() => {
  // カウンターの値を表示する要素を取得
  const $counter = document.getElementById("js-counter"); // 「webページの要素をIDを使って探して、その箱（定数）に入れる」

  // ボタンがクリックされた時の処理を定義
  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);

    // プラスボタンがクリックされた場合は加算、マイナスボタンの場合は減算
    if ($targetButton.textContent === "+") {
      //=== は 「厳密(げんみつ)なイコール」 と呼ばれています。
      $counter.textContent = currentCount + 1;

      // カウントが10または20になったらアラートを表示
      if (currentCount + 1 === 5) {
        alert("カウントが5になりました🎉");
      } else if (currentCount + 1 === 10) {
        alert("カウントが10になりました🎉");
      } else if (currentCount + 1 === 15) {
        alert("カウントが15になりました🎉");
      } else if (currentCount + 1 === 20) {
        alert("カウントが20になりました🎉");
      }

      // カウントが40の時は背景色を変更
      if (currentCount + 1 === 25) {
        document.body.style.backgroundColor = "#ffebcd";// ベージュ色に変更
      }
    } else {
      $counter.textContent = currentCount - 1;
      // 40から減らした時は背景色を元に戻す
      if (currentCount === 25) {
        document.body.style.backgroundColor = "";
      }
    }
  };

  // ページ内の全ての「js-button」クラスを持つ要素に対してクリックイベントリスナーを設定
  for (
    let index = 0;
    index < document.getElementsByClassName("js-button").length;
    index++
  ) {
    document
      .getElementsByClassName("js-button")
      [index].addEventListener("click", (e) => clickHandler(e));
  }
})();
