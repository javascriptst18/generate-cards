let list = [
  {
    title: 'PlainJS - DOM Manipulation',
    href: 'https://plainjs.com/javascript/manipulation/',
    color: 'lightsalmon',
    tags: ['javascript', 'dom'],
    dateAdded: '2018-03-12'
  },
  {
    title: 'Chrome Developers Tools - Debug',
    href: 'https://developers.google.com/web/tools/chrome-devtools/javascript/',
    color: 'blue',
    tags: ['chrome', 'debug'],
    dateAdded: '2018-02-27'
  },
  {
    title: 'Code Quizzes - JavaScript',
    href: 'http://www.codequizzes.com/javascript',
    color: 'lightsalmon',
    tags: ['javascript', 'quiz', 'beginner'],
    dateAdded: '2017-09-23'
  },
  {
    title: 'Code Analogies - Tutorials',
    href: 'https://www.codeanalogies.com/',
    color: 'lightsalmon',
    tags: ['javascript', 'tutorials'],
    dateAdded: '2018-06-11'
  },
  {
    title: 'Baffled Nerd - Tutorials',
    href: 'http://www.bafflednerd.com/learn-javascript-online/',
    color: 'lightsalmon',
    tags: ['javascript', 'tutorials'],
    dateAdded: '2017-08-30'
  },
  {
    title: 'JavaScript.info - Modify Document',
    href: 'http://javascript.info/modifying-document',
    color: 'lightsalmon',
    tags: ['javascript', 'dom'],
    dateAdded: '1989-09-30'
  },
  {
    title: 'PlainJS - Events',
    href: 'https://plainjs.com/javascript/events/',
    color: 'blue',
    tags: ['javascript', 'events', 'dom'],
    dateAdded: '2018-04-01'
  }
];

const container = document.querySelector('#container');

for (let item of list) {
  if (item.tags.includes('javascript')) {
    let card = `
      <div class="card" style="background-color:${item.color}">
        <a href="${item.href}">${item.title}</a>
        <p class="tags">${ item.tags.join(',')}</p>
      <div>
    `;
    container.insertAdjacentHTML('afterbegin', card);
  }
}

const cards = document
  .querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', function (event) {
    event.target.querySelector('.tags').classList.toggle('hidden');
  })
}

console.log("hej");
