function getValues(){
    let player1_joker = $(".player1 #joker-amt").val();
    let player2_joker = $(".player2 #joker-amt").val();
    let player3_joker = $(".player3 #joker-amt").val();
    let player4_joker = $(".player4 #joker-amt").val();
    let jv = $("#joker-value").val();
    let player1_placement = $(".player1 #place").val();
    let player2_placement = $(".player2 #place").val();
    let player3_placement = $(".player3 #place").val();
    let player4_placement = $(".player4 #place").val();

    calcAll(player1_joker,player2_joker,player3_joker,player4_joker,player1_placement,player2_placement,player3_placement,player4_placement,jv)
    updateTotalScore()
}

var player1_score = 0;
var player2_score = 0;
var player3_score = 0;
var player4_score = 0;

function updateTotalScore(){
    $(".total-score .player1").html(Math.round(player1_score*100)/100);
    $(".total-score .player2").html(Math.round(player2_score*100)/100);
    $(".total-score .player3").html(Math.round(player3_score*100)/100);
    $(".total-score .player4").html(Math.round(player4_score*100)/100);
}

function calcAll(p1_j,p2_j,p3_j,p4_j,p1_p,p2_p,p3_p,p4_p,j_val){
    let lose_first = 4.5;
    let lose_second = -1;
    let lose_third = -1.5;
    let lose_forth = -2;

    let joker_value = parseFloat(j_val);

    let p1_joker = (parseFloat(p1_j) * joker_value);
    let p2_joker = (parseFloat(p2_j) * joker_value);
    let p3_joker = (parseFloat(p3_j) * joker_value);
    let p4_joker = (parseFloat(p4_j) * joker_value);

    let p1_placement = p1_p;
    let p2_placement = p2_p;
    let p3_placement = p3_p;
    let p4_placement = p4_p;

    //Player 1 earns Joker
    player1_score += p1_joker * 3;
    player2_score -= p1_joker;
    player3_score -= p1_joker;
    player4_score -= p1_joker;

    //Player 2 earns Joker
    player1_score -= p2_joker;
    player2_score += p2_joker * 3;
    player3_score -= p2_joker;
    player4_score -= p2_joker;

    //Player 3 earns Joker
    player1_score -= p3_joker;
    player2_score -= p3_joker;
    player3_score += p3_joker * 3;
    player4_score -= p3_joker;

    //Player 4 earns Joker
    player1_score -= p4_joker;
    player2_score -= p4_joker;
    player3_score -= p4_joker;
    player4_score += p4_joker * 3;

    if(p1_placement == "win"){
        player1_score += 6;
        player2_score -= 2;
        player3_score -= 2;
        player4_score -= 2;
    }else if(p2_placement == "win"){
        player1_score -= 2;
        player2_score += 6;
        player3_score -= 2;
        player4_score -= 2;
    }else if(p3_placement == "win"){
        player1_score -= 2;
        player2_score -= 2;
        player3_score += 6;
        player4_score -= 2;
    }else if(p4_placement == "win"){
        player1_score -= 2;
        player2_score -= 2;
        player3_score -= 2;
        player4_score += 6;
    }else if(p1_placement == "lose" || p2_placement == "lose" || p3_placement == "lose" || p4_placement == "lose"){
        switch (p1_placement){
            case "lose":
                player1_score += lose_forth;
                break;
            case "3":
                player1_score += lose_third;
                break;
            case "2":
                player1_score += lose_second;
                break;
            case "1":
                player1_score += lose_first;
                break;

        }
        switch (p2_placement){
            case "lose":
                player2_score += lose_forth;
                break;
            case "3":
                player2_score += lose_third;
                break;
            case "2":
                player2_score += lose_second;
                break;
            case "1":
                player2_score += lose_first;
                break;
        }
        switch (p3_placement){
            case "lose":
                player3_score += lose_forth;
                break;
            case "3":
                player3_score += lose_third;
                break;
            case "2":
                player3_score += lose_second;
                break;
            case "1":
                player3_score += lose_first;
                break;
        }
        switch (p4_placement){
            case "lose":
                player4_score += lose_forth;
                break;
            case "3":
                player4_score += lose_third;
                break;
            case "2":
                player4_score += lose_second;
                break;
            case "1":
                player4_score += lose_first;
                break;
        }
    }else{
        switch (p1_placement){
            case "4":
                player1_score -= 1.5;
                break;
            case "3":
                player1_score -= 1;
                break;
            case "2":
                player1_score -= 0.5;
                break;
            case "1":
                player1_score += 3;
                break;
        }
        switch (p2_placement){
            case "4":
                player2_score -= 1.5;
                break;
            case "3":
                player2_score -= 1;
                break;
            case "2":
                player2_score -= 0.5;
                break;
            case "1":
                player2_score += 3;
                break;
        }
        switch (p3_placement){
            case "4":
                player3_score -= 1.5;
                break;
            case "3":
                player3_score -= 1;
                break;
            case "2":
                player3_score -= 0.5;
                break;
            case "1":
                player3_score += 3;
                break;
        }
        switch (p4_placement){
            case "4":
                player4_score -= 1.5;
                break;
            case "3":
                player4_score -= 1;
                break;
            case "2":
                player4_score -= 0.5;
                break;
            case "1":
                player4_score += 3;
                break;
        }
    }

    let p1_name = $(".player1 input").val();
    $(".player1 span").html(p1_name);
    $(".player1 input").css("display","none");

    let p2_name = $(".player2 input").val();
    $(".player2 span").html(p2_name);
    $(".player2 input").css("display","none");

    let p3_name = $(".player3 input").val();
    $(".player3 span").html(p3_name);
    $(".player3 input").css("display","none");

    let p4_name = $(".player4 input").val();
    $(".player4 span").html(p4_name);
    $(".player4 input").css("display","none");






}
