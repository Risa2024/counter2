// 即時実行関数で全体を囲み、グローバルスコープを汚さないようにしています
(() => {
  // カウンターの値を表示する要素を取得
  const $counter = document.getElementById("js-counter");

  // ボタンがクリックされた時の処理を定義
  const clickHandler = (e) => {
    // クリックされたボタン要素を取得
    const $targetButton = e.currentTarget;
    // 現在のカウンター値を数値として取得
    let currentCount = parseInt($counter.textContent);

    // プラスボタンがクリックされた場合は加算、マイナスボタンの場合は減算
    if ($targetButton.textContent === "+") {
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
