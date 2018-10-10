const say = require("say");

say.speak('hello!');

say.stop();

const helloAndrew = () => {
    say.speak("Hello Andrew", "Alex");
}

setTimeout(helloAndrew, 1250);

say.speak("Hello Alex.")



