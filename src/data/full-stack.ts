import { Navigations } from "@site/src";
import JavaScriptSvg from "@site/src/assets/icons/JavaScriptSvg";
import PythonSvg from "@site/src/assets/icons/PythonSvg";
import ElectronSvg from "@site/src/assets/icons/ElectronSvg";
import MongoDBSvg from "@site/src/assets/icons/MongoDBSvg";
import MySQLSvg from "@site/src/assets/icons/MySQLSvg";
import PostgreSQL from "@site/src/assets/icons/PostgreSQL";
import Redis from "@site/src/assets/icons/Redis";
import SQLiteSvg from "@site/src/assets/icons/SQLiteSvg";
import DockerSvg from "@site/src/assets/icons/DockerSvg";
import NginxSvg from "@site/src/assets/icons/NginxSvg";
import LinuxSvg from "@site/src/assets/icons/LinuxSvg";
import javaScriptSvg from "@site/src/assets/icons/JavaScriptSvg";
import ScrapySvg from "@site/src/assets/icons/ScrapySvg";
import PuppeteerSvg from "@site/src/assets/icons/PuppeteerSvg";
import DataStructureSvg from "@site/src/assets/icons/DataStructureSvg";
import RustSvg from "@site/src/assets/icons/RustSvg";
import GoSvg from "@site/src/assets/icons/GoSvg";
import CISvg from "@site/src/assets/icons/CISvg";
import KotlinSvg from "@site/src/assets/icons/KotlinSvg";
import JavaSvg from "@site/src/assets/icons/JavaSvg";

/**
 * 书中自有黄金屋
 */
export const GoldenHouse: Navigations = [
  {
    title: "JavaScript之重构",
    smallTitle:
      "重构（Refactoring）是指对现有代码进行调整和修改，以改善其结构、可读性、可维护性，而不改变其外部行为。在 JavaScript 中，重构是一个常见的实践，旨在提高代码质量和开发效率。",
    url: "https://agoodbook.github.io/javascript-refactor/",
    icon: javaScriptSvg,
  },
  {
    title: "JavaScript设计模式",
    smallTitle:
      "JavaScript 设计模式是一些可复用、通用的解决方案，用于解决在软件设计中经常遇到的问题。设计模式提供了一种在特定上下文中解决问题的方法，并有助于促进代码的可维护性、可读性和可扩展性。",
    url: "https://agoodbook.github.io/javascript-design-patterns/",
    icon: JavaScriptSvg,
  },
  {
    title: "数据结构与算法",
    smallTitle:
      "数据结构（Data Structure）是计算机中存储、组织数据的方式。数据结构是一种具有一定逻辑关系，在计算机中应用某种存储结构，并且封装了相应操作的数据元素集合。它包含三方面的内容，逻辑关系、存储关系及操作。不同种类的数据结构适合于不同种类的应用，而部分甚至专门用于特定的作业任务。",
    url: "https://agoodbook.github.io/data-structurer/",
    icon: DataStructureSvg,
  },
  {
    title: "持续集成",
    smallTitle:
      "持续集成（Continuous Integration，CI）是一种软件开发实践，通过自动化构建、测试和集成代码的流程，使开发人员能够频繁地提交代码，并确保新代码与主干分支的集成是持续且可靠的，从而提高开发效率、减少错误并提高代码质量。",
    url: "https://agoodbook.github.io/continuous-integration/",
    icon: CISvg,
  },
];

/**
 * 爬虫技术
 */
export const ReptileTechnology: Navigations = [
  {
    title: "Python",
    smallTitle:
      "Python是一种通用、高级、解释型编程语言。它并不局限于特定的技术领域，而是被广泛应用于多个领域。",
    url: "https://agoodbook.github.io/python/",
    icon: PythonSvg,
  },
  {
    title: "Scrapy",
    smallTitle:
      "Scrapy 是一个基于Python的开源爬虫框架，被广泛用于抓取和提取网站数据。它具有灵活的架构、中间件支持、规则系统等特点。",
    url: "https://agoodbook.github.io/scrapy/",
    icon: ScrapySvg,
  },
  {
    title: "Puppeteer",
    smallTitle:
      "Puppeteer (Node.js)： Puppeteer 是一个由Google开发的Node.js库，用于控制Headless Chrome或Chromium浏览器。它适用于需要处理JavaScript渲染的爬虫任务。",
    url: "https://agoodbook.github.io/puppeteer/",
    icon: PuppeteerSvg,
  },
];

/**
 * 桌面应用程序开发框架
 */
export const DesktopAppFramework: Navigations = [
  {
    title: "Electron",
    smallTitle:
      "Electron 是一个开源的跨平台桌面应用程序开发框架，它允许开发者使用常用的 Web 技术，如 HTML、CSS 和 JavaScript/TypeScript，构建桌面应用程序。",
    url: "https://agoodbook.github.io/electron/",
    icon: ElectronSvg,
  },
];

/**
 * 数据库
 */
