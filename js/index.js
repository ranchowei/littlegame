/*
现在存在的问题
1.如果没有在倒计时内答对本道题，time up的提示语不会立即出来，而是需要再点击一下才可以出来
*/

var str = "";
var score = 0;
var number = ["1", "2", "3"];
var sign = [" + ", " - "];
var level = 2;
var str0 = " = ?";
var str1 = "";
var result;
var bestscore = 0;
var time = [0];
var timemeasure = 0;
var x = 1;
$("#4").text("score:" + score);
//第一次初始生成题目及答案

// q: 初始可以考虑写个函数，直接调用函数，不需要while来循环吧
while (true) {
    var n1 = Math.floor(Math.random() * 3);
    var n2 = Math.floor(Math.random() * 3);
    var s1 = Math.floor(Math.random() * 2);
    str = number[n1] + sign[s1] + number[n2] + str0;
    $("#5").text(str);


    //计算结果
    if (s1 == 0) {
        result = n1 + n2 + 2;
    } else {
        result = n1 - n2
    }
    if (result >= 1 && result <= 3) {
        str1 = number[n1] + sign[s1] + number[n2] + " = " + result;
        break;
    }
}


function mytest() {

    x = 0;
    var y = event.target.id
    x = parseInt(y)
    console.log(event.target.id)

    timer();
    if (timemeasure >= 3000 && timemeasure <= 1500000000000) {
        if (score > bestscore) {
            bestscore = score
        }
        alert("time up\n" + "correct answer : " + str1 + "\n" + "你这次只得了" + score + "分\n" + "highest score : " + bestscore);
        time.pop();
        score = 0;
        $("#4").text("score:" + score);
        return;
    } else if (x == result) {
        console.log("对")
        score++;
        $("#4").text("score:" + score);
    } else {
        console.log("错")
        if (score > bestscore) {
            bestscore = score
        }
        alert("哈哈哈答错啦笨蛋\n" + "correct answer : " + str1 + "\n" + "你这次只得了" + score + "分\n" + "highest score : " + bestscore)
        score = 0;
        $("#4").text("score:" + score);
        time.pop();
    }


    //生成题目及答案
    while (true) {
        var ruanshu = Math.floor(Math.random() * 100);

        if (score <= 3) {
            var n1 = Math.floor(Math.random() * 3);
            var n2 = Math.floor(Math.random() * 3);
            var s1 = Math.floor(Math.random() * 2);
            str = number[n1] + sign[s1] + number[n2] + str0;
            $("#5").text(str);


            //计算结果
            if (s1 == 0) {
                result = n1 + n2 + 2;
            } else {
                result = n1 - n2
            }
            str1 = number[n1] + sign[s1] + number[n2] + " = " + result;
        } else if (score > 3 && score <= 10 && ruanshu >= 45) {
            var n1 = Math.floor(Math.random() * 3);
            var n2 = Math.floor(Math.random() * 3);
            var n3 = Math.floor(Math.random() * 3);
            var s1 = Math.floor(Math.random() * 2);
            var s2 = Math.floor(Math.random() * 2);
            str = number[n1] + sign[s1] + number[n2] + sign[s2] + number[n3] + str0;
            $("#5").text(str);


            //计算结果
            if (s1 == 0 && s2 == 0) {
                result = n1 + n2 + n3 + 3;
            } else if (s1 == 1 && s2 == 0) {
                result = n1 - n2 + n3 + 1
            } else if (s1 == 0 && s2 == 1) {
                result = n1 + n2 - n3 + 1
            } else {
                result = n1 - n2 - n3 - 1
            }
            str1 = number[n1] + sign[s1] + number[n2] + sign[s2] + number[n3] + "=" + result;
        } else if (score > 3 && score <= 10 && ruanshu < 45) {
            var n1 = Math.floor(Math.random() * 3);
            var n2 = Math.floor(Math.random() * 3);
            var s1 = Math.floor(Math.random() * 2);
            str = number[n1] + sign[s1] + number[n2] + str0;
            $("#5").text(str);


            //计算结果
            if (s1 == 0) {
                result = n1 + n2 + 2;
            } else {
                result = n1 - n2
            }
            str1 = number[n1] + sign[s1] + number[n2] + " = " + result;
        } else if (score > 10 && ruanshu >= 40) {
            var n1 = Math.floor(Math.random() * 3);
            var n2 = Math.floor(Math.random() * 3);
            var n3 = Math.floor(Math.random() * 3);
            var n4 = Math.floor(Math.random() * 3);
            var s1 = Math.floor(Math.random() * 2);
            var s2 = Math.floor(Math.random() * 2);
            var s3 = Math.floor(Math.random() * 2);
            str = number[n1] + sign[s1] + number[n2] + sign[s2] + number[n3] + sign[s3] + number[n4] + str0;
            $("#5").text(str);


            //计算结果
            if (s1 == 0 && s2 == 0 && s3 == 0) {
                result = n1 + n2 + n3 + n4 + 4;
            } else if (s1 == 1 && s2 == 0 && s3 == 0) {
                result = n1 - n2 + n3 + n4 + 2
            } else if (s1 == 0 && s2 == 1 && s3 == 0) {
                result = n1 + n2 - n3 + n4 + 2
            } else if (s1 == 0 && s2 == 0 && s3 == 1) {
                result = n1 + n2 + n3 - n4 + 2
            } else if (s1 == 1 && s2 == 1 && s3 == 0) {
                result = n1 - n2 - n3 + n4
            } else if (s1 == 1 && s2 == 0 && s3 == 1) {
                result = n1 - n2 + n3 - n4
            } else if (s1 == 0 && s2 == 1 && s3 == 1) {
                result = n1 + n2 - n3 - n4
            } else if (s1 == 1 && s2 == 1 && s3 == 1) {
                result = n1 - n2 - n3 - n4 - 2
            }
            str1 = number[n1] + sign[s1] + number[n2] + sign[s2] + number[n3] + sign[s3] + number[n4] + " = " + result;
        } else if (score > 10 && ruanshu <= 40 && ruanshu >= 15) {
            var n1 = Math.floor(Math.random() * 3);
            var n2 = Math.floor(Math.random() * 3);
            var n3 = Math.floor(Math.random() * 3);
            var s1 = Math.floor(Math.random() * 2);
            var s2 = Math.floor(Math.random() * 2);
            str = number[n1] + sign[s1] + number[n2] + sign[s2] + number[n3] + str0;
            $("#5").text(str);


            //计算结果
            if (s1 == 0 && s2 == 0) {
                result = n1 + n2 + n3 + 3;
            } else if (s1 == 1 && s2 == 0) {
                result = n1 - n2 + n3 + 1
            } else if (s1 == 0 && s2 == 1) {
                result = n1 + n2 - n3 + 1
            } else {
                result = n1 - n2 - n3 - 1
            }
            str1 = number[n1] + sign[s1] + number[n2] + sign[s2] + number[n3] + "=" + result;
        } else if (score > 10 && ruanshu < 15) {
            var n1 = Math.floor(Math.random() * 3);
            var n2 = Math.floor(Math.random() * 3);
            var s1 = Math.floor(Math.random() * 2);
            str = number[n1] + sign[s1] + number[n2] + str0;
            $("#5").text(str);


            //计算结果
            if (s1 == 0) {
                result = n1 + n2 + 2;
            } else {
                result = n1 - n2;
            }
            str1 = number[n1] + sign[s1] + number[n2] + " = " + result;
        }

        if (result >= 1 && result <= 3) {
            break;
        }
    }
}

