$("#start").on("click", function(){
   game.start();
})

$(document).on("click","#end", function(){
    game.done();
})
var questions =[{
    question: "Who played Iron Man?",
    answers:["Robert Downey Jr.", "Tom Holland", "Chris Evans", "Jake Gyllenhaal"],
    correctAnswer:"Robert Downey Jr."
},{
    question: "Who constructed Captain America's shield?",
    answers: ["Tony Stark", "Red Skull", "Howard Stark", "Bucky Barnes"],
    correctAnswer:"Howard Stark"
}, {
    question:"Who is Thor's adopted sibling?",
    answers:["Odin", "Zuess", "Loki", "Lauefey"],
    correctAnswer:"Loki"
}, {
    question: "Who is the director of S.H.I.E.L.D. and developer of Avenger's Initiative?",
    answers:["Tony Stark", "Nick Fury", "Captain America", "Agent Coulson"],
    correctAnswer: "Nick Fury"
}, {
    question: "What is the name of Tony Stark's AI system?",
    answers: ["Alfred", "Henry", "Regis", "Jarvis"],
    correctAnswer: "Jarvis"
}, {
    question: "What is Captain America's shield made out of?",
    answers: ["Adamantium", "Kryptonite", "Chrome", "Vibranium"],
    correctAnswer:"Vibranium"
}, {
    question: "What is the name of the suit Iron Man gives Spider-Man?",
    answers: ["Web Pulser", "Mark IV", "Iron Spider", "Web Suit"],
    correctAnswer: "Iron Spider"
}, {
    question:"What did Iron Man tell his family before he died?",
    answers:["I left food in the fridge", "Don't forget me", "I'll miss you", "I love you 3000"],
    correctAnswer: "I love you 3000"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("Time is up!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");
        $("#start").remove();
        for(var i=0;i<questions.length;i++){
              $("#subwrapper").append("<h2>" +questions[i].question+ "</h2");
                for(var j=0;j<questions[i].answers.length;j++){
                    $("#subwrapper").append("<input type ='radio' name='question-"+i+"'value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])        
            }
        }
        $("#subwrapper").append("<br> <br> <button id='end'>DONE</button>")
    },
    done: function(){
        $.each($("input[name='question-0']:checked"),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"),function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"),function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"),function(){
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        
        this.result();
        },
        result:function(){
            clearInterval(timer);
            $("#subwrapper h2").remove();

            $("#subwrapper").html("<h2>All done!</h2>");
            $("#subwrapper").append("<h3>Correct Answers: "+this.correct+"</h3>");
            $("#subwrapper").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
            $("#subwrapper").append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");  
        }

}