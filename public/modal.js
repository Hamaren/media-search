function modalY(obj) {
  alert('test');
    var modalObj = obj,
        slides,
        nextSlide,
        modalMode,
        objectLink;

    //создаем модалку
    var modalBack = document.createElement('div'),
        modalWindowY = document.createElement('div'),
        modalClose = document.createElement('a'),
        modalLoad = document.createElement('img');
    modalBack.className = 'modal-back';
    modalClose.className = 'y-modal-close';
    modalClose.innerHTML = '<i class="close-icon"></i>';
    modalLoad.src = '/images/media-loader.gif';
    modalLoad.className = 'modal-loader';
    modalWindowY.className = 'y-modal-window';

    //сообщение об ошибке
    var errorMsg = document.createElement('p');
    errorMsg.className = 'y-modal-error';
    errorMsg.innerHTML = 'Невозможно отобразить содержимое';

    //проверяем является ли объект картинкой (jpg или png)
    if (true) {

    }

    else {
        modalWindowY.appendChild(errorMsg);
    }

    modalWindowY.classList.add('show-modal');
    modalWindowY.appendChild(modalClose);
    modalWindowY.appendChild(modalLoad);
    modalBack.appendChild(modalWindowY);
    document.body.appendChild(modalBack);

    document.querySelector('.modal-back').addEventListener('click', function (e) {
        if (e.target.classList.contains('modal-back')) {
            document.body.removeChild(this);
        }
    });

    document.querySelector('.y-modal-close').onclick = function () {
        document.querySelector('.modal-back').remove(this);
    };

    function loadShow(value) {
        var loader = document.querySelector('.modal-loader');

        (value === 'hide') ? loader.style.display = 'none' : loader.style.display = 'block';
    }
}
