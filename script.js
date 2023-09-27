const words = [
  { word: 'prominence', description: 'The state of being important or famous' },
  { word: 'treasury secretary', description: 'The head of the treasury department' },
  { word: 'secretary of state', description: 'The head of the State Department' },
  { word: 'divergent', description: 'Tending to be different or develop in different directions' },
  { word: 'presidential cabinet', description: 'Advisory body to the President' },
  { word: 'avert', description: 'To turn away or prevent' },
];

let currentWordIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
  showWord();
  createDraggableWords();
});

function showWord() {
  document.getElementById('description').innerText = words[currentWordIndex].description;
}

function createDraggableWords() {
  const wordsContainer = document.getElementById('wordsContainer');
  words.forEach((item, index) => {
    const wordElement = document.createElement('div');
    wordElement.innerText = item.word;
    wordElement.classList.add('draggable');
    wordElement.setAttribute('draggable', 'true');
    wordElement.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', index);
    });
    wordsContainer.appendChild(wordElement);
  });

  const dropZone = document.getElementById('dropZone');
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    const draggedWordIndex = e.dataTransfer.getData('text/plain');
    if (draggedWordIndex == currentWordIndex) {
      currentWordIndex++;
      if (currentWordIndex < words.length) {
        showWord();
      } else {
        alert('Congratulations! You matched all words.');
      }
    } else {
      alert('Wrong match. Try again.');
    }
  });
}
