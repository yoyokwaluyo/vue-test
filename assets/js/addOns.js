var addOns = {
    init: function() {
        this.closeModal();
    },
    showModal: function(detail) {
        const modal = document.querySelector('.modal');
        var details = detail.getAttribute("data-isi");
        
        modal.style.display = "block";
    },
    closeModal: function() {
        const modal = document.querySelector('.modal');
        const closeModal = document.querySelector('.modal__close');

        closeModal.addEventListener('click', function() {
            modal.style.display = "none";
        });
    }
}

window.onload = function() {
    addOns.init();
};
// $(document).ready(function() {
//     addOns.init();
// });