document.querySelectorAll('.tab-bar').forEach(function (item) {
    let children = Array.from(item.children)
    let circleIndicator = item.querySelector('.tab-bar_circle-indicator')
    children.forEach((childItem, key) => {
      childItem.addEventListener('click', () => {
        let color = getComputedStyle(document.documentElement).getPropertyValue(`--theme-${childItem.dataset.theme}`)
        circleIndicator.classList.remove('animate')
        circleIndicator.style.marginTop = (19 + childItem.clientWidth) * key + 'px'
        circleIndicator.classList.add('animate')
        circleIndicator.style.backgroundColor=color
      })
    })
  })
  