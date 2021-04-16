var addOns = {
    init: function() {
        this.closeModal();
    },
    showModal: function(detail) {
        const modal = document.querySelector('.modal');
        var details = detail.getAttribute("data-isi");
        
        addOns.isiPortofolio(details);
        modal.style.display = "block";
    },
    closeModal: function() {
        const modal = document.querySelector('.modal');
        const closeModal = document.querySelector('.modal__close');

        closeModal.addEventListener('click', function() {
            modal.style.display = "none";
        });
    },
    isiPortofolio: function(param) {
        const imgModal = document.querySelector("#imgModal");
        const titleModal = document.querySelector("#titleModal");
        const contentModal = document.querySelector("#contentModal");
        const linkModal = document.querySelector(".modal__footer");

        switch (param) {
            case 'mini':
                imgModal.src = "./assets/img/mini.png";
                titleModal.innerHTML = "PLAZA MINI";
                contentModal.innerHTML = 
                    `<p>MINI Authorized Dealer, Plaza Mini sendiri merupakan hasil kolaborasi dari pihak MINI Indonesia dan juga Plaza Auto Raya. Plaza Mini sendiri berlokasi di lokasi yang strategis, yaitu di Jalan raya Boulevard Kav 5 No. 10 Gading, Serpong, Summarecon Tangerang. Gendung dari Plaza Mini sendiri juga cukup luas dengan adanya 6 lantai yang mengusung konsep Urban Modern.</p>
                    <br><p>Disini saya sebagai yang mengimplementasikan Web Design semuanya dari mockup yang sudah dibuat dari team UX untuk menjadi web.</p>`;
                linkModal.innerHTML = 
                    `<a href="https://www.rajamobilmini.com/" target="_blank">
                        <i class='bx bx-globe'></i>
                        Plaza Mini
                    </a>
                    <a href="#">
                        <i class='bx bx-calendar-alt'></i>
                        2020
                    </a>`;
                break;
            case 'bmw':
                imgModal.src = "./assets/img/bmw-indo.png";
                titleModal.innerHTML = "BMW Group Indonesia";
                contentModal.innerHTML = 
                    `<p>BMW Authorized Dealer,</p>
                    <p>Disini terdapat dua Website BMW yang berbeda, tugas saya untuk mengimplementasikan Web Design semuanya dari mockup yang sudah dibuat dari team UX untuk menjadi web, serta ikut dalam membuat beberapa menu yang ada di dalam web ini,</p>
                    <br><ul>
                        <li>- BMW Indonesia (Head Office)</li>
                        <li>- BMW Artha Motor Lestari (Dealer)</li>
                    </ul>`;
                linkModal.innerHTML = 
                    `<a href="https://www.mybmwdealer.co.id/" target="_blank">
                        <i class='bx bx-globe'></i>
                        BWM Indonesia
                    </a>
                    <a href="https://bmw-aml.co.id/" target="_blank">
                        <i class='bx bx-globe'></i>
                        Dealer BMW AML
                    </a>
                    <a href="#">
                        <i class='bx bx-calendar-alt'></i>
                        2019
                    </a>`;
                break;
            case 'deva':
                imgModal.src = "./assets/img/deva_auto_logo.png";
                titleModal.innerHTML = "DEVAauto";
                contentModal.innerHTML = 
                    `<p>The Best Used Cars, menjual mobil-mobil second premium yang tentunya siap digunakan bagi para konsumen yang mempunyai jiwa otomotif dengan selera tinggi.</p>
                    <p>Disini saya sebagai yang mengimplementasikan Web Design semuanya dari mockup yang sudah dibuat dari team UX untuk menjadi web, serta ikut dalam membuat beberapa menu yang ada di dalam web ini.</p>`;
                linkModal.innerHTML = 
                    `<a href="https://www.devaautojakarta.com/" target="_blank">
                        <i class='bx bx-globe'></i>
                        DEVAauto
                    </a>
                    <a href="#">
                        <i class='bx bx-calendar-alt'></i>
                        2020
                    </a>`;
                break;
            case 'hris':
                imgModal.src = "./assets/img/undraw_posting_photo_v65l.png";
                titleModal.innerHTML = "HRIS system";
                contentModal.innerHTML = 
                    `<p>Sistem manajemen sumber daya manusia,</p>
                    <p>Disini saya sebagai yang mengimplementasikan Web Design, serta ikut dalam membuat beberapa menu yang ada di dalam web ini seperti,</p>
                    <ul>
                        <li>- Pencatatan data karyawan dengan berbagai cabang kantor di seluruh indonesia</li>
                        <li>- Pegajuan cuti</li>
                        <li>- Pegajuan lembur</li>
                        <li>- Pegajuan sakit</li>
                    </ul>`;
                linkModal.innerHTML = 
                    `<a href="#">
                        <i class='bx bx-block'></i>
                        Internal Project
                    </a>
                    <a href="#">
                        <i class='bx bx-calendar-alt'></i>
                        2017
                    </a>`;
                break;
            case 'toyota':
                imgModal.src = "./assets/img/toyota.png";
                titleModal.innerHTML = "PLAZA TOYOTA";
                contentModal.innerHTML = 
                    `<p>Toyota Authorized Dealer,</p>
                    <p>Disini terdapat Beberapa Website HEAD OFFICE Toyota, tugas saya untuk mengimplementasikan Web Design semuanya dari mockup yang sudah dibuat dari team UX untuk menjadi web, serta ikut dalam membuat beberapa menu yang ada di dalam web ini,</p>
                    <ul>
                        <li>- <a href="https://www.plazatoyota.co.id/" target="_blank"><i class='bx bx-globe'></i> Plaza Toyota</a> (Jakarta) </li>
                        <li>- <a href="https://www.perintistoyota.com/" target="_blank"><i class='bx bx-globe'></i> Perintis</a> (Medan) </li>
                        <li>- <a href="https://www.duniabarusa.co.id/" target="_blank"><i class='bx bx-globe'></i> Dunia Barusa</a> (Aceh) </li>
                        <li>- <a href="https://toyota.krida.id/" target="_blank"><i class='bx bx-globe'></i> Krida Toyota</a> (NTB) </li>
                        <li>- <a href="https://www.liekmotor.co.id/" target="_blank"><i class='bx bx-globe'></i> Liek Motor</a> (Jawa Timur) </li>
                        <li>- <a href="https://www.deltamas-toyota.co.id/" target="_blank"><i class='bx bx-globe'></i> Delta Mas</a> (Medan) </li>
                        <li>- <a href="https://www.sinarsuritoyota.com/" target="_blank"><i class='bx bx-globe'></i> Sinar Suri</a> (Papua Barat) </li>
                    </ul>`;
                linkModal.innerHTML = 
                    `<a href="#">
                        <i class='bx bx-calendar-alt'></i>
                        2020
                    </a>`;
                break;
            case 'bpaint':
                imgModal.src = "./assets/img/bodypaint.png";
                titleModal.innerHTML = "PLAZA PAINT";
                contentModal.innerHTML = 
                    `<p>Bengkel Body & Cat dibawah naungan Plaza Toyota Group</p>
                    <br><p>Disini saya sebagai yang mengimplementasikan Web Design semuanya dari mockup yang sudah dibuat dari team UX untuk menjadi web. Serta ikut dalam membuat beberapa menu yang ada di dalam web.</p>`;
                linkModal.innerHTML = 
                    `<a href="https://www.plazatoyota.co.id/karanggan3/" target="_blank">
                        <i class='bx bx-globe'></i>
                        Plaza Paint
                    </a>
                    <a href="#">
                        <i class='bx bx-calendar-alt'></i>
                        2020
                    </a>`;
                break;
            case 'kinto':
                imgModal.src = "./assets/img/kinto-logo.png";
                titleModal.innerHTML = "KINTO LANDING PAGE";
                contentModal.innerHTML = 
                    `<p>Subscribe Cars dari PT TOYOTA ASTRA FINANCIAL SERVICES</p>
                    <br><p>Disini saya sebagai yang mengimplementasikan Web Design dan Fungsi Proses dari mockup yang sudah dibuat dari team UX untuk menjadi web.</p>`;
                linkModal.innerHTML = 
                    `<a href="https://www.rajamobil.com/kinto-2020" target="_blank">
                        <i class='bx bx-globe'></i>
                        Kinto
                    </a>
                    <a href="#">
                        <i class='bx bx-calendar-alt'></i>
                        2020
                    </a>`;
                break;
            case 'tcash':
                imgModal.src = "./assets/img/tcash.png";
                titleModal.innerHTML = "Dashboard Transaction Tcash";
                contentModal.innerHTML = 
                    `<p>Dompet Digital dari Telkomsel</p>
                    <br><p>Disini saya sebagai yang mengimplementasikan beberapa menu untuk tampil di dashboard.</p>`;
                linkModal.innerHTML = 
                    `<a href="https://www.rajamobil.com/kinto-2020" target="_blank">
                        <i class='bx bx-block'></i>
                        Internal Project
                    </a>
                    <a href="#">
                        <i class='bx bx-calendar-alt'></i>
                        2017
                    </a>`;
                break;

            default:
                imgModal.src = "./assets/img/undraw_posting_photo_v65l.png";
                titleModal.innerHTML = "This is Title Description";
                linkModal.innerHTML = 
                    `<a href="#" target="_blank">
                        <i class='bx bx-globe'></i>
                        www.bla-bla.co.id
                    </a>`;
                break;
        }
    },
    urlOrigin: function() {
        return window.location.origin;
    }
}

window.onload = function() {
    addOns.init();
};
// $(document).ready(function() {
//     addOns.init();
// });