/**
 * Page Title Helper
 * @description Generate page title.
 * @example <%- page_title() %>
 */
hexo.extend.helper.register("page_title", function () {
  var title = this.page.title ? this.page.title : (this.config.title || this.theme.page_title)

  if (this.is_archive()) {
    title += ' ' + this.__('menu.archives')
  } else if (this.is_category()) {
    title += ' ' + this.__('menu.categories')
  } else if (this.is_tag()) {
    title += this.__('menu.tags')
  }

  return title
})