(function() {
  const scrollTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  window.onload = function () {
    let backTopBtn = document.getElementById('backTop')

    // 文章页面，回到顶部按钮点击事件
    backTopBtn && backTopBtn.addEventListener('click', e => {
      e.preventDefault()
      scrollTop()
    })
  }

})(window)
