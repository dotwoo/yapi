# yapi docker 部署脚本

## 步骤

```shell
# 先启动 mongo (这个是因为,初始化化程序需要等 mongo 完全启动完才可以工作)
docker-compose up -d mongo
# 等待 mongo 启动完成

# 修改 docker-compose.yml 中  command: server/install.js 删除注释
# 初始化 yapi 数据库
docker-compose up yapi-app

# 修改 docker-compose.yml 中  command: server/install.js 添加回注释
# 删除 command: server/app.js 注释
# 开始服务
docker-compose stop yapi-app

docker-compose up yapi-app


```
