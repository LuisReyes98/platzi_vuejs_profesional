const blur = {}

function setBlur (el, binding, newNode, oldNode) {
  el.style.filter = !binding.value ? 'blur(3px)' : 'none'
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'

  el.querySelectorAll('button').forEach(a => {
    if (!binding.value) {
      a.setAttribute('disabled', true)
    } else {
      a.removeAttribute('disabled')
    }
  })
}
blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding, newNode, oldNode) {
      setBlur(el, binding, newNode, oldNode)
    }
  })
}

export default blur
