function uploadFile() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (!file) {
    alert("select file");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/upload", true);

  xhr.upload.onprogress = function (event) {
    if (event.lengthComputable) {
      const percentCompleted = Math.round((event.loaded / event.total) * 100);
      updateProgress(percentCompleted);
    }
  };

  xhr.onload = function () {
    if (xhr.status === 200) {
      alert("file upload successfully");
    } else {
      alert("upload failed");
    }
  };

  xhr.open = function () {
    alert("Network Error. Unable to upload file.");
  };

  xhr.send(formData);
}
function updateProgress(percent) {
  const processesFill = document.getElementById(progressFill);
  progressFill.style.width = percent + "%";
  progressFill.textContent = percent + "%";
}
