---
title: Tunneling Services 
author: Syed Furquan Ahmad
date: 2023-02-24
thumbnail: ../images/cloud.webp
banner: ../images/ngrok.png
tags:
  - iot
  - networking
---

# A Brief Overview of Tunneling Services to Instantly Ingress Your Local App or Service

You may have already heard of `ngrok`. It's a cloud service which allows you to quickly make your locally running web
application or service available online.But did you know that ngrok is just one example of a tunneling service? In this blog post, we'll take a look at tunneling services in general and how they can be useful for instantly exposing your local app or service to the internet.

# What is Tunneling?

Before we dive into tunneling services, let's quickly understand what tunneling means in the context of networking. In simple terms, tunneling is a technique that allows you to encapsulate one network protocol within another, effectively creating a "tunnel" through which data can pass.

When it comes to tunneling services, the goal is to establish a secure connection between your local machine and a publicly accessible server, which acts as the endpoint of the tunnel. This allows external devices or users to access your locally hosted application or service as if it were running on a public server.

# Enter ngrok: A Popular Tunneling Service

As mentioned earlier, ngrok is a well-known tunneling service that has gained popularity among developers. It provides a secure way to expose your local web server to the internet with just a few simple commands.

To use ngrok, you first need to sign up for an account on their website. Once you have an account, you can download the ngrok client and authenticate it using your account credentials. After that, you can start tunneling your local app by running a command like this:

```bash
ngrok http 8000
```

In this example, we're telling ngrok to create a tunnel for the local web server running on port 8000. Once the tunnel is established, ngrok will provide you with a publicly accessible URL that you can share with others to access your application.

# What about the others? Are they better? (Yes)

While ngrok is undoubtedly popular, there are other tunneling services available that offer similar functionality. Some of them include:

- **localtunnel**: This is another widely used tunneling service that works similar to ngrok. It provides a command-line tool that allows you to expose your local server to the internet.

- **Serveo**: Serveo is a free, open-source tunneling service that lets you expose your local server through an SSH connection. It's easy to set up and use, and it even supports custom domains.

- **Pagekite**: Pagekite is a commercial tunneling service that offers both free and paid plans. It supports various protocols and allows you to expose your local server to the internet without requiring any special configuration.

These are just a few examples, and there are many other tunneling services available out there. The choice of service depends on your specific requirements and preferences.

### Why Use Tunneling Services?

Tunneling services can be incredibly useful in several scenarios. Here are a few reasons why you might consider using a tunneling service:

1. **Testing and Development**: When developing a web application or service locally, it's often necessary to test it in a real-world scenario. Tunneling services allow you to easily share your progress with others for feedback or testing purposes.

2. **Remote Access**: If you need to access your local server or application from a remote location, tunneling services provide a secure and convenient way to achieve that without exposing your local machine directly to the internet.

3. **Demonstrations and Presentations**: Tunneling services enable you to showcase your locally hosted application or service during presentations or demonstrations without the need for complex network configurations.

### Conclusion

Tunneling services like ngrok, localtunnel, Serveo, and Pagekite offer a simple and effective solution for instantly exposing your local app or service to the internet. Whether you're a developer looking to test your application, a remote worker needing access to a local server, or a presenter showcasing your work, tunneling services can be a valuable tool

 in your toolkit. So next time you need to make your local app or service available online, give tunneling services a try and see how they can simplify your workflow.