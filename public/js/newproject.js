/**
 * Created by zone0 on 2017/5/4.
 */
'use strict';
window.onload = () => {
  showDiv();
};

const showDiv = function () {
  let items = document.getElementsByClassName('js-list');
  for (let i = 0; i < items.length; i++) {
    items[i].onclick = () => {
      if (!items[i].isShow) {
        items[i].isShow = true;
        $(items[i].getElementsByTagName('ul')).show()
      } else {
        items[i].isShow = false;
        $(items[i].getElementsByTagName('ul')).hide()
      }
    }
  }
};
const testFileUpload = function () {
  return new Promise((resolve, reject) => {
    $('#imgup').on('click', function () {
      let formData = new FormData();
      formData.append('file', $('#file')[0].files[0]);
      $.ajax({
        url: '/upload',
        type: 'POST',
        cache: false,
        data: formData,
        processData: false,
        contentType: false,
        success: function (e) {
          resolve(e)
        }
      })
    })
  })
};

testFileUpload().then((img) => {
  $('#submit').on('click', function () {
    let title = $('#title').val();
    let content = $('#content').val();
    $.ajax({
      type:'POST',
      url: 'newproject',
      data: {
        title,
        content,
        img
      },
      success: function () {
        alert('ok')
      }
    })
  })
});
// $('#submit').on('click', () => {
//   function getPostValue() {
//     let title = $('#title').val();
//     let content = editor.$txt.html();
//     let select = $('#select').val();
//     let time = new Date().toLocaleString();
//     let pv = 10;
//     if (!title || !content) {
//       alert('请输入内容');
//       return null
//     }
//     return {
//       title,
//       content,
//       select,
//       time,
//       pv
//     }
//   }
//   if (getPostValue()) {
//     $.ajax({
//       type: 'POST',
//       url: '/posts',
//       data: getPostValue(),
//       success: function () {
//         window.location.href = '/adposts';
//         alert('添加成功')
//       }
//     })
//   }
// })
