在移动使用ajax只知道为何返回fail,这个很管用
=============================================

```js
  $.ajax({
    url: "",
    data: "",
    type: "POST/GET",
    dataType: "json",
    success: function(r) {
    
    },
    error: function(jqXHR, exception) {
      if (jqXHR.status === 0) {
        alert('Not connect.n Verify Network.');
      } else if (jqXHR.status == 404) {
        alert('Requested page not found. [404]');
      } else if (jqXHR.status == 500) {
        alert('Internal Server Error [500].');
      } else if (exception === 'parsererror') {
        alert('Requested JSON parse failed.');
      } else if (exception === 'timeout') {
        alert('Time out error.');
      } else if (exception === 'abort') {
        alert('Ajax request aborted.');
      } else {
        alert('Uncaught Error.n' + jqXHR.responseText);
      }
    }
  });

```
