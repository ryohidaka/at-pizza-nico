import { getCommentButtonElm } from "@/src/utils";

export default defineContentScript({
  matches: ["*://*.google.com/*"],
  main() {
    console.log("Hello content.");

    // ボタン要素を取得
    const button = getCommentButtonElm();
    if (!button) return;

    // ボタンがクリックされたときのイベントリスナーを追加
    button.addEventListener("click", function () {});
  },
});
