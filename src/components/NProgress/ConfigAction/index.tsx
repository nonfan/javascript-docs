import NProgress from "@site/src/utils/nprogress";
import { Button, Divider, InputNumber, Space, Switch, Tag } from "antd";
import MainComponent from "@site/src/components/CommonComponents/MainComponent";
import React, { useState } from "react";
function ConfigAction() {
  const [isStarted, setIsStarted] = useState<boolean | null>();

  return (
    <MainComponent>
      <div className="title">全局配置操作按钮，请点击播放按钮查看效果。</div>
      <Space split={<Divider type="vertical" />} wrap>
        <Switch
          checkedChildren="开启进度环"
          unCheckedChildren="禁用进度环"
          defaultChecked
          onChange={(flag) => NProgress.configure({ showSpinner: flag })}
        />
        <Switch
          checkedChildren="开启进度条步进"
          unCheckedChildren="关闭进度条步进"
          defaultChecked
          onChange={(flag) => NProgress.configure({ trickle: flag })}
        />
        <Space>
          <span>每次步进间隔，单位毫秒ms</span>
          <InputNumber
            min={1}
            max={20000}
            defaultValue={800}
            onChange={(number) => NProgress.configure({ trickleSpeed: number })}
          />
        </Space>
        <Space>
          <Button onClick={() => setIsStarted(NProgress.isStarted())}>
            点击检查进度条是否已经启动
          </Button>
          <Tag color={isStarted ? "#2e8555" : "red"}>
            {isStarted ? "开启状态" : "关闭状态"}
          </Tag>
        </Space>
      </Space>
    </MainComponent>
  );
}

export default ConfigAction;
