  //тут тоже не понял смысл использования async/await. вставил просто "по учебнику", но работает и без этого

//САМОЕ ГЛАВНОЕ - не понял как реализвать localStorage - подскажите пожалуйста в личке в Пачке


const button = document.querySelector('.btn');
const result = document.querySelector('.result');

button.addEventListener('click', async () => {

const page = document.querySelector('.inputPage').value;
const limit = document.querySelector('.inputLimit').value;

  if (isNaN(page) || page < 1 || page > 10) {
        result.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
  } else if (isNaN(limit) || limit < 1 || limit > 10) {
       result.innerHTML = 'Лимит вне диапазона от 1 до 10';
  } else {
       const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
       await fetch(url)
      .then(response => response.json())
      .then(data => {
        const imagesHTML = data.map(image => `<img src="${image.download_url}">`).join('');
        result.innerHTML = imagesHTML;
      })
      .catch(error => {
    result.textContent = `Ошибка: ${error.message}`;
      });
  }
});
