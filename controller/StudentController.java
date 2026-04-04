package com.student.management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.student.management.model.Student;
import com.student.management.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:3000")

public class StudentController {
	@Autowired
	private StudentService studentService;
	
	@PostMapping("/add")
		public String add(@RequestBody Student student) {
		studentService.saveStudent(student);
		return " New Student Added Sucessfully";
	}
	
	@GetMapping("/getAll")
	public List<Student> List(){
		return studentService.getAllStudent();
	}
	
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable int id) {
		studentService.deleteStudent(id);
		return "Student With Id " + id + "Has Been Deleted";
	}
	
	@PutMapping("/update")
	public String update(@RequestBody Student student) {
	    studentService.saveStudent(student); 
	    return "Student updated successfully";
	}
	
}
