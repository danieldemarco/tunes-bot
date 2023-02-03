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
var round1 = [
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
];

var round2 = [
    ['Africa','Toto','https://open.spotify.com/track/2374M0fQpWi3dLnB54qaLX?si=fd8a5ce4503f488a'],
    ['Aquarium','Mac Miller','https://open.spotify.com/track/279mQTc69K0AxTHTsBysxa?si=d7df5eab00e3465f'],
    ['Arms of the Ocean','Blackbriar','https://open.spotify.com/track/2qcxAbaFai3ZXle18e7FTn?si=4ad569502ea94c18'],
    ['Breng Me Naar Het Water','Manuel Spaan','https://open.spotify.com/track/0wu3hxDEvfjKwDuHrNEK9Q?si=2c957b110b1e4240'],
    ['Bring the Rain','Finish Ticket','https://open.spotify.com/track/5rRGqo572rEZHeyhdNhbol?si=5IMN1uSSQw6172c3FH_AvA'],
    ['Come Clean','Hilary Duff','https://open.spotify.com/track/2TZ1apxMDlubCGMsOxcTbT?si=7tJNbCEITBGRj0PKbIsASg'],
    ['Fire + Water','Stormzy','https://open.spotify.com/track/2jQxSv4fhUKr0zJYgX5NcT?si=fd4bc2f65e974225'],
    ['Here Comes the Lightning','Big B','https://open.spotify.com/track/2yHI4FnF7NXReCv5EoPLja?si=cddf0558489d4c42'],
    ['In The Water','Head North','https://open.spotify.com/track/48zskx7bQ2BLBCZWuQv0wX?si=ad31aadce0174f4a'],
    ['Islands In the Stream','Dolly Parton, Kenny Rogers','https://open.spotify.com/track/6dnco8haegnJYtylV26cBq?si=WCqtFHQQTbGs4l0Q_ST40Q'],
    ['Just Like Water','Ms. Lauryn Hill','https://open.spotify.com/track/4GedwOz9QDga5UI6n1wUPW?si=vyRi3uqGSsaZeNYx6cfoOg'],
    ['Like a Wave','Cat Clyde','https://open.spotify.com/track/0p3bGYYZTf75CskrmGwpVi?si=8a6e99c0295844a9'],
    ['Low Tide Love','Tipling Rock','https://open.spotify.com/track/0c9jfZf7kDbguXFbTWlGso?si=r66GtyJ_S2ywXryOR5y-7g'],
    ['Oceans','Vallis Alps','https://open.spotify.com/track/2suCvIjriPQrcYHGmWjFh8?si=Z4UvQaITTXS3YZqrDCYU2Q&context=spotify%3Aplaylist%3A0kZjewV1tvbnKQk4knoFOT'],
    ['Osaka in the Rain','Matt the Electrician','https://open.spotify.com/track/2EKkhoWdAlBrud1U2kzMmT?si=6f73b46b7b7148a9'],
    ['Pool','tricot','https://open.spotify.com/track/25RpEzp7HMYWHw1St6FrHA?si=e1b34b7ceb9548d1'],
    ['Queen Of Rain','Roxette','https://open.spotify.com/track/4jBEyGpFHppg5jknR0yxcy?si=Y8ZzgN4TT8W45phHfGv-eQ&context=spotify%3Aalbum%3A6yhZFWd0wGN0QCchNFYn0Q'],
    ['Rainy Night in Tallinn','Ludwig Goransson','https://open.spotify.com/track/5r6l0sPvfeAPjQ67fCgOwG?si=4135e72273674c40'],
    ['Surfin U.S.A','The Beach Boys','https://open.spotify.com/track/5r84UnwABy2ZcG0BbYUS60?si=87537ce9ae704c88'],
    ['Swim','Valley','https://open.spotify.com/track/3Nl6eD5Jz6TLESdBx1Mpjo?si=738ecc844ae44a3d'],
    ['The Beast Of Pirates Bay','Aurello Voltaire','https://open.spotify.com/track/7wadXptuXPNtM7aLfMK6xX?si=Y8teGM2wTLuLmss-QJtRNA'],
    ['The Dripping Tap','King Gizzard and the Lizard Wizard','https://open.spotify.com/track/0o6rOggbaLEvtwUHNztuD2?si=1221624545374a38'],
    ['The Wreck of the Endmund Fitzgerald','Gordon Lightfoot','https://open.spotify.com/track/536L9C0N7vhYdibCJx3cI2?si=fFDRlYSrRbuVc6z12Q254g'],
    ['Under the Water (fg .IV)','AllttA','https://open.spotify.com/track/2YUS8qCSBq2WOjOfh1QpDc?si=139a0e521324485b'],
    ['Water Music','Roberto Musci','https://open.spotify.com/track/59tZeAAToFV84Bp1p29boA?si=b41f28460c9a4694'],
    ['Waterfall','Crown Lands','https://open.spotify.com/track/1S5gtUHR5DiPhYnLKe3pyG?si=3d1ccc5953ea4f2a'],    
    ['way out in the rain','Sweeps','https://open.spotify.com/track/5OInN22k2dxvLgCWOBh91Z?si=8d1614eac24b4197'],
    ["BYE","BYE","BYE"]
];

