'use strict'

const pug = require('pug')
const path = require('path')
const urlFor = require('hexo-util').url_for.bind(hexo)
const util = require('hexo-util')
hexo.extend.generator.register('games', function (locals) {
  const config = hexo.config.games || hexo.theme.config.games
  const errorimg = hexo.theme.config.error_img

  if (!(config && config.enable)) return

  const data = {
    name: config.name,
    errorimg: config.errorimg ? urlFor(config.errorimg) : errorimg.post_page,
    description: config.description,
    tips: config.tip,
    top_background: config.top_background ? urlFor(config.top_background) : "https://www.loliapi.com/acg",
    buttonText: config.buttonText ? config.buttonText : "Steam",
    buttonLink: config.buttonLink ?  urlFor(config.buttonLink) : "https://steamcommunity.com/",
    good_games: config.good_games,
    custom_css: config.css ? urlFor(config.css) : "https://jsd.onmicrosoft.cn/npm/hexo-butterfly-games/lib/default.css"
  }

  const css_text = `<link rel="stylesheet" href="${data.custom_css}">`

  const content = pug.renderFile(path.join(__dirname, './lib/html.pug'), data)

  const pathPre = config.path || 'games'

  let pageDate = {
    content: content
  }

  // 注入样式资源
  hexo.extend.injector.register('head_end', css_text, "default");

  if (config.front_matter) {
    pageDate = Object.assign(pageDate, config.front_matter)
  }

  return {
    path: pathPre + '/index.html',
    data: pageDate,
    layout: ['page', 'post']
  }
})