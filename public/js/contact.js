/**
 * Created by Bennie on 2017/5/6.
 */
'use strict';

window.onload = () => {
  postMessage();
};

const postMessage = function () {
  $('#submit').on('click', () => {
    function getMessage() {
      let name = $('#name').val();
      let tel = $('#tel').val();
      let message = $('#message').val();
      let time = new Date().toLocaleString();
      if (!name || !message || !tel) {
        alert('请输入完整');
        return null
      } else {
        return {
          name,
          tel,
          message,
          time
        }
      }
    }

    if (getMessage()) {
      $.ajax({
        type: 'POST',
        url: '/leave',
        data: getMessage(),
        success: function () {
          window.location.href = window.location.href;
          alert('留言成功，我们会尽快与您联系');
        }
      })
    }
  })
};
