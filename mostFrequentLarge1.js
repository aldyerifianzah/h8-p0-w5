
// console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]))

function sorting(arrNumber) {
    // code di sini

    //urutin angkanya

    for (let i = 0; i < arrNumber.length; i++) {

        for (let j = 0; j < arrNumber.length; j++) {

            if (arrNumber[i] < arrNumber[j]) {

                var tempt = arrNumber[i];

                arrNumber[i] = arrNumber[j]

                arrNumber[j] = tempt

            }
        }

    }
    return arrNumber
}

// console.log(getTotal([2, 8, 4, 6, 8, 5, 8, 4]))
function getTotal(arrNumber) {

    var obj = {}

    for (let i = 0; i < arrNumber.length; i++) {

        //pakai objek

        //buat label

        //jika belum ada maka bikin label baru, dan di isi nol
        if (obj[arrNumber[i]] == undefined) {

            obj[arrNumber[i]] = 0
        }

        //bila sudah ada label nya maka nilai tambah
        obj[arrNumber[i]]++

    }

    var nilaiTertinggi = sorting(arrNumber)[arrNumber.length - 1]

    if (arrNumber.length == 0) {

        return "''"
    } else {

        return `angka paling besar adalah ${nilaiTertinggi} dan jumlah kemunculan sebanyak ${obj[nilaiTertinggi]} kali`

    }
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
// //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//   //''