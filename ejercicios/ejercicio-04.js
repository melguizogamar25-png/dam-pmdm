$(document).ready(function () {

  $("#btn-add-fila").on("click", function () {
    $("table tbody").append("<tr><td>Dato</td><td>Dato</td></tr>");
  });

  $("#btn-remove-fila").on("click", function () {
    $("table tbody tr:last-child").remove();
  });

  $("#btn-add-col").on("click", function () {
    $("table thead tr").append("<th>Encabezado</th>");
    $("table tbody tr").append("<td>Dato</td>");
  });

  $("#btn-remove-col").on("click", function () {
    $("table tr th:last-child, table tr td:last-child").remove();
  });

  $("#btn-delete-tabla").on("click", function () {
    $("table").remove();
  });

});