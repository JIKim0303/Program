const addBtn = document.getElementById('add-btn');
const parentList = document.getElementById('parent-list');

// for (let i = 0; i < 10; i++) {
//     addBtn.onclick = () => {
//     const childList = document.createElement('li');
//     childList.textContent = 'これは子要素'+i+'です';
//     parentList.appendChild(childList);
//     };
// }

// for (let i = 0; i < 10; i++) {
//     addBtn.addEventListener('click', () => {
//     const childList = document.createElement('li');
//     childList.textContent = 'これは子要素'+i+'です';
//     parentList.appendChild(childList);
// });
// }

let count = 1;
addBtn.addEventListener('click', () => {
    const childList = document.createElement('li');
    childList.textContent = 'これは子要素'+count+'です';
    parentList.appendChild(childList);
    count++;
});