var round3 = [
    ['Alls Well That Ends','Rainbow Kitten Surprise','https://open.spotify.com/track/37ZvpHeZKazqOnLfAGm9nb?si=6f94a01ded7b4dad'],
    ['Beastly','Vulfpeck, Vulf','https://open.spotify.com/track/5fl9iJbPf5ZPenmUJxH2k9?si=SRJftrkXREGn54ctnFKNjw'],
    ['Biðröð Mistaka','Hatari','https://open.spotify.com/track/2ExYYb9QvKgWfn79NlbR7z?si=5e1c5246eb6d4fad'],
    ['Bring Me To Life','Evanescence','https://open.spotify.com/track/0COqiPhxzoWICwFCS4eZcp?si=efAGldAzR66MY1-sPL43pw'],
    ['bury a friend','Billie Eilish','https://open.spotify.com/track/4SSnFejRGlZikf02HLewEF?si=KT3qDdAQRUuxQJdE13w8XA'],
    ['Damaged Goods','La Dispute','https://open.spotify.com/track/5RLsrR4JS6U9rdJYSAXeOu?si=e5f2b8b7b0124100'],
    ['Demons','Hayley Kiyoko','https://open.spotify.com/track/0V93bON7wh29gDWYD1AAo5?si=uYq6m4UvT_mvA3L-outkhA&context=spotify%3Asearch%3Ademons'],
    ['Doctor Worm','They Might Be Giants','https://open.spotify.com/track/6OmApaLQPqHZL3iI78FOUR?si=oOxBvtLMSVmiDeF-8qksNQ'],
    ['DRIVE OFF A BRIDGE','Jakey','https://open.spotify.com/track/5BUMezybH9ddavsNH1O6Py?si=4f99afde78e744f6'],
    ['Falling Asleep','Soul Blind','https://open.spotify.com/track/2cNEBi6UTZfbFlwKCYHiHC?si=bc93868d850f4970'],
    ['Gassed','Bobby Krlic','https://open.spotify.com/track/6JAFr2i1IWnkLHPCAMFx1C?si=4cea30c02d2d4313'],
    ['Haunted','Laura Les','https://open.spotify.com/track/1toNKayLMeCcVlsLGXJl7n?si=79e592ffef3640ba'],
    ['How To Never Stop Being Sad','dandelion hands','https://open.spotify.com/track/6ZLt6fyonW1xOGMBC9vJPJ?si=gmcBttIFQQe9_MTCIcUZrA'],
    ['Let Them See Us','Agent Fresco','https://open.spotify.com/track/1pmRiBvIqhwsoBtvMblLku'],
    ['Lipstick To Void','Mica Levi','https://open.spotify.com/track/3iJP1AzZzlbUqJNJUvfJo3?si=fe1521e0fe1742ac'],
    ['Monstrance Clock','Ghost','https://open.spotify.com/track/70dOLeFZQqrmIHdcJcazoT?si=I7_-FoMbQoyOz9Yz0eZHfA&utm_source=copy-link'],
    ['Never Thought','Mel Bryant & the Mercy Makers','https://open.spotify.com/track/4Cu9eIDavwgabGjIhiu5Be?si=a9a32389e15f4710'],
    ['Not a Lot to Fear','Navy Blue','https://open.spotify.com/track/4lKmBs5dS81vXwJ2FsMbWE?si=a92eb400abd642c7'],
    ['Phobia','Nothing But Thieves','https://open.spotify.com/track/5Q0bw2MFy1pRHJXZgssBtz?si=8n6oB7wUQYaX8Gi7ZNSrRg'],
    ['R U Afraid','HVDES','https://open.spotify.com/track/6x2497wWaSlpPeLYzTuPuP?si=aKF0WiJbSViyZ0jeUyp-hQ'],
    ['Somebodys Watching Me','Rockwell','https://open.spotify.com/track/2H2379xRxgQVvcOSoL8Ajr?si=KSR0FxTSTJW1VYOsCqf2zg'],
    ['Sound of Madness','Shinedown','https://open.spotify.com/track/0W9Xvd4Qx1aZPxEi94vgRY?si=e4e671b380e64df6'],
    ['Story 2','clipping.','https://open.spotify.com/track/1UsHdJAj4Y1sMIqAh1mS02?si=689c32b6462b483e'],
    ['Swim and Sleep (Like a Shark)','Unknown Mortal Orchestra','https://open.spotify.com/track/1UcgqK04vVmW8aXV2OxGiZ?si=04612cbe2fc3452b'],
    ['That Funny Feeling','Phoebe Bridgers','https://open.spotify.com/track/30y5OpD8TPAru2wsyZDD4S?si=68QIjFXjT3aTN2ceuzheeg'],
    ['The Purple People Eater','Sheb Wooley','https://open.spotify.com/track/0WkZQPNC0c7yrsMX1arVAd?si=32569dda1ae7467e'],
    ['Tili Tili Bom','James Smith','https://open.spotify.com/track/55My09hfdVxxJbGIvjMrNV?si=meTrELXOQoWbo8qTLKUWIg&utm_source=copy-link'],
    ['To Be in Love','Crimson Apple','https://open.spotify.com/track/41ta6RqFAVXwu89uFfSnBd?si=pxaxEH8YSeWaVIgRo22YCg'],
    ['Unveil','Pyramaze','https://open.spotify.com/track/7uShaYM7Xyd8i7GP1oqitf?si=940a640def1048d6'],
    ['Wonderin','Channell, 2b.Frank, Lyds','https://open.spotify.com/track/3HenGKQ9HhXxhb8bH03DbD?si=QStE209oSCO6SzZYZMDUAg&context=spotify%3Aplaylist%3A37i9dQZF1DX1jlzMTQ2PY5'],
    ['WTF Is Sleep','Worriers','https://open.spotify.com/track/1znpcokss9CURVtNsvALmt?si=g57bdFD0T8moI54DioygxQ&utm_source=copy-link'],
    ['BYE','BYE','BYE']
]

