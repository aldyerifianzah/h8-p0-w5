function cariPelaku(str) {
    // you can only write your code here!

    var a = str.match(/[abc]/gi)

    var count = 0
    for (let i = 0; i < a.length; i++) {

        if (a[i] + a[i + 1] + a[i + 2] == 'abc') {

            count++
        }

    }

    return count

}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2