export const Databases: Navigations = [
  {
    title: "MongoDB",
    smallTitle:
      "MongoDB是一种NoSQL文档型数据库，以其灵活的数据模型和便于水平扩展而闻名。它适用于大量文档的存储和查询，特别在Web应用和大数据领域广泛使用。",
    url: "https://agoodbook.github.io/mongodb/",
    icon: MongoDBSvg,
  },
  {
    title: "MySQL",
    smallTitle:
      "MySQL是一种开源的关系型数据库管理系统（RDBMS），在Web应用和企业应用中得到广泛应用。它支持SQL查询语言，具有稳定性和可靠性。",
    url: "https://agoodbook.github.io/mysql/",
    icon: MySQLSvg,
  },
  {
    title: "PostgreSQL",
    smallTitle:
      "PostgreSQL是一种强大的开源关系型数据库系统，具有高度的可扩展性和支持复杂的数据类型。它在数据安全性和完整性方面有很强的特性，适用于各种应用场景。",
    url: "https://agoodbook.github.io/postgresql/",
    icon: PostgreSQL,
  },
  {
    title: "Redis",
    smallTitle:
      "Redis是一种开源的键值对存储数据库，常用作缓存系统和消息队列。由于其高性能、低延迟和支持多种数据结构，Redis在大规模分布式系统中得到广泛使用。",
    url: "https://agoodbook.github.io/redis/",
    icon: Redis,
  },
  {
    title: "SQLite",
    smallTitle:
      "QLite是一种嵌入式关系型数据库引擎，具有轻量级和零配置的特点。由于其小巧的体积和易于集成，SQLite在移动应用和嵌入式系统中得到广泛使用。",
    url: "https://agoodbook.github.io/sqlite/",
    icon: SQLiteSvg,
  },
];

/**
 * 服务器端技术
 */
export const ServerSideTechnology: Navigations = [
  {
    title: "Docker",
    smallTitle:
      "Docker是一种轻量级的容器化平台，允许开发者将应用程序和所有依赖项打包到一个独立的容器中。这个容器可以在任何支持Docker的环境中运行，提供了一致性、可移植性和高效性，简化了应用程序的开发、测试和部署过程。",
    url: "https://agoodbook.github.io/docker/",
    icon: DockerSvg,
  },
  {
    title: "Nginx",
    smallTitle:
      "Nginx（发音为engine-x）是一个高性能的开源Web服务器和反向代理服务器。它设计简洁、轻量级，以高效地处理并发连接而闻名。Nginx不仅用于提供静态内容，还可作为反向代理，将客户端请求转发给后端的应用服务器。其灵活性、可扩展性和卓越的性能使其成为许多Web应用和服务的首选服务器。",
    url: "https://agoodbook.github.io/nginx/",
    icon: NginxSvg,
  },
  {
    title: "Linux",
    smallTitle:
      "Linux是一种开源的、多用户、多任务、支持多种硬件架构的操作系统内核。它以稳定性、安全性和灵活性著称，广泛用于服务器、嵌入式系统和个人计算机。 Linux系统采用UNIX风格的设计，具有强大的命令行界面，同时支持图形用户界面，例如GNOME和KDE。 Linux操作系统的核心思想是开源合作，用户可以自由使用、修改和分发Linux。",
    url: "https://agoodbook.github.io/linux/",
    icon: LinuxSvg,
  },
];

/**
 * 编程语言
 */
export const ProgramLanguage: Navigations = [
  {
    title: "Rust",
    smallTitle:
      "Rust 是一种系统级编程语言，注重安全性、并发性和性能。由 Mozilla 公司开发，于 2010 年首次公开发布。Rust 的设计目标之一是提供一种能够防止空指针引用、数据竞争等一系列内存安全问题的编程语言，同时仍然保持高性能。",
    url: "https://agoodbook.github.io/rust/",
    icon: RustSvg,
  },
  {
    title: "Go",
    smallTitle:
      "Go（又称Golang）是由Google开发的开源编程语言，以简洁、高效和并发支持为特点。它具有清晰的语法、内置并发机制和自动垃圾回收，适用于构建高性能、可维护的软件。Go的快速编译、跨平台支持和适用于分布式系统的特性使其在云计算和网络编程领域广受欢迎。",
    url: "https://agoodbook.github.io/go/",
    icon: GoSvg,
  },
  {
    title: "Java",
    smallTitle:
      "Java是一种高度可移植、面向对象、多线程且具有自动内存管理的编程语言，它的设计目标是实现一次编写、到处运行（Write Once, Run Anywhere，WORA），使得开发者能够在不同平台上轻松构建应用程序。Java广泛应用于企业级应用、移动应用、嵌入式系统和云计算等领域，拥有强大的生态系统和丰富的库，成为一门备受欢迎的编程语言。",
    url: "https://agoodbook.github.io/java/",
    icon: JavaSvg,
  },
  {
    title: "kotlin",
    smallTitle:
      "Kotlin是由JetBrains公司开发的现代编程语言，其简洁的语法、空安全性、与Java的完美互操作性、扩展函数、函数式编程支持以及协程等特性，使其成为一种强大而灵活的编程语言，广泛用于Android应用开发以及各类企业级应用程序的构建。有 Kotlin/JS 插件的 Kotlin 可以用于编写客户端和服务器端的 JavaScript 应用程序。",
    url: "https://agoodbook.github.io/kotlin/",
    icon: KotlinSvg,
  },
];
