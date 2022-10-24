// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { body } = req;
  fetch(process.env.DISCORD_WEBHOOK_URL,
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // the username to be displayed
        username: 'SPY LEVELS',
        // the avatar to be displayed
        avatar_url:
          "https://cdn.discordapp.com/attachments/426683559403847690/1034002567195275274/bearbull.png",
        // contents of the message to be sent
        content:
          body.content,
      })
    }
  ).then(() => {
    res.status(200).json({'status':'success'})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({'status':'failed'})
  })
}
