function myFunction(){
    alert("I'm sorry, but this website is not done yet. Come back soon and you'll see what a cool website this will be. Thank you!")
};

function aboutMe(){
    alert("Aww, I'm flattered you want to learn about me, but I'll talk more about me at a later time ;3")
};

function project(){
    alert("Right now I'm working on this, but you'll see my other work soon.")
};

function resume(){
    alert("I don't have a funny transition for this one so let's talk about helium. Did you know that all of earths helium will be gone in the next few years? Kind of scary to think about. Now you'll think twice about using it for nonsense")
};

function contact(){
    alert("Sorry I would give you my number, but I have a loving girlfriend that would kill me if I gave it to you. I'll give you hers if you want to talk about it")
}

// D20
function randomNum(){
    let ranNum = Math.floor(Math.random() *20);
    ranNum++;
    if (ranNum === 1){
          alert(`Eww, You have rolled the dreaded "${ranNum}", It's not your day is it?`)
        } else if (ranNum === 2|| ranNum ===3){
          alert(`You rolled a "${ranNum}". You know, numbers don't always have to determine your fate`);
        } else if (ranNum === 4|| ranNum===5){
            alert(`You rolled a "${ranNum}". Not great, but you'll be fine...maybe`);
        } else if (ranNum === 6|| ranNum===7){
            alert(`You rolled a "${ranNum}". There's nothing wrong with mediocre, but for this situation it's not that great`);
        } else if (ranNum ===8|| ranNum===9){
            alert(`You rolled a "${ranNum}". So close to being average, but I still believe in you.`);
        } else if (ranNum === 10|| ranNum===11){
            alert(`You rolled a "${ranNum}". Not too bad, not too good, but that's just perfect for average.`);
        } else if (ranNum === 12|| ranNum===13){
            alert(`You rolled a "${ranNum}". You're going to be just fine`);
        } else if (ranNum === 14|| ranNum===15){
            alert(`You rolled a "${ranNum}". Alright, that's good, keep up the good work.`);
        } else if (ranNum === 16|| ranNum===17){
            alert(`You rolled a "${ranNum}". You must be having a fairly decent day.`);
        } else if (ranNum === 18 || ranNum===19){
            alert(`You rolled a "${ranNum}". Your day is going to be great. Keep up the good work.`);
        } else{
            alert(`AMAZING!!! YOU ROLLED A "${ranNum}" YOU ARE GONNA HAVE A AWESOME DAY!!!`);
        }
      };