/*thoi gian*/
    function time() {
      var today = new Date();
      var weekday = new Array(7);
      weekday[0] = "Chủ Nhật";
      weekday[1] = "Thứ Hai";
      weekday[2] = "Thứ Ba";
      weekday[3] = "Thứ Tư";
      weekday[4] = "Thứ Năm";
      weekday[5] = "Thứ Sáu";
      weekday[6] = "Thứ Bảy";
      var day = weekday[today.getDay()];
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      nowTime = h + " giờ " + m + " phút " + s + " giây";
      if (dd < 10) {
        dd = '0' + dd
      }
      if (mm < 10) {
        mm = '0' + mm
      }
      today = day + ', ' + dd + '/' + mm + '/' + yyyy;
      tmp = '<span class="date"> ' + today + ' - ' + nowTime +
        '</span>';
      document.getElementById('clock').innerHTML = tmp;
      clocktime = setTimeout("time()", "1000", "Javascript");

      function checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
    }
const myChart = new Chart("myChart", {
      type: "line",
      data: {},
      options: {}
    });
const xValues = ["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6"];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [20, 59, 90, 51, 56, 100],
      borderColor: "red",
      fill: false
    },{
      data: [48, 48, 49, 39, 86, 10],
      borderColor: "green",
      fill: false
    },]
  },
  options: {
    legend: {display: false}
  }
});
const myChart1 = new Chart("myChart1", {
  type: "bar",
  data: {},
  options: {}
});

var xxValues = ["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6"];
var yValues = [20, 59, 90, 51, 56, 100];
var yyValues =[48, 48, 49, 39, 86, 10];
var barColors=[]
new Chart("myChart1", {
  type: "bar",
  data: {
    labels: xxValues,
    datasets: [{
      backgroundColor:"red",
      data: yValues
    },{
      backgroundColor:"green",
      data: yyValues
    }]
  },
  legend: {display: false}
});
