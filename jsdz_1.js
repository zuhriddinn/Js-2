var yoshi = +prompt('Yoshingiz nechida')
console.log(yoshi);

if (0 < yoshi && yoshi <= 18) {
    console.log('Yoshsiz. O`qishingiz kerak');
    alert('Yoshsiz. O`qishingiz kerak')
} else if (18 < yoshi && 50 >= yoshi) {
    console.log('Ishlashingiz kerak');
    alert('Ishlashingiz kerak')
} else if (50 < yoshi && 59 >= yoshi) {
    console.log('Yaqinda pensiyaga chiqasiz');
    alert('Yaqinda pensiyaga chiqasiz')
} else if (50 < yoshi && 150 >= yoshi) {
    console.log('Pensionerga oxshaysiz, hali tirik bolsangiz :)');
    alert('Pensionerga oxshaysiz, hali tirik bolsangiz :)')
} else {
    console.log('Nimadir norogri ketib qoldi');
    alert('Nimadir norogri ketib qoldi')
}