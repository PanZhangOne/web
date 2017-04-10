'use strict';
window.onload = onload => {
  let editor = new wangEditor('editor');
  editor.config.uploadImgUrl = '/upload';
  editor.create();
}
