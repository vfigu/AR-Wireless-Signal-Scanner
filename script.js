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

            function insertData(){
                table.row.add([
                    'a',
                    'b',
                    'c',
                    'd'
                ]).draw(true);
            }
        });
    }
};

$(document).ready(() => app.start());