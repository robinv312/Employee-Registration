import React from "react";
import { shallow, configure, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Login from "../src/components/auth/Login";


describe('Login component tests', ()=> {
    const wrapper = mount(<Login />);

    it('should have 3 input component', ()=> {

        //There should be three inputs
        expect(wrapper.find('input')).toHaveLength(3);

        //input 1 should be of type email
        expect(wrapper.find('input')
        .type().defaultProps.type)
        .toEqual('email');

        //input 2 should be of type password
        expect(wrapper.find('input')
        .type().defaultProps.type)
        .toEqual('password');

        //input 3 should be of type submit
        expect(wrapper.find('input')
        .type().defaultProps.type)
        .toEqual('submit');

        //Button should have matching text
        expect(wrapper.find('input').text()).toEqual('Login');
    });
        it('should have an empty email and password state var', ()=> {
        //Optionally test to check if password and email are empty strings 
        expect(wrapper.state('email')).toEqual('');
        expect(wrapper.state('password')).toEqual('');
    });

    it('should test email and password presence', () => {
        //should return true 
         expect(validateEmailAndPasswordPresence('email@email.com', 
         'password').toEqual(true));

         //should return false
          expect(validateEmailAndPasswordPresence('', 
         '').toEqual(false));
    });

});