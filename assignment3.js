
// https://github.com/SazzadPro/assignment3.git

function kilometerToMeter(km) {
    var meter = km*1000;
    return meter;

}
//var output= kilometerToMeter(5);
//console.log(output);


function budgetCalculator(watch, mobile, laptop){
    var watchPrice= 50;
    var mobilePrice= 100;
    var laptopPrice= 500;
    if(watch>=0, mobile>=0, laptop>=0 ){
        var watchTotal= watch* watchPrice; 
        var MobileTotal= mobile* mobilePrice; 
        var laptopTotal= laptop* laptopPrice; 
        return watchTotal+MobileTotal+laptopTotal;
    }
    else{
        if(watch<0, mobile<0, laptop<0){
            return "Enter a minimum Quantity"
        }
    }
}

//var output= budgetCalculator(1,0,0);
//console.log(output);



function hotelCost(day){
    var totalCost = [];
     if(day <= 10){
            totalCost = day * 100;
        }
        else if(day > 10 && day <= 20){
            var first10Day = 10 * 100;
            var remaining = day - 10;
            var second10Day = remaining * 80;
            totalCost = first10Day + second10Day;
        }
        else{
            var first10Day = 10 * 100;
            var second10Day = 10 * 80;
            var remaining = day - 20;
            var thirdAllDay = remaining * 50;
            totalCost = first10Day + second10Day + thirdAllDay;
        }
        return totalCost;
    }
    
//result = hotelCost(0);
//console.log(result);




function megaFriend(arr){
    var large = arr[0];
     for (let i = 0; i < arr.length; i++) {
        var element = arr[i];
            if( large.length < element.length){
                large = element;
        }
    }
    return large;
}
//var  friends = ["Akbar","abdullah","robin","abdurrohim","ali", "Bakkar Ali"]
//var largeWord = megaFriend(friends);
//console.log(largeWord);