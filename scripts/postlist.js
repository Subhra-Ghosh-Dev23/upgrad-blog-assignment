var cardToDelete;

function openDeleteModal(cardId) {
    cardToDelete = cardId;
    $('#cardToDeleteInput').val(cardId);
    $('#deleteModal').modal('show');
}

function deleteCard() {
    var cardToDelete = $('#cardToDeleteInput').val();
    var cardElement = document.getElementById("card" + cardToDelete);

    if (cardElement) {
        cardElement.remove();
        console.log('Card deleted:', cardToDelete);
        $('#deleteModal').modal('hide');
    } else {
        console.log('Card not found:', cardToDelete);
    }
}