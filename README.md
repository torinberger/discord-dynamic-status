# discord-dynamic-status
Updates your custom discord status every 10 secs.
# Usage
Simply fill out a `.env` file with your custom statuses and your discord token. Like so:
```env
TOKEN="YOURDISCORDTOKENHERE"
LINE1="example status 1"
LINE2="example status 2"
LINE3="example status 2"
LINE4="example status 2"
LINE5="example status 2"
LINE6="example status 2"
```
Then run `npm install` and `node index.js`. The program should loop your custom status through every 10 secs.
