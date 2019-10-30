const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [".ts"],
      alias: {
        $api_bean: path.resolve(__dirname, "../00.api/bean/"),
        $api_model: path.resolve(__dirname, "../00.api/model/"),
        $api_util: path.resolve(__dirname, "../00.api/util/"),
        $api_component: path.resolve(__dirname, "../00.api/component/")
      }
    }
  },
  devServer: {
    proxy: {
      "/web/rest/*": { target: "http://192.168.1.242" },
      "/web/sec/*": { target: "http://192.168.1.242" },
      "/web/sd/*": { target: "http://192.168.1.242" },
      "/entrance/*": { target: "http://192.168.1.242" },
      "/video/rest/*": { target: "http://192.168.1.242" },
      "/dust/rest/*": { target: "http://192.168.1.242" },
      "/firstpage/*": { target: "http://192.168.1.242" },
      "/node/*": { target: "http://192.168.1.242" },
      "/realname/*": { target: "http://192.168.1.242" },
      "/bigscreen/*": { target: "http://192.168.1.242" }
    }
  }
};
