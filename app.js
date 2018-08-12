// var a = 10

// console.log(a);



var Questions = function (question, answer, correctAnswer) {
    this.question = question,
    this.answer = answer,
    this.correctAnswer = correctAnswer
}

Questions.prototype.displayQandA = function () {
    console.log(this.question);
    for(var i = 0; i < this.answer.length; i++){
        console.log(i + ': ' + this.answer[i]);
        
    }
}

Questions.prototype.checkAns = function(ans){
    if(ans === this.correctAnswer){
        console.log('Correct Answer');       
    }else{
        console.log('Wrong Answer');
        
    }

}

var q1 = new Questions('What is 11 squared ??', ['111', '121', '110'], 1);

var q2 = new Questions('What is pi (3.14159265) to the power of pi??', ['36.4621596', '27.1234567', '30.9591444','9.8596'], 0);

var q3 = new Questions('1.1111111111 x 2.2222222222=?', ['1.2222222222', '2.1111111111', '2.4691358','4.2309764'], 2);

var ques = [q1, q2, q3];

var n = Math.floor(Math.random()* ques.length)

ques[n].displayQandA();

var answer = parseInt(prompt('Please, Submit your Answer...'))


ques[n].checkAns(answer)







