/**
 * Given an index k, return the kth row of the Pascal's triangle.
 For example, given k = 3,
 Return [1,3,3,1].
 Note:
 Could you optimize your algorithm to use only O(k) extra space? -- YES!
 */

function getPascalRow(k) {
    if (k === 0)
        return [1];
    if (k === 1)
        return [1, 1];

    k = k - 1;
    var row = [1, 1];

    while (k > 0) {
        var a = 0, b = row.shift();

        do {
            row.push(a+b);
            a = b;
            b = row.shift();
        } while(b !== 1);

        row.push(a+b);
        row.push(1);
        k--;
    }

    return row;
}

function onClick() {
    var k = Number(document.getElementById("number").value);
    var result = document.getElementById("result");
    result.innerHTML = getPascalRow(k).join();
}