function replaceText() {
    const searchVal = document.getElementById("search").value;
    const replaceVal = document.getElementById("replace").value;
    const textElement = document.getElementById("text-content");

    if (searchVal.trim() === "") {
        alert("يرجى إدخال الكلمة المراد البحث عنها");
        return;
    }

    const reg = new RegExp(searchVal, 'gi');

    const originalText = textElement.innerText;
    const newText = originalText.replace(reg, replaceVal);

    textElement.innerText = newText;
}