/**
 * Created by Bennie on 2017/5/8.
 */
window.onload = () => {
  showDiv();
  addDesigner();
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
const postDesignerAvatar = function () {
  return new Promise((resolve, reject) => {
    $('#filebtn').on('click', function () {
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
const postDesignerPhoto = function () {
  return new Promise((resolve, reject) => {
    $('#photobtn').on('click', function () {
      let formData = new FormData();
      formData.append('files', $('#photo')[0].files[0]);
      $.ajax({
        url: '/upload',
        type: 'POST',
        cache: false,
        data: formData,
        processData: false,
        contentType:false,
        success: function (e) {
          resolve(e)
        }
      })
    })
  })
};

const addDesigner = async function () {
  let avatar = await postDesignerAvatar();
  let photo = await postDesignerPhoto();
  $('#submit').on('click', function () {
    let designername = $('#name').val();
    let experience = $('#experience').val();
    let introduction = $('#introduction').val();
    let honor = $('#honor').val();

    if (!designername || !experience || !introduction || !honor) {
      alert('请输入完整');
    } else {
      $.ajax({
        type: 'POST',
        url: 'designer',
        data: {
          avatar,
          photo,
          designername,
          experience,
          introduction,
          honor
        },
        success: function () {
          window.location.href = '/designer/list';
          alert('添加成功')
        }
      })
    }
  })
};
