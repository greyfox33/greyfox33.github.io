---
layout: post
title: Microservices -- A Wolf in Sheeps Clothing
image: assets/dist/img/1.jpg
excerpt: IT infrastructure divides like a cell every time a new standard of abstraction is universally adopted [e.g. mainframe to web to now, microservices].
---
"IT infrastructure divides like a cell every time a new standard of abstraction is universally adopted [e.g. mainframe to web to now, microservices]. Each successful iteration has brought with it a new era of computing where time to value decreased, cost of development decreased and a new set of large market cap companies were born." - Matt Miller, WSJ

I disagree with this. For development teams with unlimited funds and top-tier talent, the move from mainframe to web unquestionably brought:

1. Time to value decreased -- true
2. Cost of development decreased -- true
3. A new set of large cap companies were born -- true

But for your average development shop, with a limited budget and average talent, the move from mainframe to web brought an expanded stack of required technologies. This, along with the greater security requirements crippled development productivity, raising the cost of development. Not decreasing the cost of development, but raising it. So what will a move to microservices bring?

First, what does microservices mean? Here’s my definition:

- large applications are broken down into small, loosely coupled and composable autonomous applications.
- A team can use containers and other cloud offerings to more quickly change and deploy these autonomous pieces. Instead of 4 releases a year, a team can deploy smaller app changes every week or more.
So it’s both an architecture as well as a development process.

Microservices architecture makes sense, particularly as another test of development capability, a hurdle that separates the men from the boys. It’s an arms race. Or another way of looking at it is that in the highly competitive web development market, microservices expertise is a barrier to entry for the upstarts.

While that is all well and good in the private sector, the public sector cannot meet the prerequisites for a move to microservices

1. Does your team have experts in REST and API-design to build the new contracts?
2. Does your team have folks who really understand how transactions will be performed in a potential move?

And the real butt-kicker

3. Does your team already do continuous integration and deployment of their monolithic app?

Explore the technologies, but if I’m Joe Public-Sector development manager, I need to work on question #3 first. If I can take my huge data model app and nail doing continuous integration and deployment to a cloud environment, scaling things up and down, I can claim I’m microservice enabled! I just happen to have one really big microservice!