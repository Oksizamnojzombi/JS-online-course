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
 * onLoad - ���������� ������� �������� ��������, ���������� ������ ���������� ������� UserService
 * ������ ���������� � ������ ������� ������������ � ����� UserUI.renderUserInfo ������� ���������� ������
 * ��� ����������� �� ��������, ��������� ��������, � ����������� �����������
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
 * onCoverUpload - ���������� �� ������� �������� ����� ���������� ���������, � ��������� ��
 * user.uploadCover �� ����������� ����������� ����������, ������������ �� � ������������� �����
 * ���
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
 * onPhotosUpload -  ���������� �������� ���������������� ����������� � ������� �����������
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
            //����� �������� ��������� ������, �� ���� ���
        })
    }
}
/**
 * imageOpertion  - ���������� ������� � ���������� ������������
 * @param {Event} e  - ���� �� ���� � ������� ��������� ����������� ������������
 */
function imageOpertion(e) {
    e.stopPropagation;

    if (e.target.classList.contains("fa-trash-alt")) {
        const imgId = e.target.closest("div.img-wrap").dataset.imgId;
        const imgUrlParametr = e.target.closest("div.img-wrap").querySelector("img").src.slice(80);
        const confirmation = confirm(`������������� ������� ����������� � ${imgId}?`);
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
 * ���������� ������� �� ��������� ����
 */
inputCover.addEventListener("change", onCoverUpload);
/**
 * ���������� ������� ������� ����������������� �����������
 */
inputUserPhotos.addEventListener("change", onPhotosUpload);

/**
 * ���������� ������� ����� �� ������� �����������
 */
imgWrapper.addEventListener("click", imageOpertion);