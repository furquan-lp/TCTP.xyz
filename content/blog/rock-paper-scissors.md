---
title: A Simple Rock Paper Scissors Program
author: Syed Furquan Ahmad
date: 2023-01-15
thumbnail: ../images/retro-offset-rock-paper-scissors-icons.png
banner: ../images/rock-paper-scissors-neon-icons.webp
tags:
  - python
  - math
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

This right here is a function to play a simple Rock-Paper-Scissors game. Yes good old Rock-Paper-Scissors (which we'll discuss in a bit), a simple game and similarly simple code.

But it's not very pretty, is it? Let's make it a lot cleaner and even simpler with a little bit of math.

Going over Rock-Paper-Scissors again, the rules of the game are simple. Two players each simultaneously draw a hand with one of the three shapes—rock, paper or scissors. The outcome of the game is then decided by which of the three shapes were drawn and how they interact.

1. Rock crushes Scissors
2. Scissors cut Paper
3. Paper covers Rock

The game ends in a draw (and perhaps a rematch) if both the players draw the same thing.

![Rock Paper Scissors image](../images/rock-paper-scissors.webp)

## Simplifying further

For purposes of brevity, we can represent the game elements as a set <math>E &isin; {R, P, S}</math> (where E represents a game element) with each element represented by a letter.

If we take this further and assign a number to each of the game elements, i.e., Rock, Paper and Scissors, like so:

* Rock -> 1
* Paper -> 2
* Scissors -> 3

Which we can obviously represent as a relation (represented as a set of ordered pairs).

<math>R<sub>1</sub> = { (R, 1), (P, 2), (S, 3)}</math>

We see an interesting pattern emerge. Just to recap, Scissors cut Paper and Paper covers Rock. It's easy to see that when the number assigned to the elements (the _range_ of our relation above) are next to each other, the greater number always wins.

<math>&forall; E<sub>1</sub> = E<sub>2</sub> + 1 OR E<sub>1</sub> = E<sub>2</sub> - 1; E<sub>1</sub> wins iff E<sub>1</sub> > E<sub>2</sub></math>

Paper (2) beats Rock (1) and Scissors (3) beat Paper (1). Furthermore, it's the opposite if the numbers aren't next to each other. Scissors (3) lose to Rock (1) and vice versa.

<math>&forall; E<sub>1</sub> &ne; E<sub>2</sub> + 1; E<sub>1</sub> wins iff E<sub>1</sub> < E<sub>2</sub></math>

In other words, the greater number wins if both the numbers are _consecutive_ and loses otherwise. Before we convert the mathematical logic into code, we can simply it further for better clarity.

<math>&forall; {e<sub>1</sub>, e<sub>2</sub>} &isin; R(R<sub>1</sub>)</math>

<math>max{e<sub>1</sub>,e<sub>2</sub>} wins, iff min{e<sub>1</sub>,e<sub>2</sub>} + 1 = max{e<sub>1</sub>,e<sub>2</sub>}</math>

That is, given two elements e<sub>1</sub> and e<sub>2</sub>, the maximum of the two wins if it is next to the other element.

## Programming the logic

So how do we put this into code, specifically Python code. Well, given what we have done so far, it shouldn't be terribly difficult. First we need to import the random module first of course:

```
import random
```

Next we create a list of strings with all three game elements namely Rock, Paper and Scissors. It helps to create a list as the relation we created above is already natively implemented in an array albeit not exactly the way we want (since lists are 0 indexed). The `random` module also helps with this as we can use the `choice()` function to randomly select one of the elements from the list.

```
choices = ['rock', 'paper', 'scissors']
```

As with the example we saw in the beginning, we should declare our function since implementing a simple user input logic is trivial afterwards. In this function we receive the user choice and cpu's random choice in the form of two numbers, representing each of the game elements. Of course first we check if the two choices are the same in which case it's a draw.

```
# 1: Rock
# 2: Paper
# 3: Scissors
def rps(cpu, user):
    if cpu == user:
        print("Draw!")
        return
```

 Exactly how the choices are converted from a string or a zero-based index depends on the caller of the function and we'll implement it later. In the second conditional statement we implement our mathematical conclusion above, word for word.

```
    if (min(cpu, user) + 1) == max(cpu, user):
        winner = max(cpu, user)
    else:
        winner = min(cpu, user)
    print("%s wins!" %choices[winner - 1].capitalize())
```

Finally we print the result. We have to add a -1 to winner because remember, Python lists are zero-indexed unlike our relation.

To recap, this is what our `rps()` function looks like now:

```
choices = ['rock', 'paper', 'scissors']

def rps(cpu, user):
    if cpu == user:
        print("Draw!\n")
        return
    if (min(cpu, user) + 1) == max(cpu, user):
        winner = max(cpu, user)
    else:
        winner = min(cpu, user)
    print("%s wins!\n" %choices[winner - 1].capitalize())
```

&nbsp;
## The final program

Now what about implementing the game? Well now that we have our function, we can do that just fine. The full program for the game is as follows:

```
#!/usr/bin/python
import random

choices = ['rock', 'paper', 'scissors']

def rps(cpu, user):
    if cpu == user:
        print("Draw!\n")
        return
    if (min(cpu, user) + 1) == max(cpu, user):
        winner = max(cpu, user)
    else:
        winner = min(cpu, user)
    print("%s wins!\n" %choices[winner - 1].capitalize())

while True:
    for count, choice in enumerate(choices):
        print(count + 1, choice.capitalize())
    user_choice = input("Enter your choice (q/Q to quit): ")
    if user_choice.lower() == "q":
        print("\nThank you for playing!")
        break
    elif not user_choice.isdigit() or int(user_choice) > 3 or int(user_choice) < 1:
        print("Please only enter a number from the options given above.\n")
        continue
    else:
        print("You chose %s!" %choices[int(user_choice) - 1])
        cpu_choice = random.choice(choices)
        print("The cpu chose %s!" %cpu_choice)
        rps(choices.index(cpu_choice) + 1, int(user_choice))
```

I'll leave this as an exercise to the reader to figure out this (admittedly rather simple) implementation of the game.