//ЗАДАНИЕ 4


//только я не понял нужно как тут использовать асинх-эвейт.. и нужно ли вообще...


const btn = document.querySelector('.btn');
const result = document.querySelector('.result');


btn.addEventListener('click', async () => {

const width = document.querySelector('.inputWidth').value;
const height = document.querySelector('.inputHeight').value; 

  if (isNaN(width) || isNaN(height) || width < 100 || width > 300 || height < 100 || height > 300) {
    result.textContent = 'Одно из чисел вне диапазона от 100 до 300';
    return;
  }

  const url = `https://picsum.photos/${width}/${height}`;

  fetch(url)
    .then(response => {
      const img = document.createElement('img');
      img.src = response.url;
      result.innerHTML = '';
      result.appendChild(img);
    })
    .catch(error => {
      result.textContent = `Ошибка: ${error.message}`;
    });
    
});