import { h } from "preact";
import jest from "jest";
import Home from "../src/routes/home";
import { shallow, mount } from "./enzyme";

describe("Initial Test of Home", () => {
  window.scrollTo = () => {};

  test("Home renders headline", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("h1").text()).toBe("Talk to Joonka - Get a Loan");
  });

  test("Renders intro msg", () => {
    const wrapper = shallow(<Home />);
    expect(
      wrapper
        .find("main")
        .childAt(0)
        .text()
    ).toBe("Hi! This is Joonka a demo of Natural Language Processing.");
  });

  // test("Sends msg on send button click", () => {
  //   const wrapper = mount(<Home />);
  //   wrapper.find("input").simulate("keypress", { key: "h" });
  //   wrapper
  //     .find("button")
  //     .at(1)
  //     .simulate("click");
  //   wrapper.update();
  //   console.log(wrapper.text());
  // });

  test("test", () => {
    const wrapper = mount(<Home />);
    wrapper
      .find("button")
      .first()
      .simulate("click")
      .simulate("click");
    console.log(wrapper.text());
  });
});
