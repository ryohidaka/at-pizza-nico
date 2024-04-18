import {
  getCommentButtonElm,
  getIsPizzaCommand,
  requestOpenOrderPage,
  showStartComment,
} from "@/src/utils";

export default defineContentScript({
  matches: ["*://*.nicovideo.jp/*"],
  main() {
    // 起動時のコンソール出力
    showStartComment();

    // ボタン要素を取得
    const button = getCommentButtonElm();
    if (!button) return;

    const callPizza = () => {
      // ピザコマンドが含まれるか判定
      const isPizzaCommand = getIsPizzaCommand();

      // ピザコマンド以外の場合は何もしない
      if (!isPizzaCommand) return;

      // 新しいタブで注文ページを表示する
      requestOpenOrderPage();
    };

    // ボタンがクリックされたときのイベントリスナーを追加
    button.addEventListener("click", callPizza);

    // Enterキーが押されたときのイベントリスナーを追加
    document.addEventListener("keypress", function (e) {
      // キーがEnterかどうかを確認
      if (e.key === "Enter") {
        callPizza();
      }
    });
  },
});
