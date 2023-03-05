
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier =ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/chgXCOuaJ/model.json", modelready)
}

function modelready()
    {
classifier.classify(gotresults);
    }
    function gotresults(error, results) 
{
    if (error)
    {
      console.error(error);
    } 
    else 
      {
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255)+1;
        random_number_g = Math.floor(Math.random()* 255)+1;
        random_number_b = Math.floor(Math.random()* 255)+1;
        document.getElementById("result_label").innerHTML = 'I can hear -'+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -'+ (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('cow')
        img1 = document.getElementById('cat')
        img2 = document.getElementById('dog')
        img3 = document.getElementById('Lion')

        if (results[0].label == "Roar")
        {
            img.src = 'Lion.jfif';
            img.src = 'Dog.jfif';
            img.src = 'cow.jfif';
            img.src = 'Cat.png';
        } else if (results[0].label == "Moo") 
        {
            img.src = 'Lion.jfif';
            img.src = 'Dog.jfif';
            img.src = 'cow.jfif';
            img.src = 'Cat.png';
        } else if (results[0].label == "Bark")
        {
            img.src = 'Lion.jfif';
            img.src = 'Dog.jfif';
            img.src = 'cow.jfif';
            img.src = 'Cat.png';
        } else if (results[0].label == "Meow")
        {
            img.src = 'Lion.jfif';
            img.src = 'Dog.jfif';
            img.src = 'cow.jfif';
            img.src = 'Cat.png';
        } 
        else
        {
            img.src = 'Lion.jfif';
            img.src = 'Dog.jfif';
            img.src = 'cow.jfif';
            img.src = 'Cat.png';
        }
    }
}