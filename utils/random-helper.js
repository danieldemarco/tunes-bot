// Helper functions for randomizing player matchups
const splitAt = function(i, list) {
    var a = list.slice(0,i);
    var b = list.slice(i, list.length);
    return [a, b];
};

const shuffle = function(list) {
    return list.slice(0).sort(function() {
        return .5 - Math.random();
    });
};

var zip = function(list) {
    return list[0].map(function(_,i) {
        return list.map(function(x) {
            return x[i];
        });
    });
};

var createMatchups = function(list) {
    if(list.length % 2 != 0) {
        console.log("Error. List has uneven number of items.");
        return
    }
    return zip(splitAt(list.length/2, shuffle(list)));
}

//TODO: Extract Data from db - This is currently just a hardcoded mess to print out the voting message
var myList = [
    ["Blacklight Shine","The Mars Volta","https://open.spotify.com/track/2DaRrPQ9ZJYlRH1ZogVPCk?si=475fa3bb202c4811"],
    ["Brenda Put Your Bra On","Ashley McBryde Presents Lindeville","https://open.spotify.com/track/17CFOvWbFKK7VJWQ2O8SP8?si=70b776f3a37d4f6a"],
    ["Church Burns","Zeal & Ardor","https://open.spotify.com/track/5nNC4nmtKh7N1Y1EhnkNmt?si=1mqY-T8ySVGuYMBewmgoig"],
    ["Crying While You're Dancing","Dayseeker","https://open.spotify.com/track/4OpVhwjX7ZjexVUoqDvDEW?si=58fb889bda1f4fb7"],
    ["Ep. 5: Hating Stuff","Ian McConnell","https://open.spotify.com/track/7tciLkkS6CrefNvFcgE1AY?si=bc8ea436143e4de7"],
    ["HEARTBREAKER CLUB","City Girl, tiffi, Highvyn","https://open.spotify.com/track/6Rpk7fmD3TWTBfJnIpjiZp?si=6sGsUWPnSayNZgWncwd9yw"],
    ["Kill a Man","James and the Shame","https://open.spotify.com/track/73kVK4V53CKrK0gsL5XzYH?si=48851c9c749b4283"],
    ["King","Florence + The Machine","https://open.spotify.com/track/31ABtQJdfloNaGz7ZhXaN5?si=7b8baf471923450f"],
    ["Lagoon","Dora Jar","https://open.spotify.com/track/4ZCjHrvSjyp7bltVJtGvNt?si=fSa6lR7QSbCtlIRIj1cuWQ"],
    ["Lay it All On Me","Phantoms","https://open.spotify.com/track/2KOtybbbu7YEQYf4pd3HjK?si=572162e4b5ce49ab"],
    ["Leah","Seeing Double","https://open.spotify.com/track/0zgIgtRQQuigpX4ox5uWwA?si=B11C0ul8TTKvyzUT3Mw7bg&context=spotify%3Aplaylist%3A37i9dQZF1F0sijgNaJdgit"],
    ["Astatine","Mat Zo","https://open.spotify.com/track/666PI2ou8H5MI98weRgnXI?si=3981ea1b76dd4904"],
    ["me + you","fifiknifefight","https://open.spotify.com/track/5S9k9HlR7JuZpcgRfkbWzO?si=86af05432d4c48f3"],
    ["Miracles","Alex G","https://open.spotify.com/track/6kjo1sI3Vc1Q47Ppm6FYRh?si=6ade30ad832d4d22"],
    ["Mon Amour","Stromae","https://open.spotify.com/track/51qEQn9uKebFs2H4gqv5xe?si=ZABO9OAhTMCYKtBJLY58hA"],
    ["Mystery to Myself","Brick + Mortar","https://open.spotify.com/track/2rJBgcrF8ItTWw5a4EZw2T?si=aae6de3d888047d0"],
    ["Oh Betty","Fantastic Negrito","https://open.spotify.com/track/1caexDoRB92w8ph8YLYQvu?si=a484e9f4857a437b"],
    ["Pizza Boy","Everything Everything","https://open.spotify.com/track/5khphhCjvNxqZ6V4E7NbPe?si=0f9dd7fc5336498b"],
    ["Playing God","Polyphia","https://open.spotify.com/track/6AhwAWzSlISc5ZvGonkgdN?si=iCR3tqYSRCex7Egu8SEiTg"],
    ["Seeds","Bennet Coast","https://open.spotify.com/track/4BwGU8l91SQWeVqnWqWClh?si=7952137dfa3045ba"],
    ["September Rain","Cassyette","https://open.spotify.com/track/7F1h4bQ0WZ7NSCPlfIfxLp?si=024bca2d200c493d"],
    ["Soul Sweet Song","Tedeschi Trucks Band","https://open.spotify.com/track/6tvXOpoonSGwxM0R4eq8Tj?si=9163e877ae724302"],
    ["Stick Season","Noah Kahan","https://open.spotify.com/track/0mflMxspEfB0VbI1kyLiAv?si=xaNR_1chRhuW4URLqBXjhA"],
    ["Taxi Driver","showmore","https://open.spotify.com/track/081aH87V7FfLfGoenHYBQE?si=79XiuQ3xTGWKW1dp6JpqGA"],
    ["Tea for Two","Christian Pace","https://open.spotify.com/track/6oK5Vyx8TQbE6LvOhW850k?si=1eda1f1058c64628"],
    ["Tower","Greg Freeman","https://open.spotify.com/track/5niAeUYYSWcMkTTCd5YwWu?si=cd84d133e66e4b83"],
    ["Troglodyte","Viagra Boys","https://open.spotify.com/track/57cpSE96L3Zz6LgIftPdC9?si=7-G1lz4sT3Kn5X4nIVilPg"],
    ["Where Do We Go From Here","MisterWives","https://open.spotify.com/track/5DObWDHfwHE2mIdZGgRnzE?si=0cf15a2ea651417b"],
    ["You Got to Be You (Instrumental)","Cory Wong","https://open.spotify.com/track/1OiIfgUVLKDe6hbpQvxkx1?si=0551ab176957481e"],
    ["Connection", "The Kooks", "https://open.spotify.com/track/28ko8FvQKBLEoKrL3VTiy5?si=51d7d3dc06a348f7"],
    ["The Rumbling", "SiM", "https://open.spotify.com/track/6k0X05danQOXSBTVek5DU1?si=abd263e4a9214256"],
    ["Oh Cecilia", "Born Ruffians", "https://open.spotify.com/track/6diHlXYoz0YgK3mZ8o1HNT?si=83d5b1c13ad64ff9"]
]

var matchups = createMatchups(myList);

for (let index = 0; index < matchups.length; index++) {
    console.log(matchups[index][0][0], " by ", matchups[index][0][1], " vs ", matchups[index][1][0], " by ", matchups[index][1][1]);
    console.log(matchups[index][0][2]);
    console.log(matchups[index][1][2]);
    console.log("Vote: :lizard: for ", matchups[index][0][0]);
    console.log("Vote: :turtle: for ", matchups[index][1][0]);
    console.log();
}