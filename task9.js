/*rite a function that returns the number of users in a chatroom based on the following rules:

Quyidagi qoidalar asosida chatdagi foydalanuvchilar sonini qaytaruvchi funksiyani yozing.

If there is no one, return "no one online".

If there is 1 person, return "user1 online".

If there are 2 people, return "user1 and user2 online".

If there are n>2 people, return the first two names and add "and n-2 more online".

Hech kim bo'lmasa, "onlayn hech kim"ni qaytaring.

Agar 1 kishi bo'lsa, "user1 online"ni qaytaring.

Agar 2 kishi bo'lsa, "user1 va user2 online"ni qaytaring.

Agar n>2 kishi bo'lsa, dastlabki ikkita ismni qaytaring va `"va yana n-2 onlayn" qo'shing.

For example, if there are 5 users, return:

"user1, user2 and 3 more online"
Examples
chatroomStatus([]) ➞ "no one online"

chatroomStatus(["paRIE_to"]) ➞ "paRIE_to online"

chatroomStatus(["s234f", "mailbox2"]) ➞ "s234f and mailbox2 online"

chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]) ➞ "pap_ier44, townieBOY and 4 more online"
 */

const arr = ["s234f", "mailbox2"];

function chatroomStatus(arr){
    if(arr.length === 0){
        console.log("no one online");
    }else if(arr.length === 1){
        console.log(`${arr[0] } online`);
    }else if(arr.length === 2){
        console.log(`${arr[0] } and ${arr[1] } online`);
    }else{
        console.log(`${arr[0] }, ${arr[1] } and ${arr.length - 2} online`);
    }
}

chatroomStatus(arr);