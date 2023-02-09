$(function(){
  $("button").on("click", function(){
    $.ajax({
      url : "http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $("#zipcode").val(),
      dataType : "json",
    }).done(function(data){
      console.log(data)
      if (data.results) {
        createData(data.results[0]);
      } else {
        alert("データがない");
      }
    })
  })

  function createData(data){
    $('#prefecture').val(data.address1)
    $('#city').val(data.address2)
    $('#address').val(data.address3)
  }
});