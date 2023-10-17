# This post-processor was made with the help of ChatGPT.
from bs4 import BeautifulSoup
with open('debug.html', 'r', encoding='utf-8') as f:
    debug_content = f.read()


soup = BeautifulSoup(debug_content, 'html.parser')


stream_div = soup.find('div', {'id': 'stream'})
stream_content = str(stream_div.prettify())
stream_children_content = ''.join(str(child) for child in stream_div.children)

print('Stream div fetched. Dumping to ./content/stream.html')
with open('./content/stream.html', 'w', encoding='utf-8') as f:
    f.write(stream_children_content)
print('Stream children dumped successfully.')

for child in stream_div.children:
    child.replaceWith('')
print('Cleared stream div children. Dumping.')
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("Index dumped successfully to ./index.html")
print('--- Finished.')
