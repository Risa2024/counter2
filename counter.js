// 即時実行関数で全体を囲み、グローバルスコープを汚さないようにしています
(() => {
  // カウンターの値を表示する要素を取得
  const $counter = document.getElementById("js-counter");
  // 「const」で変更しない箱を作る
  // 「$counter」という名前を付ける
  // 「webページの要素をIDを使って探して、その箱（定数）に入れる」

  // ボタンがクリックされた時の処理を定義
  const clickHandler = (e) => {
    // クリックされたボタン要素を取得
    const $targetButton = e.currentTarget;
    // 現在のカウンター値を数値として取得
    let currentCount = parseInt($counter.textContent);
    // parseInt は厳密にはグローバル (どこでも呼び出せる場所) にある関数なので、普段「関数」と呼んだりします。
    // 「文字を数字に変える用の道具」

    // プラスボタンがクリックされた場合は加算、マイナスボタンの場合は減算
    if ($targetButton.textContent === "+") {//=== は 「厳密(げんみつ)なイコール」 と呼ばれています。
      $counter.textContent = currentCount + 1;
    } else {
      $counter.textContent = currentCount - 1;
    }
  };

  // ページ内の全ての「js-button」クラスを持つ要素に対して
  // クリックイベントリスナーを設定
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
