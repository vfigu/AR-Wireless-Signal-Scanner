const app = {
    start() {
        $(document).ready(function () {
            $('#table-output').DataTable();
        });
    }
};

$(document).ready(() => app.start());