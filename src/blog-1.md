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
