//-----------------Simple jQuery Drills-----------------

//Checks the page for code before any script is executed
// NOTE: this is only neccessary if the scripts are in the <head>.
$(document).ready(function () {
    $('#btnSubmit').attr('disabled', true);
    $('input').keyup(function () {
        if ($('input').val().length != 0)
            $('#btnSubmit').attr('disabled', false);
        else
            $('#btnSubmit').attr('disabled', true);
    });

    $('body').append('<div></div>');

    $('body').append('<ul></ul>');

    // $('input').keyup(function () {
    //     $('#btnSubmit').attr('disabled', false);
    // });

    $('#btnSubmit').click(function () {
        event.preventDefault();
        let text = $('input').val();
        alert(text); 
        console.log('Pending files')

        $('div').append('<h2>' + text + '</h2>');
        $('h2').on('mouseover', function () {
            $('h2').css({
                'background-color': 'red',
                'border-radious': '10px'
            });
        })

        $('ul').append('<li>' + text + '</li>');
        $('li').on('click', function(){
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            $('li').css({color: `rgb(${r}, ${g}, ${b})`});
        })

        $('li').on('dblclick', function(){
            $('li').remove();
        })

    });
});