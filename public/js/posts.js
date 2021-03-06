/**
 * Created by zone0 on 2017/4/19.
 */
window.onload = () => {
  showDiv();
  let editorDiv = document.getElementById('editor');
  let editor = new wangEditor(editorDiv);
  editor.config.uploadImgUrl = '/upload';
  editor.create();
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
  fileUpload().then((img) => {
    $('#submit').on('click', function () {
      function getPostValue() {
        let title = $('#title').val();
        let content = editor.$txt.html();
        let select = $('#select').val();
        let time = new Date().toLocaleString();
        if (!title || !content) {
          alert('请输入内容');
          return null
        }
        return {
          title,
          content,
          select,
          title,
          img,
          time
        }
      }
      if (getPostValue()) {
        $.ajax({
          type: 'POST',
          url: '/posts',
          data: getPostValue(),
          success: function () {
            window.location.href = '/adposts';
            alert('添加成功')
          }
        })
      }
    })
  })
};

function showDiv() {
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
}


const fileUpload = function () {
  return new Promise((resolve, reject) => {
    $('#imgsubmit').on('click', () => {
      let formDate = new FormData();
      formDate.append('file', $('#file')[0].files[0]);
      $.ajax({
        url: '/upload',
        type: 'POST',
        cache: false,
        data: formDate,
        processData: false,
        contentType: false,
        success: function (e) {
          resolve(e)
        }
      })
    })
  })
};





