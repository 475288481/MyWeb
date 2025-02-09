document.querySelectorAll('.tab-bar_item').forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认的锚链接跳转行为
        let targetId = this.getAttribute('href').substring(1); // 获取目标ID
        let targetElement = document.getElementById(targetId); // 获取目标元素
        let offset = parseInt(targetElement.getAttribute('data-offset')) || 0; // 获取自定义偏移量，默认为0
        let elementPosition = targetElement.getBoundingClientRect().top;
        let offsetPosition = elementPosition + window.scrollY + offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' // 平滑滚动
        });
    });
});