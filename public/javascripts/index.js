
  // Open selected PDF
  function initReaderPlus() {
    file = document.getElementById('file-upload').files[0];
    if (file.name.indexOf("pdf") > 0) {
      // Load PDF in memory
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e2) {
        filedata = e2.target.result;
        data = filedata.substring(28);
      }
}
}
