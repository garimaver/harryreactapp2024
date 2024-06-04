import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Ashutosh Joshi and Alex Gabriel Simon",
            "title": "India Stocks Hit Record, Rupee Gains as Polls Predict Modi Win (Bloomberg) - Yahoo Finance",
            "description": "(Bloomberg) -- India’s stocks surged to a record, while the rupee and sovereign bonds climbed after exit polls signaled an emphatic victory for Prime...",
            "url": "https://finance.yahoo.com/news/india-stock-futures-rally-polls-010509234.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/d3Pn.FGoIVMYnyg5dpiYUg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/04f2d049bbb158617b3133167955b45c",
            "publishedAt": "2024-06-03T07:24:52Z",
            "content": "(Bloomberg) -- Indias stocks surged to a record, while the rupee and sovereign bonds climbed after exit polls signaled an emphatic victory for Prime Minister Narendra Modis ruling party.\r\nMost Read f… [+3701 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": null,
            "title": "Latest Oil Market News and Analysis for June 3 - Bloomberg",
            "description": null,
            "url": "https://www.bloomberg.com/news/articles/2024-06-02/latest-oil-market-news-and-analysis-for-june-3",
            "urlToImage": null,
            "publishedAt": "2024-06-03T06:25:00Z",
            "content": "To continue, please click the box below to let us know you're not a robot."
        },
        {
            "source": {
                "id": null,
                "name": "Ambcrypto.com"
            },
            "author": "Jai Hamid",
            "title": "Dogecoin’s price recovery – Identifying the real odds of that happening - AMBCrypto News",
            "description": "The world's largest memecoin isn't having the world's best quarter in 2024. What's next?",
            "url": "https://ambcrypto.com/dogecoins-price-recovery-identifying-the-real-odds-of-that-happening/",
            "urlToImage": "https://ambcrypto.com/wp-content/uploads/2024/06/News-Articles-FI-Editors-1-1000x600.webp",
            "publishedAt": "2024-06-03T05:03:53Z",
            "content": "<ul><li>Dogecoin still volatile, with most holders in profit despite a bearish long-term trend</li><li>DOGE’s market behavior didn’t seem to have any clear directional movement</li></ul>Dogecoin (DOG… [+2605 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Shein set to file for £50bn UK flotation, according to reports - BBC.com",
            "description": "The fast-fashion firm has been linked to unethical practices, including claims of forced labour.",
            "url": "https://www.bbc.com/news/articles/c9770yz274go",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/88be/live/570f9bc0-216c-11ef-91b2-41bfe5190ad1.jpg",
            "publishedAt": "2024-06-03T03:17:44Z",
            "content": "Peter Hoskins,Business reporter\r\nOnline fast fashion firm Shein is planning to file paperwork for a potential London share listing as soon as this week, according to reports.\r\nAn initial public offer… [+2992 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "All About Elena Zhukova, 5th Wife Of Media Mogul Rupert Murdoch - NDTV",
            "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
            "url": "https://www.ndtv.com",
            "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
            "publishedAt": "2024-06-03T02:39:37Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Cointelegraph"
            },
            "author": "Cointelegraph",
            "title": "GameStop rallies overnight as Roaring Kitty reveals $180M GME position - Cointelegraph",
            "description": null,
            "url": "https://cointelegraph.com/news/gamestop-gme-memestock-surges-keith-gill-roaring-kitty-discloses-shares",
            "urlToImage": null,
            "publishedAt": "2024-06-03T02:37:36Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Dade Hayes",
            "title": "As Paramount Global Preps For Shareholder Meeting And Town Hall, Details Of Revised Skydance Offer Surface - Deadline",
            "description": "As Paramount Global nears its annual shareholder meeting and an employee town hall, details are emerging about Skydance Media's latest merger offer.",
            "url": "http://deadline.com/2024/06/paramount-skydance-merger-shareholder-meeting-town-hall-shari-redstone-1235957412/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2024/05/Shari-Redstone.jpg?w=1024",
            "publishedAt": "2024-06-03T02:22:00Z",
            "content": "As Paramount Global approaches Tuesday’s annual shareholder meeting and a high-stakes town hall for employees the following day, new details are emerging about Skydance Media‘s latest acquisition off… [+5902 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": null,
            "title": "Paul Krugman Says China Unwilling to Support Consumer Demand - Bloomberg",
            "description": "China’s leaders are “bizarrely unwilling” to use more government spending to support consumer demand instead of production, according to Nobel laureate in economics Paul Krugman.",
            "url": "https://www.bloomberg.com/news/articles/2024-06-03/krugman-says-china-is-bizarrely-unwilling-to-boost-demand",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/in270BFoqVlA/v1/1200x801.jpg",
            "publishedAt": "2024-06-03T01:51:00Z",
            "content": "Chinas leaders are bizarrely unwilling to use more government spending to support consumer demand instead of production, according to Nobel laureate in economics Paul Krugman. \r\nThe fact that we seem… [+246 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Asa Fitch",
            "title": "The U.S. Gave Chip Makers Billions. Now Comes the Hard Part. - The Wall Street Journal",
            "description": "Chips Act’s early stages have been challenged by rivals overseas and the sheer expense of making chips",
            "url": "https://www.wsj.com/tech/chips-act-funding-semiconductor-investments-us-22cc1ea8",
            "urlToImage": "https://images.wsj.net/im-965431/social",
            "publishedAt": "2024-06-03T01:00:00Z",
            "content": null
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "James Powel, Gabe Hauari",
            "title": "Cucumbers recalled in 14 states over Salmonella concerns - USA TODAY",
            "description": "The FDA announced a recall of potentially contaminated cucumbers Saturday. See the 14 states they were sent to.",
            "url": "https://www.usatoday.com/story/money/food/2024/06/02/cucumbers-recalled-in-14-states-over-salmonella-concerns/73950674007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/06/02/USAT/73950844007-2152806345.jpg?crop=7416,4172,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
            "publishedAt": "2024-06-03T00:08:08Z",
            "content": "The Food and Drug Administration on Saturday announced a recall of cucumbers potentially contaminated with Salmonella.\r\nFresh Start Produce Sales Inc. of Delray, Florida is recalling cucumbers that w… [+1753 chars]"
        },
        {
            "source": {
                "id": "fortune",
                "name": "Fortune"
            },
            "author": "Craig Stirling, Bloomberg",
            "title": "We're about to get central bank rate cuts soon—but not from the Federal Reserve: Here's who is expected to ease in the coming week - Fortune",
            "description": "ECB policymakers led by President Christine Lagarde have insisted they’re comfortable plowing a separate furrow from the Federal Reserve, even if that risks a weaker currency that could stoke inflation.",
            "url": "https://fortune.com/2024/06/02/central-bank-rate-monetary-policy-easing-ecb-canada-denmark-federal-reserve/",
            "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/06/GettyImages-2153809133-e1717368571166.jpg?resize=1200,600",
            "publishedAt": "2024-06-02T23:02:00Z",
            "content": "The European Central Bank could open the door to a weaker euro on Thursday as its first interest-rate cut of the cycle puts the region on a divergent policy path from the US.With a quarter-point redu… [+7678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Jesse Pound",
            "title": "Stock futures are little changed ahead of first trading day of June: Live updates - CNBC",
            "description": "Wall Street is coming off its sixth positive month in seven.",
            "url": "https://www.cnbc.com/2024/06/02/stock-market-today-live-updates.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107419926-1716565091613-gettyimages-2154456331-ms1_1753_u9dke0sp.jpeg?v=1717363641&w=1920&h=1080",
            "publishedAt": "2024-06-02T22:31:06Z",
            "content": "Stock futures were calm on Sunday evening ahead of the first trading day in June.\r\nFutures for the Dow Jones Industrial Average ticked up 25 points, or less than 0.1%. S&amp;P 500 futures were flat, … [+1023 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tipranks.com"
            },
            "author": "Marty Shtrubel",
            "title": "‘AMD Is a Big Threat,’ Says Investor About Nvidia Stock - TipRanks",
            "description": "Nvidia (NASDAQ:NVDA) has been the talk of the stock market over the past year and a half. With a series of blockbuster earnings reports fueled by the insatiable dem...",
            "url": "https://www.tipranks.com/news/amd-is-a-big-threat-says-investor-about-nvidia-stock",
            "urlToImage": "https://blog.tipranks.com/wp-content/uploads/2024/01/NVDA-AMD-750x406.jpg",
            "publishedAt": "2024-06-02T22:29:53Z",
            "content": "Nvidia (NASDAQ:NVDA) has been the talk of the stock market over the past year and a half. With a series of blockbuster earnings reports fueled by the insatiable demand for its top-tier AI chips, Nvid… [+2849 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Lauren Thomas",
            "title": "Exclusive | Waste Management Near Deal to Buy Stericycle - The Wall Street Journal",
            "description": "Deal would value medical-waste-management company at about $7 billion including debt",
            "url": "https://www.wsj.com/finance/waste-management-near-deal-to-buy-stericycle-ed064421",
            "urlToImage": "https://images.wsj.net/im-966244/social",
            "publishedAt": "2024-06-02T22:27:00Z",
            "content": "Waste Management is nearing a deal to buy medical-waste-disposal company StericycleSRCL4.54%increase; green up pointing triangle\r\nfor roughly $7 billion including debt. \r\nThe acquisition of Bannockbu… [+299 chars]"
        },
  
        {
            "source": {
                "id": "fortune",
                "name": "Fortune"
            },
            "author": "Jason Ma",
            "title": "Housing market outlook: Home prices could start falling this summer - Fortune",
            "description": "\"The housing market is really the first domino to fall on what we think is going to be a slower growth story down the road.\"",
            "url": "https://fortune.com/2024/06/02/housing-market-outlook-home-prices-supply-demand-imbalance-economic-growth-warning/",
            "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/06/GettyImages-1188188119-e1717360833851.jpg?resize=1200,600",
            "publishedAt": "2024-06-02T21:44:00Z",
            "content": "More homes on languishing on the market without any buyers, setting up prices to start falling as soon as this summer, according to Brian Nick, senior investment strategist at Macro Institute.In fact… [+2346 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "USA TODAY",
            "title": "United Airlines passengers fell ill during flight after a cruise - USA TODAY",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMie2h0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS90cmF2ZWwvYWlybGluZS1uZXdzLzIwMjQvMDYvMDIvdW5pdGVkLWFpcmxpbmVzLXBhc3NlbmdlcnMtaWxsLXZhbmNvdXZlci1ob3VzdG9uLzczOTQ5MDkzMDA3L9IBAA?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-06-02T20:12:18Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Financial Times"
            },
            "author": "Harriet Agnew, Stephen Morris, Tabby Kinder",
            "title": "Pivotal Tesla retail investors at risk of missing AGM vote - Financial Times",
            "description": "EV maker faces tight vote over Musk pay and reincorporation but investment platforms fail to put cross-border systems in place",
            "url": "https://www.ft.com/content/bf90e2ee-3e01-45c0-832a-a16b7e3e7f0f",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252F90759b79-9864-45fc-9d06-a0b477b0dc04.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
            "publishedAt": "2024-06-02T20:00:52Z",
            "content": "Tens of thousands of Teslas international retail shareholders with around $17bn of stock may be unable to vote at its annual meeting because investment platforms have failed to put adequate cross-bor… [+4983 chars]"
        },
        {
            "source": {
                "id": "fortune",
                "name": "Fortune"
            },
            "author": "Jason Ma",
            "title": "Elon Musk reportedly cussed out a JPMorgan exec years ago, but his cold war with Jamie Dimon may be starting to thaw - Fortune",
            "description": "Any improvement in their relationship could clear the way for the bank to do more business with billionaire Musk or his constellation of companies.",
            "url": "https://fortune.com/2024/06/02/elon-musk-jamie-dimon-feud-jpmorgan-tesla-spacex/",
            "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/06/GettyImages-1851965053-e1717352663218.jpg?resize=1200,600",
            "publishedAt": "2024-06-02T19:24:00Z",
            "content": "Tesla CEO Elon Musk and JPMorgan CEO Jamie Dimon have not been on good terms in recent years, but that seems to be changing, according to the Wall Street Journal.Any improvement in their relationship… [+2071 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": "Ye Xie, Rich Miller",
            "title": "A Trump Win Would Threaten Fed Independence, Move Bonds: Poll - Bloomberg",
            "description": "Survey respondents expect a move in Treasury yields if Trump secures a second term",
            "url": "https://www.bloomberg.com/news/articles/2024-06-02/a-trump-win-would-threaten-fed-independence-move-bonds-poll",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iP.HVFd1EY9g/v1/1200x790.jpg",
            "publishedAt": "2024-06-02T19:00:18Z",
            "content": "The Federal Reserve will face a significant risk of losing its independence to ramped-up political interference if Donald Trump is elected president again, according to the latest Bloomberg Markets L… [+276 chars]"
        }
    ]
    constructor(){
        super();
        console.log("hello i m construction");
        this.state = {
            articles : this.articles,
            loading : false
        }
    }
  render() {
    return (
      <div  className='container my-3'>
        <h2>News - Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=> { 
            return <div className='col-md-4'>
        <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage}/>
        </div>})}
     
   \
        </div>
 
      </div>
    )
  }
}

export default News
