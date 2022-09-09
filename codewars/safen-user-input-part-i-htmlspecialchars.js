function htmlspecialchars(formData) {
    let resultString = '';
    for(let i = 0; i < formData.length; i++) {
        if (formData[i] === '<') {
            resultString += '&lt;';
        } else if (formData[i] === '>') {
            resultString += '&gt;';
        } else if (formData[i] === '"') {
            resultString += '&quot;';
        } else if (formData[i] === '&') {
            resultString += '&amp;';
        } else {
            resultString += formData[i];
        }
    }
    return resultString;
}

/*
function htmlspecialchars(formData) {
  return formData.replace(/&/g, "&amp;")
                 .replace(/"/g, "&quot;")
                 .replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;");
}
*/

/*
function htmlspecialchars(formData) {
  return formData.replace(/[<>"&]/g, ch => ({"<":"&lt;",">":"&gt;","\"":"&quot;","&":"&amp;"}[ch]));
}
*/

/*
function htmlspecialchars(formData) {
    const dict = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    return formData.replace(/[<>"&]/g, char => dict[char]);
}
*/

/*
const htmlspecialchars = formData => formData.replace(/[<>"&]/g, m => ({"<": "&lt;", ">": "&gt;", "\"": "&quot;", "&": "&amp;"})[m])
*/

console.log(htmlspecialchars('Hello, how would you & I fare?'));
