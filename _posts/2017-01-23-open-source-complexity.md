---
layout: post
title: Open Source Complexity
image: assets/dist/img/2.png
excerpt: While the use of open source software in government projects offers huge benefits, its not without challenges
---
IBM. System Integrators. Now State/Fed government is supposed to build solutions using both open source software components, as well as ensure that solutions are available for other gov entities to reuse under open source licenses.

This is a good thing. But these open source components are complex. In the old world, a government entity might either
a) pay a system integrator to build a "custom" solution (which often used open source components!). The SI would shield the gov entity from the complexity of the piece parts
b) purchase an integrated system (e.g. SAP) and pay a license and support costs that effectively shielded the gov entity from the complexity.

Those paths were both costly, and inflexible, but relatively safe (or at least the illusion of safety was preserved). But with increased calls for flexibility (i.e. change) alternatives have been forced to the fore, and one of those options is gov entities rolling their own using open source.

If you are a gov entity contemplating this, and your technical team is solid and stable, be aware that the tackling the full tech stack in an open sourc world is not for the faint of heart.

For example, lets take a java development stack that uses React as the front end:

Dev tools | Testing Software | DevOps software
Java | Junit | Jenkins
Eclipse | Jmeter | Github
Maven | Jmeter | Git
Spring | Selenium | Ansible
React | | Chef
Gulp | | AWS Cli

Your development team will need to become experts in all of these tools and be able to manage version dependencies between them. Definitely doable, but not for the faint of heart!

For a gov entity considering this, a couple thing to think about
- Start small to test it out, but a challenge with starting small is that if you lose a few key people, your plan to move to open source might be crippled.
- Evaluate the tools/components needed for your Minimum Viable Product (MVP) and develop expertise in those before adding all of your components.
- When considering and choosing tools for which there are multiple options, look for the ones with the active communities and support. Software where the last bug release was in 2013 (for example) should be avoided.


