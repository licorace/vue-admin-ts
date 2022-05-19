// const { defineConfig } = require("@vue/cli-service")
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// const path = require("path")

// module.exports = {
//   // 1.配置方式一: CLI提供的属性
//   outputDir: "./build",
//   publicPath: "./",
//   // 2.配置方式二: 和webpack属性完全一致, 最后会进行合并
//   // configureWebpack: {
//   //   resolve: {
//   //     alias: {
//   //       components: '@/components'
//   //     }
//   //   }
//   // },
//   // configureWebpack: (config) => {
//   //   config.resolve.alias = {
//   //     '@': path.resolve(__dirname, 'src'),
//   //     components: '@/components'
//   //   }
//   // }
//   // 3.配置方式三:
//   chainWebpack: (config) => {
//     config.resolve.alias.set("@", path.resolve(__dirname, "src")).set("components", "@/components")
//   }
// }

// webpack.config.js

const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { defineConfig } = require("@vue/cli-service")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")
// const { IconsResolver } = require('unplugin-icons/resolver')

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "./build",
  //这个publicPath非常重要,配错了就会导致路由跳转不了,./是相对路径,./是当前目录,不代表根目录,/ 才代表根目录
  // publicPath: '/',

  configureWebpack: {
    externals: {
      echarts: "echarts"
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [
          // Auto register Element Plus components
          // 自动导入 Element Plus 组件
          ElementPlusResolver()
        ]
      }),
      require("unplugin-element-plus/webpack")({
        // options
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: "server",
        analyzerHost: "127.0.0.1",
        analyzerPort: 8889,
        reportFilename: "report.html",
        defaultSizes: "parsed",
        openAnalyzer: true,
        generateStatsFile: false,
        statsFilename: "stats.json",
        statsOptions: null,
        logLevel: "info"
      })
    ]
  },
  devServer: {
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:5000",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    },
    //这个配置非常重要,这个设置用于自动将404响应跳转到首页入口文件 index.html。
    //如果不配置的话,在createWebHistory这种路由模式下点击浏览器刷新按钮时将直接报Cannot GET /login的错误
    historyApiFallback: true
  }
})
