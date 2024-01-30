import { useEffect, useState } from "react";
import { message, Tooltip } from "antd";
import { getRandomPoetry } from "@site/src/apis";
import "./index.css";

export default function Poetry() {
  const [messageApi, contextHolder] = message.useMessage();
  const [isShowName, setIsShowName] = useState(false);
  const [info, setInfo] = useState({ poetry: "", name: "" });

  function handleRandomPoetry() {
    getRandomPoetry()
      .then((data) => {
        if (!data.poetry) {
          return handleRandomPoetry();
        }
        setInfo(data);
        localStorage.setItem(
          "footer-word",
          JSON.stringify({ ...data, updateAt: Date.now() }),
        );
      })
      .catch(async () => {
        await messageApi.error("无法正确获取诗句");
      });
  }

  function handleIsRefreshPoetry() {
    const item = localStorage.getItem("footer-word");
    if (!item) {
      return handleRandomPoetry();
    }

    const { poetry, name, updateAt } = JSON.parse(item);
    if (!poetry || Date.now() - updateAt >= 1000 * 60 * 10) {
      return handleRandomPoetry();
    }
    return setInfo({ poetry, name });
  }

  function handleCopyHitokoto() {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(info.poetry).then(async () => {
        await messageApi.success("已复制到剪贴板");
      });
    }
  }

  useEffect(() => {
    handleIsRefreshPoetry();
  }, []);

  return (
    <>
      {info.poetry ? (
        <div className="poetry">
          {contextHolder}
          <div
            onMouseEnter={() => setIsShowName(true)}
            onMouseLeave={() => setIsShowName(false)}
            className="hitokoto"
            onClick={handleCopyHitokoto}
          >
            <Tooltip
              color="var(--ifm-color-primary)"
              placement="top"
              title="点击复制"
            >
              「 {info.poetry}」
            </Tooltip>
            <div
              style={{
                opacity: isShowName ? 1 : 0,
              }}
              className="from"
            >
              {info.name || "来源网络"}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
