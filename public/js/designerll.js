/**
 * Created by Bennie on 2017/5/9.
 */
'use strict';

window.onload = () => {
  showDiv();
  deleteDesigner();
};

function showDiv() {
  let items = document.getElementsByClassName('js-list');
  for (let i =0; i<items.length; i++) {
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

const deleteDesigner = function () {
  let deleteBTN = document.getElementsByClassName('js-delete');
  for (let i = 0; i<deleteBTN.length; i++) {
    deleteBTN[i].onclick = function () {
      let _delete = confirm('是否删除');
      let _id = $(this).attr('_id');
      if (_delete) {
        $.ajax({
          type: 'GET',
          url:`/designer/${_id}/remove`,
          success: function() {
            window.location.href = '/designer/list';
            alert('删除成功')
          }
        })
      }
    }
  }
};
