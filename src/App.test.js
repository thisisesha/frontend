import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Signin from '../src/users/Signin.tsx';

import {describe, expect, test} from '@jest/globals';

describe("Login", () => {
  it("Should log in without issues", () => {
    cy.visit("http://localhost:3000")
    cy.get("#username").type("esha")
    cy.get("#password").type("esha123", {log:false})
    cy.get("#login-button").click()
    cy.location().then((location) => {
      cy.wrap(location.href).should(
        "contain",
        "signin"
      )
    })
  })
 })