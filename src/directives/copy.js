/*
 * @Description:
 * @Author: Chuang Li
 * @Date: 2021-07-10 15:36:15
 * @LastEditTime: 2021-07-10 16:46:12
 * @LastEditors: Chuang Li
 */
const copy = {
  bind (el, binding) {
    if (binding.modifiers.dblclick) {
      el.addEventListener('dblclick', () => handleClick(el.innerText))
      el.style.cursor = 'copy'
    } else if (binding.modifiers.icon) {
      if (el.hasIcon) return
      const iconElement = document.createElement('i')
      iconElement.setAttribute('class', 'el-icon-document-copy')
      iconElement.setAttribute('style', 'margin-left:5px')
      el.appendChild(iconElement)
      el.hasIcon = true
      iconElement.addEventListener('click', () => handleClick(el.innerText))
      iconElement.style.cursor = 'copy'
    } else {
      el.addEventListener('click', () => handleClick(el.innerText))
      el.style.cursor = 'copy'
    }
  }
}

function handleClick (text) {
  // 创建元素
  if (!document.getElementById('copyTarget')) {
    const copyTarget = document.createElement('input')
    copyTarget.setAttribute(
      'style',
      'position:fixed;top:0;left:0;opacity:0;z-index:-1000;'
    )
    copyTarget.setAttribute('id', 'copyTarget')
    document.body.appendChild(copyTarget)
  }
  // 复制内容
  const input = document.getElementById('copyTarget')
  input.value = text
  input.select()
  document.execCommand('copy')
  alert('复制成功')
}

export default copy
