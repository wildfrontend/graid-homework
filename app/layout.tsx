import React, { PropsWithChildren } from "react";
import "./globals.css";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Layout className="min-h-screen">
          <Header style={{ display: "flex", alignItems: "center" }}>
            <div className="demo-logo" />
          </Header>
          <Content style={{ padding: "0 48px" }}>
            <Layout
              style={{
                padding: "24px 0",
                width:"1024px",
                margin:"0 auto"
              }}
            >
              {children}
            </Layout>
          </Content>
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
