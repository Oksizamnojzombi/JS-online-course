// Init User service
const user = new UserService();
// Init User UI
const userUI = new UserUI();
// Init Image UI
const imageUI = new ImageUI();

// UI elements
const inputCover = document.getElementById("coverImg");
const inputUserPhotos = document.getElementById("userPhotos");
const imgWrapper = document.querySelector("div.images-wrap")

/**
 * onLoad - обработчик событи€ звгрузки страницы, активирует методы экземпл€ра объекта UserService
 * данные полученные в ответе сервера отправл€ютс€ в метод UserUI.renderUserInfo который сепарирует данные
 * дл€ отображени€ на странице, очищаетс€ темплейт, и вставл€ютс€ изображени€
 * @param {*} e 
 */
function onLoad(e) {
    user.getInfo()
        .then((data) => {
            userUI.renderUserInfo(data);
            return data;
        })
        .then((data) => {
            imageUI.clearContainer();
            data.my_images.forEach((img) => imageUI.addImage(img));
        })
        .catch((error) => {
            console.log(error);
        });
}
/**
 * onCoverUpload - обработчик на событие загрузки файла спроверкой состо€ни€, и передачей на
 * user.uploadCover он запрашивает обновленную информацию, распарсивает ее и устанавливает новый
 * фон
 * @param {*} e 
 */
function onCoverUpload(e) {
    if (inputCover.files.length) {
        const [newCover] = inputCover.files;
        user.uploadCover(newCover)
            .then(user.getInfo)
            .then((data) => userUI.setCover(data.cover))
            .catch((error) => {
                console.log(error);
            });
    }
}
/**
 * onPhotosUpload -  обработчик отправки пользовательских изображаний с выводом изображени€
 * @param {Event} e 
 */
function onPhotosUpload(e) {
    e.stopPropagation;

    if (inputUserPhotos.files.length) {
        const userPhoto = inputUserPhotos.files;
        const arrFiles = [];
        for (let kay in userPhoto) {
            if (isFinite(kay)) {
                arrFiles.push(userPhoto[kay]);
            }
        }
        arrFiles.forEach((photo) => {
            user.loadPhoto(photo)
                .then(user.getInfo)
                .then((data) => {
                    userUI.renderUserInfo(data);
                    return data;
                })
                .then((data) => {
                    imageUI.clearContainer();
                    data.my_images.forEach((img) => imageUI.addImage(img));
                })
            //Ќужно обнулить состо€ние инпута, не знаю как
        })
    }
}
/**
 * imageOpertion  - обработчик оперций с картинками пользовател€
 * @param {Event} e  - клик по полю в котором размещены изображени€ пользовател€
 */
function imageOpertion(e) {
    e.stopPropagation;

    if (e.target.classList.contains("fa-trash-alt")) {
        const imgId = e.target.closest("div.img-wrap").dataset.imgId;
        const imgUrlParametr = e.target.closest("div.img-wrap").querySelector("img").src.slice(80);
        const confirmation = confirm(`ƒействительно удалить изображение є ${imgId}?`);
        if (confirmation) {
            user.deletePhoto(imgId, imgUrlParametr)
                .then(user.getInfo)
                .then((data) => {
                    userUI.renderUserInfo(data);
                    return data;
                })
                .then((data) => {
                    imageUI.clearContainer();
                    data.my_images.forEach((img) => imageUI.addImage(img));
                })
        }
    }
}


// Events
window.addEventListener("load", onLoad);

/**
 * присвоени€ событи€ на загрузщик фона
 */
inputCover.addEventListener("change", onCoverUpload);
/**
 * присвоение событи€ отправи пользовательского изображени€
 */
inputUserPhotos.addEventListener("change", onPhotosUpload);

/**
 * присвоение событи€ клика по галерее изображений
 */
imgWrapper.addEventListener("click", imageOpertion);