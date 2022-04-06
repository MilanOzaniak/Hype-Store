package com.example.hypestore.service;

import com.example.hypestore.model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
    public void deleteUserById(int id);
}
