'use strict';
window.onload = onload => {
  let editor = new wangEditor('editor');
  editor.config.uploadImgUrl = '/upload';
  editor.create();

  let submitbtn = document.getElementById('submitbtn');

  submitbtn.onclick = () => {
    let aTitle = document.getElementById('editortitle').value;
    let aBody = editor.$txt.html();
    let select = document.getElementById('select').value;
    let time = new Date();

    let data = {
      aTitle,
      aBody,
      select,
      time
    }

    $.ajax({
      type: 'POST',
      url: '/posts',
      data: data
    })
  }
}
