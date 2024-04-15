import { COMMENT_BUTTON_CLASS } from "../constants";

/**
 * コメントボタンの要素を取得
 * @returns
 */
export const getCommentButtonElm = (): HTMLButtonElement | null => {
  const button = document.querySelector(COMMENT_BUTTON_CLASS);
  return button as HTMLButtonElement;
};
