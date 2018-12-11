/**
 * UserService - ���������� ��������� ���������� ������������
 * @class 
 * 
 */
class UserService {

    /**
     * ������ �� ��������� ������ � ������������
     * @return {Object} ������ ���������� �� JSON
     */
    getInfo() {
        return new Promise((resolve, reject) => {
            const id = localStorage.getItem("social_user_id");

            fetch(`${env.apiUrl}/public/users/get-info/${id}`)
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }

    /**
     * uploadCover - ����� �������� ����� ��� ��������� ����, ����� Form Data ������� �������� ���
     * �������� �� ������, ��������� � ���� ���� � ����������� ��� ��� ����� formData.append("coverImg", file)
     * ������� ������ � ��������� �� ��������� ��������� � ���������� POST  ������ �� ������ � ������
     * � ������� "x-access-token": token
     * @param {File} file - ����������� ����������� 
     */
    uploadCover(file) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("coverImg", file);

            // Get token
            const token = localStorage.getItem("social_user_token");
            // Get user id
            const id = localStorage.getItem("social_user_id");

            if (!token || !id) return reject("Error. Unauthorized.");

            fetch(`${env.apiUrl}/public/users/upload-cover/${id}`, {
                method: "POST",
                body: formData,
                headers: {
                    "x-access-token": token
                }
            })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }

    /**
     * loadPhoto - ����� �������� ���������������� ����������� �� ������, ����� fetch POST FormData
     * @param {File} photo - ����������� �����������
     */
    loadPhoto(photo) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();

            formData.append("userPhotos", photo);

            const token = localStorage.getItem("social_user_token");
            const id = localStorage.getItem("social_user_id");

            if (!token || !id) return reject("Error. User  did not authorize.");

            fetch(`${env.apiUrl}/public/users/upload-photos/${id}`, {
                method: 'POST',
                body: formData,
                headers: {
                    "x-access-token": token
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    if (!data.error) { console.log("User photos updated success!") }
                })
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }

    /**
     * deletePhoto -  ����� �������� ���������� � �������� � �������
     * @param {String} photoId  -  ������������� ����������� � ��������
     * @param {String} urlParametr - ����� �������������� ����������� �� �������
     */
    deletePhoto(photoId, urlParametr) {
        return new Promise((resolve, reject) => {
            const id = localStorage.getItem("social_user_id");
            const token = localStorage.getItem("social_user_token");
            fetch(`${env.apiUrl}/public/users/remove-photo/${id}`, {
                method: 'DELETE',
                body: JSON.stringify({
                    image_id: `${photoId}`,
                    image_url: `users-photos/userPhotos-${urlParametr}`
                }),
                headers: {
                    "x-access-token": token,
                    "Content-type": "application/json"
                }
            })
                .then((data) => data.json())
                .then((data) => {
                    if (!data.error) { console.log(data.message) }
                    return data;
                })
                .then((data) => resolve(data))
                .catch((error) => reject(error.message));
        });
    }
}