const app = {
    start() {
        $(document).ready(function () {
            let table = $('#table-output').DataTable({
                dom: 'Bfrtip',
                lengthMenu: [
                    [ 10, 25, 50, -1 ],
                    [ '10 rows', '25 rows', '50 rows', 'Show all' ]
                ],
                buttons: [
                    'pageLength', 'copy', 'csv', 'excel', 'pdf', 'print'
                ]
            });

            $('#create-table').on( 'click', function () {
                table.destroy();
                table = $('#table-output').DataTable({
                    data : OutputData,
                    columns : [
                        { "data" : "Device ID" },
                        { "data" : "Device Name" },
                        { "data" : "RSSI" },
                        { "data" : "Time" },
                    ]
                });
            });
        });
    }
};

$(document).ready(() => app.start());