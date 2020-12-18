# Cloudsek Hackathon Submission [![Made with JavaScript](https://img.shields.io/badge/javascript-14.15.1-grey?style=for-the-badge&labelColor=blue&logo=javascript)](https://www.nodejs.org/)

## Problem Statement by CloudSEK: Build a minimal web path bruteforcer: Optimised memory, CPU usage

### The CLI interface to the web path bruteforcer should accept these from the user:
<ul> <li>webapp url</li>
<li>A file containing a list of webapp paths that need to be brute forced against the specified webapp url [Minimum paths: 1000]<br>
Sample wordlist: Link </li>
<li>List of success status code: (default: [200])</li>
</ul>
<h3> Sample Input:</h3>

Webapp url: https://www.github.com<br>
Webapp paths: sample 5 lines out of 1000 of the input file wordlist.txt
<ul><li>admin</li>
<li>info</li>
<li> .git/config</li>
<li> .htaccess </li>
<li>backup.zip
</li></ul>

Success status codes: [200, 302]

## Usage:
```
npm install node-fetch
node app.js [url] [word file] [status code]
```

### Example
```
node app.js www.github.com file.txt 200 302
```

## Note
For a python implementation of this problem's solution (a more robust and faster solution because of multi-threading), head over to my repo :
[Python Webpath Bruteforcer](https://github.com/Nikzy7/cloudsek-hackathon-python-webpath-bruteforcer)
