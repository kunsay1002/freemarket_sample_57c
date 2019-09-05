$(function(){
  var drop = $('.drop');
  var drop2 = $('.drop2');
  var images = [];
  var inputs  =[];
  var input_area = $('.input_area');
  var preview = $('#preview');
  var preview2 = $('#preview2');

  $(document).on('change', 'input[type= "file"].upload-image',function(event) {
    var file = $(this).prop('files')[0];
    var reader = new FileReader();
    inputs.push($(this));
    var img = $(`<div class= "img_view"><figure><img></figure></div>`);
    reader.onload = function(e) {
      var btn_wrapper = $('<div class="btn_wrapper"><div class="btn edit">編集</div><div class="btn delete">削除</div></div>');
      img.append(btn_wrapper);
      img.find('img').attr({
        src: e.target.result
      })
    }
    reader.readAsDataURL(file);
    images.push(img);

    if(images.length >= 5) {
      $('#preview2').empty();
      drop2.css({
        'display': 'block'
      })
      drop.css({
        'display': 'none'
      })
      $.each(images, function(index, image) {
        image.attr('data-image', index);
        preview2.append(image);
        drop2.css({
          'width': `calc(100% - (135px * ${images.length - 5}))`
        })
      })
      if(images.length == 9) {
        drop2.find('p').replaceWith('<i class="fa fa-camera"></i>')
      }
    } else {
        $('#preview').empty();
        $.each(images, function(index, image) {
          image.attr('data-image', index);
          preview.append(image);
        })
        drop.css({
          'width': `calc(100% - (135px * ${images.length}))`
        })
      }
      if(images.length == 4) {
        drop.find('p').replaceWith('<i class="fa fa-camera"></i>')
      }
    if(images.length == 10) {
      drop2.css({
        'display': 'none'
      })
      return;
    }
    var new_image = $(`<input multiple= "multiple" name="product_images[image][]" class="upload-image" data-image= ${images.length} type="file" id="upload-image">`);
    input_area.prepend(new_image);
  });
  $(document).on('click', '.delete', function() {
    var target_image = $(this).parent().parent();
    $.each(inputs, function(index, input){
      if ($(this).data('image') == target_image.data('image')){
        $(this).remove();
        target_image.remove();
        var num = $(this).data('image');
        images.splice(num, 1);
        inputs.splice(num, 1);
        if(inputs.length == 0) {
          $('input[type= "file"].upload-image').attr({
            'data-image': 0
          })
        }
      }
    })
    $('input[type= "file"].upload-image:first').attr({
      'data-image': inputs.length
    })
    $.each(inputs, function(index, input) {
      var input = $(this)
      input.attr({
        'data-image': index
      })
      $('input[type= "file"].upload-image:first').after(input)
    })
    if (images.length >= 5) {
      drop2.css({
        'display': 'block'
      })
      $.each(images, function(index, image) {
        image.attr('data-image', index);
        preview2.append(image);
      })
      drop2.css({
        'width': `calc(100% - (135px * ${images.length - 5}))`
      })
      if(images.length == 9) {
        drop2.find('p').replaceWith('<i class="fa fa-camera"></i>')
      }
      if(images.length == 8) {
        drop2.find('i').replaceWith('<p>ココをクリックしてください</p>')
      }
    } else {
      drop.css({
        'display': 'block'
      })
      $.each(images, function(index, image) {
        image.attr('data-image', index);
        preview.append(image);
      })
      drop.css({
        'width': `calc(100% - (135px * ${images.length}))`
      })
    }
    if(images.length == 4) {
      drop2.css({
        'display': 'none'
      })
    }
    if(images.length == 3) {
      drop.find('i').replaceWith('<p>ココをクリックしてください</p>')
    }
  })
});