package com.travelplanner.dao;

import java.util.List;

import com.travelplanner.model.User;

public interface UserDao {
//	Abstraction
	public void createUser(User user);
    public User getUserByEmail(String email);
    public List<User> getAllUsers();
    public void updateUser(User user);
    public void deleteUser(int userId);
}
