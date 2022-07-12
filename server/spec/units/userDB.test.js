import mongoose from "mongoose";
import User from '../../models/user.js'

require('../mongodb_helper');

describe('User model', () => {
  let user;

  beforeEach(() => {
    user = new User({
      userName: 'Test name',
      email: 'test@test.com',
      password: 'Test password',
      fridge: []
    });
  });

  it('has a username', () => {
    expect(user.userName).toBe('Test name')
  })
  it('has an email', () => {
    expect(user.email).toBe('test@test.com')
  })
  it('has a fridge', () => {
    expect(user.fridge).toEqual([])
  })
  it('has a password', () => {
    expect(user.password).not.toBe("")
  })
  it('has an id', () => {
    expect(user._id).not.toBe(null)
  })
  // it('can save a user', (done) => {
  //   user.save((err) => {
  //     expect(err).toBeNull();

  //     done();
  //   });
  //   User.find((error, users) => {
  //     expect(error).toBeNull();

  //     expect(users[0].userName).toBe('Test name');
  //   });
  // })
})