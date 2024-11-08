# TypeScript Union & Intersection Types

TypeScript is a programming language that makes coding easier and more straightforward. Today, we’ll be exploring two cool tricks: Union & Intersection Types. Yaaaa…

## Union Types: Either This or That

Union types are like a choice that our mom gives us when we urge her to buy multiple toys together. In real life scenario, the common reply is only one 😢 [Car or Robot].

In TypeScript, we see the same thing but it works with the data type. Just imagine, we choose a car in front of our mom. Now you find that there are two cars and their names are: 99 & NinetyNine.

Now, you have two more choices to choose whatever you like. But one question arises. We all know in programming data types we see there is a boolean data type option.

Now my question to you: Is it possible to make a car name by boolean? Like true, false? Although we can, it’s not any convention. As it’s not any convention, let’s kick this boolean out from our car name.

```typescript
let car: string | number;

car = "NinetyNine"; // it’s a string

car = 99; // It’s a number

// car = true; // Sorry! You’re not allowed
```

The car name can be any string value or number. No boolean is allowed here. This is why we need this union type. It plays a crucial rule in terms of picking up any type.

## Toy Combination Challenge

Now, you liked the Robot also. But your mom says only one to choose. But you are a smart programmer. You have an idea. You asked your mom to give you a toy that consists of wheels like a car and arms like a robot. After looking around, when your mom failed to find this type of toy, the only option is to buy a car and a robot. Isn’t it? But if your mom is very strict, then take your own risk! 😂😂

But your mom, she thinks that she is smarter than you. She replied, "Okay, but under one condition. You have to combine these two and make a new toy with your required features: wheels and arms."

Come on, buddy. You’re a programmer. **“No worries. Why Fear, when TypeScript is here!”**

## Intersection Types: "This AND That"

In TypeScript, Intersection is a type that lets us choose both and make a new combination. It allows us to have all the parts of different things. Pretty cool, right?

```typescript
type Car = {
  wheels: number; // A car has wheels
};

type Robot = {
  arms: number; // A robot has arms
};

type CarRobot = Car & Robot; // A CarRobot has both wheels and arms

let myToy: CarRobot = {
  wheels: 4,
  arms: 2,
};
```

Now you can show it to your mom and represent our new toy named CarRobot, which contains 4 wheels and 2 arms. Yahoooo!

So today we explored Union Types & Intersection Types.

Union Types allow us to keep things flexible if we need something that can be different types, like a car or a robot, or choosing a car name as a string or a number.
Intersection Types provide a special feature of combining multiple things together into one thing.

Now it’s your turn to do coding. Think about whether you need something like “this or that,” or “this and that.”

~Happy Coding
