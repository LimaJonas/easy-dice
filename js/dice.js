function callDice(){
    $('#diceModal').modal('toggle');
    
    document.getElementById("dice").innerHTML = Math.round(Math.random() * (20 - 1) + 1); 
    setTimeout(function(){ 
        document.getElementById("dice").innerHTML = Math.round(Math.random() * (20 - 1) + 1); 
        setTimeout(function(){ 
            document.getElementById("dice").innerHTML = Math.round(Math.random() * (20 - 1) + 1); 
            setTimeout(function(){ 
                document.getElementById("dice").innerHTML = Math.round(Math.random() * (20 - 1) + 1); 
                setTimeout(function(){
                    document.getElementById("dice").innerHTML = Math.round(Math.random() * (20 - 1) + 1); 
                    setTimeout(function(){
                        document.getElementById("dice").innerHTML = Math.round(Math.random() * (20 - 1) + 1);
                        setTimeout(function(){ 
                            document.getElementById("dice").innerHTML = Math.round(Math.random() * (20 - 1) + 1); 
                            setTimeout(function(){ 
                                document.getElementById("dice").innerHTML = Math.round(Math.random() * (20 - 1) + 1); 
                                setTimeout(function(){ 
                                    document.getElementById("dice").innerHTML = Math.round(Math.random() * (20 - 1) + 1); 
                                    setTimeout(function(){
                                        document.getElementById("dice").innerHTML = Math.round(Math.random() * (20 - 1) + 1); 
                                        setTimeout(function(){ 
                                            document.getElementById("dice").style.fontWeight = "900";
                                            var number = Math.round(Math.random() * (20 - 1) + 1)
                                            document.getElementById("dice").innerHTML = number;
                                            setTimeout(function(){ 
                                                $('#diceModal').modal('toggle');
                                                return number;
                                            }, 1000);
                                        }, 100);
                                    }, 100);
                                }, 100);
                            }, 100);
                        }, 100); 
                    }, 100);
                }, 100);
            }, 100);
        }, 100);
    }, 400);
}