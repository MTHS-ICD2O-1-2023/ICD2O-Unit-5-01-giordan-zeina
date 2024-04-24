// Copyright (c) 2024 Giordan Zeina. All rights reserved
//
// Created by: Giordan Zeina
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

const randomNumber = Math.floor(Math.random() * 6) + 1

function myButtonClicked() {
  // input
  const numberGuessed = parseInt(document.getElementById('guess').value)

  // process
  if (numberGuessed == randomNumber) {

    // output
    document.getElementById('answer').innerHTML = 'You guessed the correct number! The Number Was ' + randomNumber + '!'
  }

  // process
  if (numberGuessed != randomNumber) {

    // output
    document.getElementById('answer').innerHTML = 'You have guessed the wrong number!'
  }
}