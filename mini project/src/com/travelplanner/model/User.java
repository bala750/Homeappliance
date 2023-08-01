package com.travelplanner.model;

public class User {
private int userid;
private String username;
private String email;
private String password;
private long phone;
//encapsulation
public int getUserid() {
	return userid;
}
public void setUserid(int userid) {
	this.userid = userid;
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public long getPhone() {
	return phone;
}
public void setPhone(long phone) {
	this.phone = phone;
}
//method override
@Override
public String toString() {
	return "User [userid=" + userid + ", username=" + username + ", email=" + email + ", password=" + password
			+ ", phone=" + phone + "]";
}
public User(int userid,String username,String email,String password,int phone) {
	super();
	this.userid=userid;
	this.username=username;
	this.email=email;
	this.password=password;
	this.phone=phone;
}
public User() {
	// TODO Auto-generated constructor stub
}


}
