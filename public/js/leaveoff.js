/**
 * Created by zone0 on 2017/5/4.
 */
'use strict';
window.onload = () => {
  showDiv();
  deleteLeave();
  returnLeave();
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

const deleteLeave = function () {
  let deleteBTN = $('.js-d');
  deleteBTN.on('click', function () {
    let _delete = confirm('是否删除');
    let _id = $(this).attr('_id');
    if (_delete) {
      $.ajax({
        method: 'GET',
        url: `/leave/${_id}/remove`,
        success: function () {
          window.location.href = window.location.href;
          alert('成功删除')
        }
      })
    } else {
      alert('未删除')
    }
  })
};

const returnLeave = function () {
  let returnBtn = $('.js-h');
  returnBtn.on('click', function () {
    let _r = confirm('是否确认已经联系过留言者?');
    let _id = $(this).attr('_id');
    if (_r) {
      $.ajax({
        method: 'GET',
        url: `/leave/${_id}/returnleave`,
        success: function () {
          window.location.href = window.location.href;
          alert('ok');
        }
      })
    } else {
      alert('未操作');
    }
  })
};
