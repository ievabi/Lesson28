let totalCoins = 0;
let toSpendCoins = 0;
let smallUpgradeCount = 0;
let smallUpgradePrice = 10;
let bigUpgradeCount = 0;
let bigUpgradePrice = 90;

setInterval(function () {
    if (toSpendCoins >= smallUpgradePrice) {
        $('#upgrade-1-btn').prop('disabled',false);
    } else {
        $('#upgrade-1-btn').prop('disabled', true);
    };

    if (toSpendCoins >= bigUpgradePrice) {
        $('#upgrade-10-btn').prop('disabled',false);
    } else {
        $('#upgrade-10-btn').prop('disabled',true);

    };

    totalCoins += (smallUpgradeCount + (10 * bigUpgradeCount)) / 100;
    toSpendCoins += (smallUpgradeCount + (10 * bigUpgradeCount)) / 100;
    $('#total-coins').html(Math.floor(totalCoins));
    $('#spend-coins').html(Math.floor(toSpendCoins));
    $('#upgrade-1').html(smallUpgradeCount);
    $('#upgrade-10').html(bigUpgradeCount);
    $('#upgrade-1-price').html(parseFloat(smallUpgradePrice.toFixed(1)));
    $('#upgrade-10-price').html(parseFloat(bigUpgradePrice.toFixed(1)));
}, 10);


//click button listener
$('#click-me').on('click', function () {
    totalCoins++;
    toSpendCoins++;
});

//1x upgrade button listener
$('#upgrade-1-btn').on('click', function () {
    smallUpgradeCount++;
    toSpendCoins -= smallUpgradePrice;
    smallUpgradePrice *= 1.1;

})

//10x upgrade button listener
$('#upgrade-10-btn').on('click', function () {
    bigUpgradeCount++;
    toSpendCoins -= bigUpgradePrice;
    bigUpgradePrice *= 1.1;
})


