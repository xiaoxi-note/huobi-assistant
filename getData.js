var list = document.querySelectorAll('.base_currency');
var type = 'eth'
var data = [];
list.forEach(item => {
  data.push({
    icon: item.innerHTML.toLocaleLowerCase(),
    base: type
  })
})
console.log(JSON.stringify(data))