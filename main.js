
function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier =ml5.soundclassifier("https://teachablemachine.withgoogle.com/models/chgXCOuaJ/model.json", modelready)
}

function modelready()
    {
classifier.classify(gotresults);
    }