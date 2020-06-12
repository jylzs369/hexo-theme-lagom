# Hexo Theme Lagom

`Lagom` is a word comes from Sweden, means `no more, no less`.

It's a modern thinking about every aspects of life.

`Simplicity` and `Contentment` are the keywords of lagom's philosophy.

This is also my ideal philosophy of life.

This idea exactly matches the design sense of `MUJI`, which can depict an elegant world with black and white. Inspired by the desgin of `MUJI`, I think this theme only needs black an wihte.

## Demo

[![Lagom screenshot](https://github.com/jylzs369/hexo-theme-lagom/blob/master/source/images/lagom-screenshot.png)](https://shiolife.cn/lagom/)

## feature

- Simplicity
- Responsive
- valine integration
- I18n support
- Custom iconfont

## Install

Clone repo
```
git clone https://github.com/jylzs369/hexo-theme-lagom.git
```

Change the theme property in the `_config.yml` file
```
theme: lagom
```

initial pages, such as `about`, `categoris`, `tags`
```
hexo new page about
...
```

## Configuration

### menu
```
  home: /
  archives: /archives/
  categories: /categories/
  tags: /tags/
  about: /about/
```

### social links

```
social_links:
  github:
    link: ''
    icon: ''
  mail:
    link: ''
    icon: ''
  rss:
    link: ''
    icon: ''
```

### comment

```
valine:
 appid: ''  #Leancloud appId
 appkey: '' #Leancloud appKey
 placeholder: ''
 visitor: true
```

See the [_config.yml](./_config.yml) file for more configurations.

## License

MIT