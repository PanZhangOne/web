'use strict';

window.onload = () => {
  showDiv();
  let deleteBTN = document.getElementsByClassName('js-delete');
  for (let i = 0; i < deleteBTN.length; i++) {
    deleteBTN[i].onclick = function () {
      let _delete = confirm('是否删除');
      let _id = $(this).attr('_id');
      if (_delete) {
        $.ajax({
          method: 'GET',
          url: `/adposts/${_id}/remove`,
          success: function () {
            window.location.href = '/adposts';
            alert('成功删除')
          }
        })
      } else {
        alert('未删除')
      }
    }
  }
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
