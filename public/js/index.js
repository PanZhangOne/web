/**
 * Created by zone0 on 2017/5/3.
 */
'use strict';
window.onload = () => {
  recentFn();
  postMessage();
};
const recentFn = function () {
  let btns = $('#js-btn > li');
  let views = $('#js-recent');
  for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = () => {
      if (i == 0) {
        views.css({
          'transform': 'translate3d(0px,0,0)',
          'transition-duration': '1s'
        })
      } else if (i == 1) {
        views.css({
          'transform': 'translate3d(-1140px,0,0)',
          'transition-duration': '1s'
        })
      } else if (i == 2) {
        views.css({
          'transform': 'translate3d(-2280px,0,0)',
          'transition-duration': '1s'
        })
      }
    }
  }
};

const postMessage = function () {
  $('#submit').on('click', () => {
    function getMessageValue() {
      let name = $('#name').val();
      let tel = $('#tel').val();
      let message = $('#message').val();
      let time = new Date().toLocaleString();
      if (!name || !message || !tel) {
        alert('请输完整');
        return null;
      }
      return {
        name,
        tel,
        message,
        time
      }
    }

    if (getMessageValue()) {
      $.ajax({
        type: 'POST',
        url: '/leave',
        data: getMessageValue(),
        success: function () {
          window.location.href = window.location.href;
          alert('留言成功，我们会尽快与您联系');
        }
      })
    }
  })
};
