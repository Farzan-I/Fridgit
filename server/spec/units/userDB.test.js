import mongoose from "mongoose";
import User from '../../models/user.js'

require('../mongodb_helper');

describe('User model', () => {
  let user;
  // beforeEach((done) => {
  //   mongoose.connection.collections.users.drop(() => {
  //     done();
  //   });
  user = new User({
    userName: 'Test name',
    email: 'test@test.com',
    password: 'Test password',
    fridge: []
  });

  it('has a username', () => {
    expect(user.userName).toBe('Test name')
  })
})