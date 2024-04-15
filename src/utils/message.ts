import { INITIAL_MESSAGE, OPEN_ORDER_PAGE_MESSAGE } from "../constants";

/**
 * 起動時のコンソール出力
 */
export const showStartComment = () => {
  console.info(INITIAL_MESSAGE);
};

/**
 * 注文画面表示時のコンソール出力
 */
export const showOpenOrderPageComment = () => {
  console.info(OPEN_ORDER_PAGE_MESSAGE);
};
