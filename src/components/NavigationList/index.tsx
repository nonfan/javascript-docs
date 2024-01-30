import React, { useEffect, useState } from "react";
import { ContextMenu, NavigationItem, Navigations } from "@site/src";
import TextSvg from "@site/src/assets/icons/TextSvg";
import { Menu, Item, useContextMenu, RightSlot } from "react-contexify";
import SettingSvg from "@site/src/assets/icons/SettingSvg";
import { Tooltip } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import BrowserOnly from "@docusaurus/BrowserOnly";
import "./index.scss";
import WebSvg from "@site/src/assets/icons/WebSvg";

interface Props {
  dataSource: Navigations;
  title: string;
}
function NavTitle(props: { title: string }) {
  return (
    <div className="tag-container">
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
      >
        <path
          d="M1004.512 444.256l-160-256c-23.36-37.408-64.384-60.16-108.512-60.16l-608 0c-70.688 0-128 57.312-128 128l0 512c0 70.688 57.312 128 128 128l608 0c44.128 0 85.12-22.752 108.512-60.192l160-256c25.984-41.44 25.984-94.144 0-135.648zM950.24 545.984l-160 256.064c-11.744 18.816-32.064 30.048-54.24 30.048l-608 0c-35.296 0-64-28.736-64-64l0-512c0-35.296 28.704-64 64-64l608 0c22.176 0 42.496 11.264 54.24 30.048l160 256c12.896 20.64 12.896 47.264 0 67.84zM736 416.096c-53.056 0-96 42.976-96 96s42.944 96 96 96c52.992 0 96-43.008 96-96 0-53.024-43.008-96-96-96zM736 576.128c-35.36 0-64-28.672-64-64s28.64-64 64-64c35.328 0 64 28.672 64 64s-28.672 64-64 64z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
        ></path>
      </svg>
      <div>{props.title}</div>
    </div>
  );
}

function NavBar(props: { navigationItem: NavigationItem }) {
  const {
    title,
    smallTitle,
    icon,
    url,
    contextMenu = [],
    officialWebsiteUrl,
  } = props.navigationItem;

  const [isShowDesc, setIsShowDesc] = useState(false);

  const [commonMenu, setCommonMenu] = useState<ContextMenu[]>([
    {
      title: "简介",
      icon: "Ctrl+E",
      action: "see-to-desc",
      keyMatcher: function (event) {
        return event.key === "e" && event.ctrlKey;
      },
    },
    {
      title: "设置",
      icon: SettingSvg,
      action: "open-setting",
    },
  ]);

  const { show } = useContextMenu({
    id: url,
  });

  function handleContextMenu(event: any) {
    show({
      event,
      props: {
        key: "value",
      },
    });
  }

  const renderIcon = () => {
    if (typeof icon === "string") {
      return <TextSvg text={icon} />;
    }

    if (typeof icon === "function") {
      return React.createElement(icon as React.FC);
    }

    return <TextSvg text="Logo" />;
  };

  const handleMenuItemOnClick = (item: ContextMenu) => {
    if (item.action === "see-to-website") {
      return window.open(item.url, "_blank");
    }

    if (item.action === "see-to-desc") {
      setIsShowDesc(true);
      return;
    }

    if (item.action === "open-setting") {
      console.log("打开设置");
      return;
    }

    if (item.action === "other") {
      console.log("其它操作");
      return;
    }
  };

  function handleTooltipColor() {
    const theme = document.querySelector("html").dataset["theme"];
    if (theme === "light") {
      return "#fff";
    }
    return "#2c2e2f";
  }

  useEffect(() => {
    if (officialWebsiteUrl) {
      setCommonMenu([
        {
          title: "官方文档",
          url: officialWebsiteUrl,
          action: "see-to-website",
          icon: WebSvg,
        },
        ...commonMenu,
      ]);
    }

    window.addEventListener("click", () => setIsShowDesc(false));
    return () => {
      window.removeEventListener("click", () => setIsShowDesc(false));
    };
  }, []);

  return (
    <StyleProvider container={document.querySelector(".box")}>
      <Tooltip
        title={smallTitle}
        open={isShowDesc}
        className="tooltip"
        color={handleTooltipColor()}
        overlayClassName="navbar-tooltip"
      >
        <div className="box" onContextMenu={handleContextMenu}>
          <a href={url} target="_blank" className="content border">
            <div className="navbar-icon">{renderIcon()}</div>
            <div className="desc">
              <div className="title color">{title}</div>
              <div className="small ellipsis">{smallTitle}</div>
            </div>
          </a>

          <Menu id={url} animation="scale">
            {[...contextMenu, ...commonMenu].map((item) => {
              return (
                <Item
                  key={item.title}
                  onClick={() => handleMenuItemOnClick(item)}
                  keyMatcher={item.keyMatcher}
                >
                  {item.title}
                  {!item.keyMatcher ? (
                    <RightSlot>{item.icon ? <item.icon /> : null}</RightSlot>
                  ) : (
                    <RightSlot>{item.icon as string}</RightSlot>
                  )}
                </Item>
              );
            })}
          </Menu>
        </div>
      </Tooltip>
    </StyleProvider>
  );
}

export default function NavigationList(props: Props) {
  const { dataSource, title } = props;
  return (
    <BrowserOnly>
      {() => {
        return (
          <>
            <NavTitle title={title} />
            <div className="navigator-container">
              {dataSource.map((item) => {
                return <NavBar key={item.url} navigationItem={item} />;
              })}
            </div>
          </>
        );
      }}
    </BrowserOnly>
  );
}
