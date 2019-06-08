
function renderTweets(tweets) {
     
    var tweetsHTMl = tweets.map( (tweet)=>{
       return `
            <div class = "mt-5">
                <div class = "p-3" style = "border-style : solid; border-width : 1px;">
                   <div class = "d-flex flex-row">
                        <img src = "${tweet.user.profilePic}" style = "width : 10%; height : 10%" />
                        <div class = "ml-1 mt-3">
                            <div>
                                ${tweet.user.username}
                                <span>verified</span>
                            </div>
                            <div>${tweet.user.handle}</div>
                        </div>
                   </div>
                   <div class = "content">
                        <h3>${tweet.text}</h3>
                   </div>
                   <hr>

                   <div class = "d-flex flex-row" style = "color : #696969;">
                        <div class = ""><b>${tweet.replies}</b></div>
                        <div class = "ml-5"><b>${tweet.retweets}</b></div>
                        <div class = "ml-5"><b>${tweet.likes}</b></div>
                   </div>
                </div>
            </div>`
            
    })
    console.log(tweetsHTMl)
    return (
        `
        <div >
            ${tweetsHTMl.join('')}
        </div>
        `
    )

    
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}