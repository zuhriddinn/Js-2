var a = +prompt('1-soni kriting')
var b = +prompt('2-soni kriting')
var c = +prompt('3-soni kriting')

if (a >= b && a >= c) {
    var katta = a
} else if (b > a && b >= c) {
    var katta = b
} else if (c > a && c > b) {
    var katta = c
} else {
    alert('Nimadir notog`ri ketib qoldi')
}

if (a <= b && a <= c) {
    var kichik = a
} else if (b < a && b <= c) {
    var kichik = b
} else if (c < a && c < b) {
    var kichik = c
} else {
    alert('Nimadir notog`ri ketib qoldi')
}

if (a <= b && a >= c || a >= b && a <= c) {
    var ortaqiymati = a
} else if (b < a && b >= c || b > a && b <= c) {
    var ortaqiymati = b
} else if (c < b && c > a || c > b && c < a) {
    var ortaqiymati = c
} else {
    alert('Nimadir notog`ri ketib qoldi')
}

alert('Siz kiritkan sonlarni kattasi ' + katta + ' ,kichigi ' + kichik + ' ,O`rtaqiymati esa ' + ortaqiymati +'.')