var round4 = [
    ['Ængus, The Prize-Winning Hog','The Toxhards','https://open.spotify.com/track/4JGcsKQL2U3VyPBLuUSQuA?si=9cef66b264ce49c5'],
    ['Aftershock','Pentakill, Tre Watson','https://open.spotify.com/track/6BPJCWBiFHF7ItUQlyyP6x?si=0700b9d0d26b4b89'],
    ['Alrighty Aphrodite','Peach Pit','https://open.spotify.com/track/6OiRh4kttAs1YWglvTcYkB?si=ntmHNKnFSuSZqBlpjB7Csw'],
    ['Anoana','Heilung','https://open.spotify.com/track/4wF6lIxhTibOo5yeeYChUf?si=e06ca513122f47a0'],
    ['Drink & Industry','Dabu, Simon Swerwer','https://open.spotify.com/track/6AhtzeiqZgXVObsIIcCOSV?si=042028a2bb3449a5'],
    ['El Fusilado','Chumbawamba','https://open.spotify.com/track/1WilxtJJua7KKvdae2BdZR?si=50832689900f4367'],
    ['Gift of The Magi 2: Return of The Magi','AJJ','https://open.spotify.com/track/3xK0VFKx7RDnIhWcpdwHrP?si=7b1bf2a566d94fb2'],
    ['God Made Man','Young the Giant','https://open.spotify.com/track/5xJzQ5EatJMWXB5pCeDdsI?si=4a29b5420622476b'],
    ['Greek Tragedy','The Wombats','https://open.spotify.com/track/28C4nmrd7BTu0XbOmaTHZr?si=0cf21976273b4c06'],
    ['Guinevere','Crosby, Stills & Nash','https://open.spotify.com/track/3CZ4BXMk4xpCJcWeowNERh?si=a6936182f2bf4b8e'],
    ['Hells Comin With Me','Poor Mans Poison','https://open.spotify.com/track/0cPvRrV9PBBHVfHoGBlFdO?si=c3bbc8baf3154395'],
    ['Heroes Get Remembered, Legends Never Die','Four Year Strong','https://open.spotify.com/track/73egERbXJYHKWUgCVEkUtK?si=fe505e7aaca040cc'],
    ['In Germany Before the War','Randy Newman','https://open.spotify.com/track/7mWh75A2C6vUi3tmB8th0W?si=7fa3f4d568a74d2a'],
    ['King and Lionheart','Of Monsters and Men','https://open.spotify.com/track/5HF5PRNJ8KGtbzNPPc93tG?si=39735946c01a4c3b'],
    ['Leylim Ley','Altin Gun','https://open.spotify.com/track/2yV37Z9NDeap6vwdcthoDU?si=36570b063fb84d63'],
    ['Mythologica','Ofrin','https://open.spotify.com/track/00m9b0XZO90odH3j7TBBYd?si=h6luEzkyRG6RWqeAdtT95Q'],
    ['Puff, the Magic Dragon','Peter, Paul and Mary','https://open.spotify.com/track/3hqsBLMAqJqrhr434Z7WlA?si=tfc6PMl6S66bws08JWzoSg'],
    ['Queen Of peace','Florence + The Machine','https://open.spotify.com/track/6WRjufZUoxjaUNKOJ6QhWp?si=c6480f31a16f46c4'],
    ['Radio Gnome Invisible','Gong','https://open.spotify.com/track/4T1QQUP9B8MTb8AgboEj42?si=814c1768e3114819'],
    ['Say Hello to the Angels','Interpol','https://open.spotify.com/track/4qXWCtkUQw1PbQOhzxONqn?si=7920e37c9f294e61'],
    ['Sleepwalking Through the Mekong','Dengue Fever','https://open.spotify.com/track/3BbYKViBnY1QMyvH0cZcul?si=d6fbfb61236a47d1'],
    ['Song To The Siren','John Frusciante','https://open.spotify.com/track/0Caljp6hDkxX9nYusD5m3k?si=c2fc208274c949d5'],
    ['Stairway to Heaven','Led Zeppelin','https://open.spotify.com/track/5CQ30WqJwcep0pYcV4AMNc?si=fca95933973e420c'],
    ['The Cult of Dionysus','The Orion Experience','https://open.spotify.com/track/08KTQSs3ickNki7FFTb6fY?si=qaTSzQf1Rd6tsZTIBy5zxg'],
    ['The Devil Went Down to Georgia','The Charlie Daniels Band','https://open.spotify.com/track/383Xl5QTigwj3QiA3Qc6S7?si=cD96jAdsQy6RmWtxmBqQuA'],
    ['The Legend of Hardhead Ned','Watsky, Dylan Saunders','https://open.spotify.com/track/6JeqOQ0utocxZBJX8RALtY?si=ZzJndbt-SumXQeTxfitqvw'],
    ['The Real Folk Blues','Mason Lieberman','https://open.spotify.com/track/3hZjBeOYtlymOyXyZourUl?si=tDRoh9ogRY2cIyxdU5W4zw'],
    ['What a Horrible Night to Have a Curse','The Black Dahlia Murder','https://open.spotify.com/track/430xmK8Tw4J4VG8PxCqO4I?si=8d8e183801924e74'],
]

var matchups = createMatchups(round4);

for (let index = 0; index < matchups.length; index++) {
    console.log(matchups[index][0][0], " by ", matchups[index][0][1], " vs ", matchups[index][1][0], " by ", matchups[index][1][1]);
    console.log(matchups[index][0][2]);
    console.log(matchups[index][1][2]);
    console.log("Vote: :dragon: for ", matchups[index][0][0]);
    console.log("Vote: :angel: for ", matchups[index][1][0]);
    console.log();
}

for (let index = 0; index < matchups.length; index++) {
    console.log(matchups[index][0][2])
    console.log(matchups[index][1][2])
}