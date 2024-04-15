import {
  ORDER_PAGE_URL,
  REQUEST_OPEN_ORDER_PAGE_ACTION,
} from "@/src/constants";
import { showOpenOrderPageComment } from "@/src/utils";

export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });

  // メッセージを受信したときの処理
  browser.runtime.onMessage.addListener((message) => {
    if (message.action === REQUEST_OPEN_ORDER_PAGE_ACTION) {
      // 別タブで注文ページを開く
      browser.tabs.create({ url: ORDER_PAGE_URL });

      // 注文画面表示時のコンソール出力
      showOpenOrderPageComment();
    }
  });
});
