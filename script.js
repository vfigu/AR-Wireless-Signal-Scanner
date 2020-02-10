const app = {
    start() {
        $(document).ready(function () {
            table = $('#table-output').DataTable({
                dom: 'Bfrtip',
                lengthMenu: [
                    [ 10, 25, 50, -1 ],
                    [ '10 rows', '25 rows', '50 rows', 'Show all' ]
                ],
                buttons: [
                    'pageLength', 'copy', 'csv', 'excel', 'pdf', 'print'
                ]
            });

            $('#addRow').on( 'click', function () {
                table.row.add([
                    DEVICE_ID,
                    DEVICE_NAME,
                    RSSI_VALUE,
                    TIMESTAMP
                ]).draw(true);
            });
        });
    }
};

$(document).ready(() => app.start());