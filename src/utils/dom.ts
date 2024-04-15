import { COMMENT_BUTTON_CLASS, COMMENT_FORM_CLASS } from "../constants";

/**
 * コメントボタンの要素を取得
 * @returns
 */
export const getCommentButtonElm = (): HTMLButtonElement | null => {
  const button = document.querySelector(COMMENT_BUTTON_CLASS);
  return button as HTMLButtonElement;
};

/**
 * コメントフォームの要素を取得
 * @returns
 */
export const getCommentTextArea = (): HTMLTextAreaElement | null => {
  const textarea = document.querySelector(
    COMMENT_FORM_CLASS,
  ) as HTMLTextAreaElement;

  return textarea;
};
