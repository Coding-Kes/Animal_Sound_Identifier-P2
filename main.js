
function start()
{
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/U5B_thxAt/model.json", modelLoaded);
}

function modelLoaded()
    {
        classifier.classify(gotResult);
    }

    function gotResult(error, result)
    {
        if(error)
        {
            console.error(error);
        }
        else
        {
            console.log(result);
        }
    }



    https://teachablemachine.withgoogle.com/models/U5B_thxAt/