/**
 * Page Title Helper
 * @description Generate page title.
 * @example <%- page_title() %>
 */
hexo.extend.helper.register('page_title', function () {
  var siteTitle = (this.config.title || this.theme.page_title) + ' '
  var title = ''
  if (this.is_home()) {
    title = siteTitle
  } else if (this.is_archive()) {
    title = siteTitle + this.__('menu.archives')
  } else if (this.is_category()) {
    title = siteTitle + this.__('menu.categories') + '：' + this.page.category
  } else if (this.is_tag()) {
    title = siteTitle + this.__('menu.tags') + '：' + this.page.tag
  } else {
    title = siteTitle + this.page.title || ''
  }
  return title
})