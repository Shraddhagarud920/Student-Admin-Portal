package com.student.management.model;
import jakarta.persistence.*;

@Entity
@Table(name = "student")
public class Student {
	
	@Id
	private int id;
	private String name;
	private String address;
	
	@Embedded
	private Marks marks;
	
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student(int id, String name, String address, Marks marks) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.marks = marks;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	public Marks getMarks() {
		return marks;
	}
	
	public void setMarks(Marks marks) {
		this.marks = marks;
	}

}
