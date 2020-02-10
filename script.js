const app = {
    start() {
        $(document).ready(function () {
            $('#table-output').DataTable({
                dom: 'Bfrtip',
                lengthMenu: [
                    [ 10, 25, 50, -1 ],
                    [ '10 rows', '25 rows', '50 rows', 'Show all' ]
                ],
                buttons: [
                    'pageLength', 'copy', 'csv', 'excel', 'pdf', 'print'
                ]
            });
        });
    }
};

$(document).ready(() => app.start());