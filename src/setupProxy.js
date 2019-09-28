const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'https://shopapi.smartisan.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '' 
      }
    })
  );



  app.use(
    proxy('/www_json', {
      target: 'https://resource.smartisan.com',
      changeOrigin: true,
    })
  );
  
  app.use(
    proxy('/users', {
      target: 'http://10.60.13.121:3000',
      // 跨域时一般都设置该值 为 true
      changeOrigin: true,
      // 重写接口路由
      // pathRewrite: {
      //   '^/api': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
      // }
    })
  );
  // app.use(
  //   proxy(
  //     "/apiw",{
  //       target:"https://www.smartisan.com",
  //       changeOrigin:true,
  //       pathRewrite:{
  //         "^/apiw" : ""
  //       }
  //     }
  //   )
  // );
  // app.use(
  //   proxy(
  //     "/apim",{
  //       target:"https://mcs.snssdk.com",
  //       changeOrigin:true,
  //       pathRewrite:{
  //         "^/apim" : ""
  //       }
  //     }
  //   )
  // )

}