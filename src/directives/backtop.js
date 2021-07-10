/*
 * @Description:
 * @Author: Chuang Li
 * @Date: 2021-07-10 16:35:03
 * @LastEditTime: 2021-07-10 16:37:35
 * @LastEditors: Chuang Li
 */
const backtop = {
  bind (el, binding, vnode) {
    // 响应点击后滚动到元素顶部
    el.addEventListener('click', () => {
      const target = binding.arg ? document.getElementById(binding.arg) : window
      console.log('回到顶部')
      target.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  },
  update (el, binding, vnode) {
    // 滚动到达参数值才出现绑定指令的元素
    const target = binding.arg ? document.getElementById(binding.arg) : window
    if (binding.value) {
      target.addEventListener('scroll', e => {
        if (e.srcElement.scrollTop > binding.value) {
          el.style.visibility = 'unset'
        } else {
          el.style.visibility = 'hidden'
        }
      })
    }
    // 判断初始化状态
    if (target.scrollTop < binding.value) {
      el.style.visibility = 'hidden'
    }
  },
  unbind (el, binding) {
    const target = binding.arg ? document.getElementById(binding.arg) : window
    target.removeEventListener('scroll')
    el.removeEventListener('click')
  }
}

export default backtop
