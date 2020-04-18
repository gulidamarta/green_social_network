// client-side part of application
// TODO: find an error
// $(document).ready(function () {
//     $('.delete-news').on('click', function (e) {
//         $target = $(e.target);
//         const id = $target.attr('data-id');
//         $.ajax({
//             type: 'DELETE',
//             url: '/news/'+id,
//             success: function(response){
//                 alert('Deleting News');
//                 window.location.href='/';
//             },
//             error: function (err) {
//                 console.log(err);
//             }
//         })
//     });
// });