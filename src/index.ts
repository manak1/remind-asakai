import * as functions from "firebase-functions";
import axios from "axios"
const slack_url = `${functions.config().slack.url}`
const message = {
  text: 'もうすぐ朝会だよ！！！！！！！！( ﾟДﾟ)'
}

export const remindAsakai = functions.pubsub.schedule('every monday,tuesday,wednesday,thursday,friday 22:10').timeZone('Asia/Tokyo').onRun(async (context) => {
  try {
    await axios.post(slack_url, JSON.stringify(message))
    return true;
  }
  catch (error) {
    functions.logger.log('エラー', error)
    return false
  }
})
