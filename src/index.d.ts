import React from "react";

interface Children {
  title: string;
  icon: React.FC | string;
  url: string;
}

export interface ContextMenu {
  title: string;
  url?: string;
  icon?: React.FC | string;
  showTip?: boolean;
  action: "see-to-website" | "see-to-desc" | "open-setting" | "other";
  keyMatcher?: (e: KeyboardEvent) => boolean;
}

export type NavigationItem = {
  title: string;
  smallTitle: string;
  url: string;
  icon: React.FC | string;
  children?: Children[];
  officialWebsiteUrl?: string;
  contextMenu?: ContextMenu[];
};

export type Navigations = NavigationItem[];

export interface Column {
  title: string;
  dataIndex: string;
  width?: number;
  render?: (data: any) => any;
}

export type Columns = Column[];

export type DataSource = {
  [key: string]: unknown;
};
