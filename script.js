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
                    'N/A',
                    'N/A',
                    'N/A',
                    'N/A'
                ]).draw(true);
            });
        });
    }
};

$(document).ready(() => app.start());