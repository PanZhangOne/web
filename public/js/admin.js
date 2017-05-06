'use strict';
window.onload = () => {
  showDiv();
  postComInfo();
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

const postComInfo = () => {
  $('#submit').on('click', () => {
    function getPostInfo() {
      let tel = $('#tel').val();
      let email = $('#email').val();
      let address = $('#address').val();
      let synopsis = $('#synopsis').val();
      return {
        tel,
        email,
        address,
        synopsis
      }
    }
    if (getPostInfo()) {
      $.ajax({
        type: 'POST',
        url: '/admin/newcom',
        data: getPostInfo(),
        success: function () {
          alert('更新成功')
        }
      })
    }
  })
};

