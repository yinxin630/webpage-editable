/**
 * 注册点击事件
 */
document.body.addEventListener('dblclick', handleDblClick, true);

/**
 * 处理双击事件, 添加可编辑属性
 * @param {Event} event 
 */
function handleDblClick(event) {
    var $el = event.target;
    $el.setAttribute('contenteditable', true);
    $el.addEventListener('blur', handleBlur);
}

/**
 * 处理失去焦点事件, 移除可编辑属性
 * @param {Event} event 
 */
function handleBlur(event) {
    var $el = event.target;
    $el.removeAttribute('contenteditable');
    $el.removeEventListener('blur', handleBlur);
}