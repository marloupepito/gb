<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>GB Bakeshop</title>
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <!-- Fonts -->
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        <!-- Styles -->
        
 
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <script src="{{ asset('js/app.js') }}" defer></script>

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }

            @media only screen and (max-width: 600px) {
                .ant-layout.css-dev-only-do-not-override-1i536d8 {
                    margin:0px !important;
                }
            }
            .ant-layout-sider.ant-layout-sider-dark.ant-layout-sider-below.border.border-right{
                z-index:5 !important;
            }
            .ant-form-item.css-dev-only-do-not-override-1i536d8{
                margin:0px;
            }
            .ant-modal-footer{
                display:none !important
            }
            td.ant-table-cell{
                padding:10px !important
            }
        </style>
    </head>
    <body class="antialiased">
        <div id="app"/>
    </body>
</html>
