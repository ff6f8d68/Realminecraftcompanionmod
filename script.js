// script.js

document.getElementById('topic-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const response = await fetch('/api/topics', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
    });

    if (response.ok) {
        loadTopics();
        document.getElementById('topic-form').reset();
    } else {
        alert('Failed to create topic');
    }
});

async function loadTopics() {
    const response = await fetch('/api/topics');
    const topics = await response.json();

    const topicsList = document.getElementById('topics-list');
    topicsList.innerHTML = '';

    topics.forEach(topic => {
        const li = document.createElement('li');
        li.innerHTML = `<h3>${topic.title}</h3><p>${topic.content}</p>`;
        topicsList.appendChild(li);
    });
}

window.onload = loadTopics;
