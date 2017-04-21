/**
 * Created by zone0 on 2017/4/19.
 */
window.onload = () => {
  showDiv();
  let editorDiv = document.getElementById('editor');
  let editor = new wangEditor(editorDiv);
  editor.config.uploadImgUrl = '/upload';
  editor.create();
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

