function changeVocals(str) {
    //code di sini

    var hurufVocal1 = 'aeiouAEIOU'
    var hurufnonvocal = 'bfjpvBFJPV'
    var kamus = 'bcdfghjklmnpqrstvwxyz'
    var kamusBesar = 'BCDFGHJKLMNPQRSTVWXYZ'
    var hasil = ''

    for (let i = 0; i < str.length; i++) {

        //untuk spasi
        if (str[i] == ' ') {
            hasil += ' '
        }

        //UNTUK MEMBANDINGKAN VOKAL
        for (let j = 0; j < hurufVocal1.length; j++) {

            if (str[i] == hurufVocal1[j]) {

                hasil += hurufnonvocal[j]
            }


        }
        //untuk membandingkan nonvokal
        for (let a = 0; a < kamus.length; a++) {

            if (str[i] == kamus[a]) {

                hasil += kamus[a]
            }
            else if (str[i] == kamusBesar[a]) {

                hasil += kamusBesar[a]
            }
        }
    }
    return hasil
}

// console.log(changeVocals('saya adalih'))//benar

function reverseWord(str) {
    //code di sini

    let tampung = ''


    for (let i = str.length - 1; i >= 0; i--) {


        tampung += str[i]

    }

    return tampung
}

// console.log(reverseWord('coba'))

function setLowerUpperCase(str) {
    //code di sini

    let kamus = 'abcdefghijklmnopqrstuvwxyz'
    let kamusBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let tampung = ''

    for (let i = 0; i < str.length; i++) {

        //untuk spasi
        if (str[i] == ' ') {

            tampung += ' '

        }

        for (let j = 0; j < kamus.length; j++) {

            //untuk huruf kecil berubah jadi besar
            if (str[i] === kamus[j]) {

                tampung += kamusBesar[j]

            }
            //untuk huruf kapital berubah jadi kecil
            if (str[i] === kamusBesar[j]) {

                tampung += kamus[j]
            }




        }

    }
    return tampung

}

// console.log(setLowerUpperCase('BESAR kecil'))

function removeSpaces(str) {
    //code di sini

    let tampung = ''

    for (let i = 0; i < str.length; i++) {

        if (str[i] != ' ') {

            tampung += str[i]
        }

    }

    return tampung
}

// console.log(removeSpaces('k i t  a'))//benar

function passwordGenerator(name) {
    //code di sini

    if (name.length < 5) {

        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }

    name = changeVocals(name)
    name = reverseWord(name)
    name = setLowerUpperCase(name)
    name = removeSpaces(name)

    // var hasil = removeSpaces

    return name


}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'