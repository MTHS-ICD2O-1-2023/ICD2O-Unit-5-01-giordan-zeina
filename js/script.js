// Copyright (c) 2024 Giordan Zeina All rights reserved
//
// Created by: Giordan Zeina
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

const randomNumber = Math.floor(Math.random() * 6) + 1
console.log(randomNumber)

function enterClicked() {
  // input
  const numberGuessed = parseInt(document.getElementById("guess").value)

  // output
  if (numberGuessed == randomNumber) {
    document.getElementById("answer").innerHTML = 'You guessed the correct number! The Number was ' + randomNumber + '!'
  }

  if (numberGuessed != randomNumber) {
    document.getElementById("answer").innerHTML = 'You guessed the wrong number, Try again!'
  }
}
