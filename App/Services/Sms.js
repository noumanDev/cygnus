import SmsAndroid from 'react-native-get-sms-android';

let filter = {
    box: 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
    // the next 4 filters should NOT be used together, they are OR-ed so pick one
    // read: 1, // 0 for unread SMS, 1 for SMS already read
    // _id: 1234, // specify the msg id
    // address: '+1888------', // sender's phone number
    //  body: 'How are you', // content to match
    // the next 2 filters can be used for pagination
    indexFrom: 0, // start from index 0
    maxCount: 20, // count of SMS to return each time
};
export const readMessages = (customFilter, successCallback) => {
    debugger;
    filter = { ...filter, ...customFilter };

    SmsAndroid.list(JSON.stringify(filter), (fail) => {
        console.log("Failed with this error: " + fail)
    },
        successCallback);
}