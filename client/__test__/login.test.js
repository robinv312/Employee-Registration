import React from "react";
import { shallow, configure, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Login from "../src/components/auth/Login";
import store from "../src/store";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
function shallowSetup() {
  configure({ adapter: new Adapter() });

  // wrapper instance around rendered output
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <Login store={store} />
      </MemoryRouter>
    </Provider>
  );

  return {
    wrapper,
  };
}
describe("Login component tests", () => {
  const { wrapper } = shallowSetup();
    it('testing the email and password fields', () => {
        
         const email = wrapper.find("input").at(0);
         email.simulate('focus');
         email.simulate("change",{target:{value:"test@gmail.com"}});

         const password = wrapper.find("input").at(0);
         password.simulate('focus');
         password.simulate("change",{target:{value:"123456"}});

         wrapper.find("input").at(2).simulate("click");
    });

});