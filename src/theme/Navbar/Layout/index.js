import React, { useEffect } from "react";
import Layout from "@theme-original/Navbar/Layout";
import useMessage from "antd/es/message/useMessage";

function clearEmojiState(element) {
  Array.from(element.children).map((item) => {
    changeEmojiState(item, "remove");
  });
}

function clearFormValue() {
  Object.keys(arguments).forEach((item) => {
    arguments[item].value = "";
  });
}

function clearErrTip(_this) {
  _this.innerHTML = "";
}

function changeEmojiState(_this, operator) {
  _this.classList[operator]("emoji-active");
}

function validateForm(email, content, emoji) {
  if (!email.value.trim()) {
    return "邮箱不能为空";
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email.value.trim())) {
    return "请输入正确的邮箱格式";
  }

  if (!content.value.trim()) {
    return "请填写您要反馈的内容";
  }

  if (!emoji) {
    return "在发送前，请选择一种表情哦";
  }

  return "";
}

function isShowFeedbackModal(_this, state) {
  _this.style.display = state;
}

export default function LayoutWrapper(props) {
  const [messageApi, context] = useMessage();
  useEffect(() => {
    if (document) {
      /*获取点击反馈按钮、发送按钮等元素*/
      const feedbackButton = document.querySelector(".custom-feedback");
      const sendButton = document.querySelector(".custom-feedback .send-btn");

      /*发送反馈模态框*/
      const sendContainer = document.querySelector(
        ".custom-feedback .send-container",
      );

      /*获取email、content、emoji等表单值*/
      let emojiValue = "";
      const emailElement = document.querySelector(
        ".custom-feedback #feedback-email",
      );
      const contentElement = document.querySelector(
        ".custom-feedback #feedback-content",
      );

      /*错误提示元素*/
      const errTipElement = document.querySelector(".custom-feedback .tips");

      /*获取emoji父容器元素*/
      const emojiContainer = document.querySelector(
        ".custom-feedback .emoji-container",
      );

      /*监听feedback按钮的点击事件*/
      feedbackButton.addEventListener("click", () => {
        isShowFeedbackModal(sendContainer, "block");
      });

      sendButton.addEventListener("click", (event) => {
        event.stopPropagation();
        const errTipContent = validateForm(
          emailElement,
          contentElement,
          emojiValue,
        );
        if (errTipContent) {
          errTipElement.innerHTML = errTipContent;
          return;
        }
        messageApi.success("您已提交反馈，稍后您将收到我的回复").then(() => {});
        console.log({
          emoji: emojiValue,
          email: emailElement.value,
          content: contentElement.value,
        });
        closeModal();
      });

      emojiContainer.addEventListener("click", (e) => {
        clearEmojiState(emojiContainer);
        if (e.target instanceof HTMLImageElement) {
          changeEmojiState(e.target, "add");
          emojiValue = e.target.dataset.emoji;
        }
      });

      function closeModal() {
        clearFormValue(emailElement, contentElement);
        clearEmojiState(emojiContainer);
        clearErrTip(errTipElement);
        isShowFeedbackModal(sendContainer, "none");
      }

      window.addEventListener("click", (event) => {
        if (!feedbackButton.contains(event.target)) {
          closeModal();
        }
      });
    }
  }, []);

  return (
    <>
      {context}
      <Layout {...props} />
    </>
  );
}
