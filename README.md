# hexo-butterfly-envelope

给`hexo-theme-butterfly`添加 游戏页面

# 安装

1. 安装插件,在博客根目录`[Blogroot]`下打开终端，运行以下指令：
  ```bash
  npm install hexo-butterfly-games --save
  ```

2. 添加配置信息，以下为写法示例
  在站点配置文件`_config.yml`或者主题配置文件`_config.butterfly.yml`中添加

  ```yaml
    # Game Page
    # see https://akilar.top/posts/e2d3c450/
    games:
      enable: true
      name: 游戏世界 
      description: 我的游戏世界 
      tip: 跟 小屋屋主 一起探索世界 
      top_background: https://th.bing.com/th/id/R.13a97ef4830efa5e0b87134d622719f3?rik=G7RaJFpxg5PtkA&riu=http%3a%2f%2fupload.techweb.com.cn%2fs%2f640%2f2019%2f0530%2f1559208230699.jpg&ehk=j1G8rMX98TRX52EkLgI5jW1p7lIQp4I8Si1nqEggFRs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1
      buttonText: Steam 
      buttonLink: https://steamcommunity.com/
      css: /css/default.css 
      good_games:
        - title: 风景一绝
          description: 不会错过的风景
          games_list:
            - name: 怪物猎人：世界
              specification: CAPCOM Co., Ltd.
              description: "在新建构的「Monster Hunter: World」中, 可以体验到你一直期盼的极致猎人生活。"
              image: https://cdn.max-c.com/heybox/dailynews/img/94376ca41326836587a137d5999733e5.jpg
              link: https://www.xiaoheihe.cn/games/detail/582010

        - title: 我的最爱
          description: 我不能没有它了
          games_list:
            - name: GTA:5
              specification: Rockstar Games
              description: 谁还在买GTA5
              image: https://imgheybox.max-c.com/heybox/game/header/271590_dXCCk.jpg
              link: https://www.xiaoheihe.cn/games/detail/271590
      path: games
      front_matter: #【可选】games页面的 front_matter 配置
        title: 游戏人生
        comments: true
        top_img: false
        type: games
        aside: false
  ```
3. 参数释义

  | 参数                                  | 备选值/类型     | 释义                                                |
  |:------------------------------------|:-----------|:--------------------------------------------------|
  | enable                              | true/false | 控制开关                                              |
  | name                                | text       | 顶部标题                                              |
  | description                         | text       | 顶部副标题                                             |
  | tip                                 | text       | 顶部小标题                                             |
  | top_background                      | URL        | 顶部背景链接                                            |
  | buttonText                          | text       | 按钮文字                                              |
  | buttonLink                          | URL        | 按钮对应链接                                            |
  | good_games.title                    | text       | 分类标题                                              |
  | good_games.description              | text       | 分类副标题                                             |
  | good_games.games_list.name          | text       | 游戏名字                                              |
  | good_games.games_list.specification | text       | 游戏产商                                              |
  | good_games.games_list.description   | text       | 游戏简介                                              |
  | good_games.games_list.image         | URL        | 游戏图片链接                                            |
  | good_games.games_list.link          | URL        | 游戏对应链接                                            |
  | css                                 | URL        | 【可选】开发者接口，自定义css链接                                |
  | path                                | comments   | 【可选】games 的路径名称。默认为 games，生成的页面为 games/index.html |
  | front_matter                        | object     | 【可选】games 页面的 front_matter 配置,写法见上文示例             |
# 截图
![](https://unpkg.zhimg.com/hexo-butterfly-envelope/lib/violet.jpg)
