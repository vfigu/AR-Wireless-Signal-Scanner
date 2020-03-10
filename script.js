// const app = {
//     start() {
//         $(document).ready(function () {
//             let table = $('#table-output').DataTable({});
//
//             function createTable(){
//                 table.destroy();
//                 table = $('#table-output').DataTable({
//                     dom: 'Bfrtip',
//                     lengthMenu: [
//                         [ 10, 25, 50, -1 ],
//                         [ '10 rows', '25 rows', '50 rows', 'Show all' ]
//                     ],
//                     buttons: [
//                         'pageLength', 'copy', 'csv', 'excel', 'pdf', 'print'
//                     ],
//                     rowReorder: {
//                         selector: 'td:nth-child(2)'
//                     },
//                     responsive: true,
//                     data : OutputData,
//                     "columns" : [
//                         { "data" : "Device ID" },
//                         { "data" : "Device Name" },
//                         { "data" : "RSSI" },
//                         { "data" : "Time" },
//                     ],
//                     "deferRender": true
//                 });
//             }
//             // $('#stop-button').on( 'click', function () {
//             //     createTable();
//             // });
//             $('#create-table').on( 'click', function () {
//                 createTable();
//             });
//             $('#destroy-table').on( 'click', function () {
//                 OutputData = [];
//                 createTable();
//             });
//         });
//     }
// };
//
// $(document).ready(() => app.start());