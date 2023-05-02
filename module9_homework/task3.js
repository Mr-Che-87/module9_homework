//ЗАДАНИЕ 3

/**
  * Функция-обертка над XMLHttpRequest, осуществляющая запрос
  * url - урл, по которому будет осуществляться запрос
  * callback - функция, которая вызовется при успешном выполнении
  * и первым параметром получит объект-результат запроса
  */
function useRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  };
  
  //ноды для вставки запроса и для кнопки, вызывающей запрос
  const resultNode = document.querySelector('.result');
  const btnNode = document.querySelector('.btn');
  
  function displayResult(apiData) {
    let images = '';
    
  
  /**
    * Функция обработки полученного результата
    * apiData - объект с результатом запроса
    */
    apiData.forEach(item => {
      const image = `
            <img
            src="${item.download_url}"
            class="image"
          />
          `;
          images += image;
        });
    
  resultNode.innerHTML = images;
  }
  
  
  
  // Вешаем обработчик на кнопку для запроса  (всё что выше - фактически шаблон)
  btnNode.addEventListener('click', () => {
    const value = document.querySelector('.input').value;
    if (value < 1 || value > 10) {
      resultNode.innerHTML = "Число вне диапазона от 1 до 10";
    } else {
      useRequest(`https://picsum.photos/v2/list?limit=${value}`, displayResult);
    }
  });
  