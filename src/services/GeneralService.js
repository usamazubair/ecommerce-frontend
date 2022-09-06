import axios from "utils/axios";

class GeneralService {
  uploadImage(url, file, progressCallback = (progress) => {}) {
    const totalSize = file.size;

		const formData = new FormData();
    formData.append("file", file);

    return axios
      .post(url, formData, {
        onUploadProgress: (progressEvent) => {
          const progress = (progressEvent.loaded / totalSize) * 100;
          progressCallback(progress.toFixed(2));

          return;
        },
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
}

export default new GeneralService();
