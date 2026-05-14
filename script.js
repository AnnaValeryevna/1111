let accessKey = '07e148e59c09ea7e452f816adb76b178';

// Работа с разделом 'orders'
fetch(`http://web4.informatics.ru:82/api/${accessKey}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ order1: 'Товар 1', order2: 'Товар 2' })
});

// Работа с разделом 'settings'
fetch(`http://web4.informatics.ru:82/api/${accessKey}/settings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ theme: 'dark', language: 'ru' })
});
