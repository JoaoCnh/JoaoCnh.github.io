import React from "react";

import Php from "../components/common/langs/Php";
import Lang from "../components/common/langs/Lang";
import Ruby from "../components/common/langs/Ruby";
import Java from "../components/common/langs/Java";
import Css3 from "../components/common/langs/Css3";
import Sass from "../components/common/langs/Sass";
import Gulp from "../components/common/langs/Gulp";
import Node from "../components/common/langs/Node";
import Rails from "../components/common/langs/Rails";
import Html5 from "../components/common/langs/Html5";
import PgSql from "../components/common/langs/PgSql";
import Csharp from "../components/common/langs/Csharp";
import DotNet from "../components/common/langs/DotNet";
import Golang from "../components/common/langs/Golang";
import Express from "../components/common/langs/Express";
import Android from "../components/common/langs/Android";
import Webpack from "../components/common/langs/Webpack";
import Laravel from "../components/common/langs/Laravel";
import Bootstrap from "../components/common/langs/Bootstrap";
import Javascript from "../components/common/langs/Javascript";
import { default as ReactLogo } from "../components/common/langs/React";

/**
|--------------------------------------------------
| This is like this because webpack inline svg loaders
| are not working for me for some reason. Icons from Devicon
|--------------------------------------------------
*/

export const langIcon = (lang, props) => {
  switch (lang.toLowerCase()) {
    // Javascript
    case "javascript":
    case "js":
      return <Javascript {...props} />;
    // React
    case "jsx":
    case "react":
      return <ReactLogo {...props} />;
    // Ruby
    case "ruby":
    case "rb":
      return <Ruby {...props} />;
    // Ruby on Rails
    case "rails":
      return <Rails {...props} />;
    // Java
    case "java":
      return <Java {...props} />;
    // Css
    case "css":
    case "css3":
      return <Css3 {...props} />;
    // Sass
    case "scss":
    case "sass":
      return <Sass {...props} />;
    // Gulp
    case "gulp":
      return <Gulp {...props} />;
    // Html
    case "html":
    case "html5":
      return <Html5 {...props} />;
    // Android
    case "android":
      return <Android {...props} />;
    // Bootstrap
    case "bootstrap":
      return <Bootstrap {...props} />;
    // C#
    case "csharp":
    case "c#":
    case "cs":
      return <Csharp {...props} />;
    // .NET
    case "dotnet":
    case ".net":
    case "asp.net":
      return <DotNet {...props} />;
    // Express JS
    case "express":
      return <Express {...props} />;
    // Go
    case "go":
    case "golang":
      return <Golang {...props} />;
    // Node
    case "node":
    case "nodejs":
    case "node.js":
      return <Node {...props} />;
    // PostgreSQL
    case "postgresql":
    case "pgsql":
      return <PgSql {...props} />;
    // PHP
    case "php":
    case "shit": // AIR HORN SOUND!!!! PS: It's a fokin joke
      return <Php {...props} />;
    // Laravel
    case "laravel":
      return <Laravel {...props} />;
    // Webpack
    case "webpack":
      return <Webpack {...props} />;
    // DEFAULT
    default:
      return <Lang {...props} />;
  }
};
