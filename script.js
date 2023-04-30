const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

let storyText = `It was 94 fahrenheit outside, so ${randomValueFromArray(insertX)} went for a walk. When they got to ${randomValueFromArray(insertY)}, they stared in horror for a few moments, then ${randomValueFromArray(insertZ)}. Bob saw the whole thing, but was not surprised — ${randomValueFromArray(insertX)} weighs 300 pounds, and it was a hot day.`;

function convertFahrenheitToCelsius(temperature) {
  return Math.round((temperature - 32) * (5/9));
}

function convertPoundsToStone(weight) {
  return Math.round(weight / 14);
}

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(convertPoundsToStone(300));
    const temperature =  Math.round(convertFahrenheitToCelsius(94));
    newStory = newStory.replace('94 fahrenheit', `${temperature} centigrade`);
    newStory = newStory.replace('300 pounds', `${weight} stone`);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14);
    const temperature =  Math.round((94 - 32) * 5 / 9);
    newStory = newStory.replace('94 fahrenheit', `${temperature} centigrade`);
    newStory = newStory.replace('300 pounds', `${weight} stone`);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