//自制计时器
function timer() {
    var now = new Date();
    var clicktime = now.getTime()
    var beforetime = time.pop()
    time.push(clicktime)
    timemeasure = clicktime - beforetime
}

//倒计时修改 start
var pos = 0;
var loading;
function myMove() {
    pos = 0;
    $("#animate").css("width", "0px");
    if(loading) {
        clearInterval(loading);
    }
    
    loading = setInterval(frame, 6);
}
function frame() {
    if (pos == 500 || score == 0) {
        clearInterval(loading);
    } else {
        pos++;
        var strpos = pos.toString(10) + "px"
        $("#animate").css("width", strpos);
    }
}
//倒计时修改 end





//进度条工作
// function myMove() {
//     var pos = 0;
//     $("#animate").css("width", "0px");
//     var id = setInterval(frame, 6);

//     function frame() {
//         if (pos == 500 || score == 0) {
//             clearInterval(id);
//         } else {
//             pos++;
//             var strpos = pos.toString(10) + "px"
//             $("#animate").css("width", strpos);
//         }
//     }
// }


//失败的例子，不过从中有所借鉴
//自制延时函数
/*function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}*/

//开始计时
/*function mytimer() {
    clearInterval(timer);
    timer = setInterval(function() {
        n++;
        var m = parseInt(n / 60);
        var s = parseInt(n % 60);
        oTxt.value = toDub(m) + ":" + toDub(s);
    }, 1000 / 60);
    if (m >= 60) {
        alert("time up");
    }
};*/