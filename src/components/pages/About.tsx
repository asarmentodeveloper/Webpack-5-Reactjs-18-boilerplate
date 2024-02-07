import React from "react";
import { BasicTemplate } from "../templates/BasicTemplate";

export const About = () => {
  return (
    <BasicTemplate>
      <h1>About page</h1>
      <p>
        Lorem ipsum, dolor sit amet <mark>consectetur adipisicing elit</mark>.
        Architecto quo dolore harum obcaecati, vel officiis? Eum eos illum
        delectus ullam quos, cum nostrum in tenetur reiciendis{" "}
        <a href="#">assumenda incidunt</a> fugit sunt!{" "}
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <small>
          Eligendi quas optio <strong>cupiditate eius eveniet</strong> dolor
          consectetur! Nesciunt, tenetur a! Pariatur velit laudantium totam
          nobis commodi
        </small>{" "}
        facilis amet porro voluptas tempore.
      </p>
    </BasicTemplate>
  );
};
