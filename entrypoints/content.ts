import { getCommentButtonElm, getIsPizzaCommand } from "../src/utils";

export default defineContentScript({
  matches: ["*://*.google.com/*"],
  main() {
    console.log("Hello content.");

    // ボタン要素を取得
    const button = getCommentButtonElm();
    if (!button) return;

    // ボタンがクリックされたときのイベントリスナーを追加
    button.addEventListener("click", function () {
      // ピザコマンドが含まれるか判定
      const isPizzaCommand = getIsPizzaCommand();

      // ピザコマンド以外の場合は何もしない
      if (!isPizzaCommand) return;
    });
  },
});
