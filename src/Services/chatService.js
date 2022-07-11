export const countNotifications = (convs, userid) => {
  let count = 0;
  convs.forEach((conv) => {
   
    let lastMsg = conv.messages[conv.messages.length - 1];
    if (lastMsg.senderId == userid && lastMsg.seen == false) {
      count++;
    }
  });
  return count;
};
