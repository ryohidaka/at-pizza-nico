import { getCommentTextArea } from ".";
import { PIZZA_COMMAND } from "../constants";

/**
 * コメントの内容にピザコマンドが含まれるか判定する
 * @returns
 */
export const getIsPizzaCommand = (): boolean => {
  const textarea = getCommentTextArea();
  if (!textarea) return false;

  // テキストエリアの値を取得
  const text = textarea.value;

  // ピザコマンドが含まれるか判定
  return text.includes(PIZZA_COMMAND);
};

/**
 * 注文画面の表示を要求する
 */
export const requestOpenOrderPage = () => {
  // @ts-ignore
  chrome.runtime.sendMessage({ action: REQUEST_OPEN_ORDER_PAGE_ACTION });
};
