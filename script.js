const app = {
    start() {
        $(document).ready(function () {
            $('#table-output').DataTable({
                dom: 'Bfrtip',
                buttons: [
                    'copy', 'csv', 'excel', 'pdf', 'print'
                ]
            });
        });
    }
};

$(document).ready(() => app.start());

function insertDataRow(deviceId, name, rssi, timeStamp) {
    document.getElementById('#table-output')
        .DataTable().row.add([deviceId, name, rssi, timeStamp]).draw(false);
}