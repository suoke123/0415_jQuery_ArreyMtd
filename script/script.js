$(function(){

    $("button").click(function(){

        var memChk = ["test01", "guest", "youyh"];
        // 가입되어있는 아이디

        var inputID = $("#chkID").val().trim();
        // 회원 가입시 사용자가 입력한 ID (중복검사용)

        var output = "";

        var chkTF = true;

        $.each(memChk, function(i, v){   // i 자동으로 가져온 배열의 인덱스, v 해당 인덱스의 실제값

        if (inputID == v) {
               // if의 조건식이 true라면
            output = "사용중인 ID입니다.";
            chkTF = false;
        }

    });

    if (chkTF) {
        output = "사용가능한 ID입니다.";
    }

    $("#output").html(output);

    });

});
