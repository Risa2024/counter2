
(() => {
  // カウンターの値を表示する要素を取得
  const $counter = document.getElementById("js-counter");// 「webページの要素をIDを使って探して、その箱（定数）に入れる」

  // ボタンがクリックされた時の処理を定義
  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);

    // プラスボタンがクリックされた場合は加算、マイナスボタンの場合は減算
    if ($targetButton.textContent === "+") {//=== は 「厳密(げんみつ)なイコール」 と呼ばれています。
      $counter.textContent = currentCount + 1;
    } else {
      $counter.textContent = currentCount - 1;
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
