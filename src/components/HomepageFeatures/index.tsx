import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import { NavigationItem, Navigations } from "@site/src";
import * as AllNavigation from "@site/src/data";
import TextSvg from "@site/src/assets/icons/TextSvg";
import { getRandomElements } from "@site/src/utils";
import { Skeleton } from "antd";

function Feature(props: NavigationItem) {
  const { title, smallTitle, url, icon } = props;
  const renderIcon = () => {
    if (typeof icon === "string") {
      return <TextSvg text={icon} />;
    }

    if (typeof icon === "function") {
      return React.createElement(icon as React.FC);
    }

    return <TextSvg text="Logo" />;
  };

  const handleOpen = (url: string) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  /**
   * 必须添加container用于指定 CSS 样式注入的容器，container: Element | ShadowRoot
   */
  return (
    <div
      className={clsx("col col--4 pointer homepage-features")}
      onClick={() => handleOpen(url)}
    >
      <div className="navigation-item">
        {props.title ? renderIcon() : <Skeleton.Image />}
      </div>
      <div className="text--center padding-horiz--md">
        <Skeleton
          loading={Boolean(!props.title)}
          paragraph={{ rows: 3 }}
          title={false}
        >
          <Heading as="h3">{title}</Heading>
          <p className="ellipsis">{smallTitle}</p>
        </Skeleton>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const initialFeatureItem = { title: "", smallTitle: "", url: "", icon: "" };
  const initialFeatureList = Array.from({ length: 6 }, () => ({
    ...initialFeatureItem,
  }));

  const [featureList, setFeatureList] =
    useState<Navigations>(initialFeatureList);

  /**
   * 获取随机的6项导航条：需要遍历AllNavigation对象，存储到一个数组内
   * 存在问题：遍历需要时间，若每次刷新都需要经过这个时间，会影响体验
   */
  function setRandomListToFeatureList() {
    function getInnermostList(
      object: unknown,
      all: NavigationItem[] = [],
    ): NavigationItem[] {
      return Object.values(object).flatMap((item) => {
        if (item instanceof Array) {
          return item;
        }
        return getInnermostList(item, all);
      });
    }

    const randomList = getRandomElements(getInnermostList(AllNavigation), 6);
    setFeatureList(randomList);
  }

  useEffect(() => {
    setRandomListToFeatureList();
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {featureList.map((props: NavigationItem, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
