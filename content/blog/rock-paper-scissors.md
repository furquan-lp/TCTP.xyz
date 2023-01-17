---
title: A Simple Rock Paper Scissors Program
author: Syed Furquan Ahmad
date: 2023-01-15
thumbnail: "../images/retro-offset-rock-paper-scissors-icons.png"
banner: "../images/rock-paper-scissors-neon-icons.png"
tags: ['python', 'math']
---

# Rock-Paper-Scissors in Python Using a Little Math to Make Everything Simpler

Take a look at the following piece of Python code:
```
def determine_winner(user_action, computer_action):
    if user_action == computer_action:
        print(f"Both players selected {user_action.name}. It's a tie!")
    elif user_action == Action.Rock:
        if computer_action == Action.Scissors:
            print("Rock smashes scissors! You win!")
        else:
            print("Paper covers rock! You lose.")
    elif user_action == Action.Paper:
        if computer_action == Action.Rock:
            print("Paper covers rock! You win!")
        else:
            print("Scissors cuts paper! You lose.")
    elif user_action == Action.Scissors:
        if computer_action == Action.Paper:
            print("Scissors cuts paper! You win!")
        else:
            print("Rock smashes scissors! You lose.")
```
This right here is a function to play a simple Rock-Paper-Scissors game. Yes good old Rock-Paper-Scissors (which we'll
discuss in a bit), a simple game and therefore similarly simple code. But it's not very pretty, is it? Let's make it
a lot cleaner and even simpler with a little bit of math.