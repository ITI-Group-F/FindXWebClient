import Fuse from 'fuse.js';

export const countNotifications = (convs, userid) => {
  let count = 0;
  convs.forEach((conv) => {
   
    let lastMsg = conv.messages[conv.messages.length - 1];
    if (lastMsg.senderId !== userid && lastMsg.seen == false) {
      count++;
    }
  });
  return count;
};

export const setLastMessageAsSeen = (connection,Userid,ConvID) => {
  if (connection) {
    connection.invoke(
      "SetMessageAsRead",
      Userid,
      ConvID,
    );
  }
}

export const SearchinContacts = (contacts,searchWord) => {

  let fuse = new Fuse(contacts, {
    keys: ["receiver.firstName", "receiver.lastName","sender.firstName", "sender.lastName"],
    threshold: .3,
  });
  let result= fuse.search(searchWord)

 return result
}

