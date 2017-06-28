$(document).ready(function(){
    // get data from form and create new card
    var newUserData;
    var newCard;
    var counter=0;
    var cardID;
    $('form').submit(function(){
        newUserData = {};
        newCard = '<div class="row card" state="name" id="card_no_';
        newUserData.first_name = $('#first_name').val();
        newUserData.last_name = $('#last_name').val();
        newUserData.description = $('#description').val();
        newCard += counter + '"><h3>' + newUserData.first_name + ' ' + newUserData.last_name + '</h3><p>Click for description!</p></div>'; 
        $('#contact_cards').append(newCard);
        $(this).children('input:text, textarea').val('');
        cardID = '#card_no_' + counter;
        $(cardID).data(newUserData);
        // console.log($(cardID).data());
        counter += 1;
        return false;
    });

    // card flip to show description when clicked
    $("#contact_cards").on('click', '.card', function(){
        var state = $(this).attr('state')
        if(state =='name'){
            $(this).attr('state','description');
            $(this).children('h3').text($(this).data('description'));
            $(this).children('p').hide();
        }else{
            $(this).attr('state','name');
            $(this).children('h3').text($(this).data('first_name') + ' ' + $(this).data('last_name'));
            $(this).children('p').show();
        }
    });
});