import BrowserOnly from "@docusaurus/BrowserOnly";
import { ConfigProvider } from "antd";
import "./main.css";

function Index(props: { children: any }) {
  return (
    <BrowserOnly>
      {() => (
        <ConfigProvider
          theme={{
            cssVar: true,
            token: {
              colorPrimary: "#2e8555",
            },
          }}
        >
          {props.children}
        </ConfigProvider>
      )}
    </BrowserOnly>
  );
}

export default Index;
