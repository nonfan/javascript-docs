import { ColorPicker, Slider } from "antd";
import MainComponent from "@site/src/components/CommonComponents/MainComponent";
import React from "react";

function NProgressStyle() {
  function setNProgressBgColor(value: string) {
    document.documentElement.style.setProperty("--nprogress-bg", value);
  }

  let timer: any;
  function setHeight(value: number) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      document.documentElement.style.setProperty(
        "--nprogress-height",
        value + "px",
      );
    }, 100);
  }

  return (
    <MainComponent>
      <div className="title">全局样式配置，请点击播放按钮查看效果。</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>背景色: &nbsp;</span>
        <ColorPicker
          showText
          onChangeComplete={(color) => {
            setNProgressBgColor(color.toHexString());
          }}
        />
      </div>
      <div>
        <span>进度条高度: </span>
        <Slider defaultValue={5} onChange={setHeight} />
      </div>
    </MainComponent>
  );
}

export default NProgressStyle;
