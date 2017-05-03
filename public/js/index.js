/**
 * Created by zone0 on 2017/5/3.
 */
window.onload = () => {
  recentFn();
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
