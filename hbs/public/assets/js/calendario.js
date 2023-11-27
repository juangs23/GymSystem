document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      dateClick: function(info){
        // alert(info.dateStr)
        $("#formularioEventos").modal('show');
      }
    });
    calendar.render();
  });