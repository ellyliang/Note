HTTP
==========

#### http缺点

* 通信使用明文(不加密)，内容可能会被窃听
* 不验证通信方的身份，可能遭遇伪装
* 无法证明报文的完整性，可能已遭遇篡改

#### HTTPS = HTTP + 加密 + 认证 + 完整性保护

#### 因输出值转义不完全引发的安全漏洞 (解决方法：过滤标签)

* 跨脚本攻击
* SQL注入攻击
* OS命令注入攻击
* HTTP首部注入攻击
* HTTP响应截断攻击
* 邮件首部注入攻击
* 目录遍历攻击
* 远程文件包含漏洞

#### 返回结果的HTTP状态码

* 200OK 成功 
* 204 No Content 请求处理成功，但资源没有被返回
* 206 Partial Content 客户端进行范围请求，服务器端成功执行了这部分GET请求

* 301 Moved Permanently (永久性重定向)请求资源已被分配了新的URL，应使用新的URL
* 302 Found (临时性重定向)资源的URL已临时定位到其他位置了，禁止从POST变成GET
* 303 See Other 请求对应的资源存在着另一个URL，应使用GET方法定向获取请求的资源
* 304 Not Modified 资源已找到，单未符合条件
* 307 Temporary Redirect 临时重定向。不会从POST变成GET

* 400 Bad Request 请求报文中存在语法错误
* 401 Unauththorized 请求需要有通过HTTP认证的认证信息
* 403 Forbidden 请求资源的访问被服务器拒绝了
* 404 Not Found 服务器上没有请求的资源

* 500 Internal Server Error 服务器端在执行请求时发生了错误
* 502 Bad Gateway 
* 503 Service Unavailable 服务器暂时处于超负载或正在进行停机维护





