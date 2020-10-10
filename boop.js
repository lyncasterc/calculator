let s = '1234'
s = s.split('')
s.splice(1,0,',')
s = s.join('')
console.log(s)