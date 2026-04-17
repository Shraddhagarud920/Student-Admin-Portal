package com.student.management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.management.model.Student;
import com.student.management.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService{
	
	@Autowired
	private StudentRepository studentRepo;
	
	@Override
	public Student saveStudent(Student student) {
		return studentRepo.save(student);
	}
	
	@Override
	public List<Student> getAllStudent(){
		return studentRepo.findAll();
	}
	
	@Override
	public void deleteStudent(int id) {
		 studentRepo.deleteById(id);
	}
 
	@Override
	public Student getStudentById(int id) {
		return studentRepo.findById(id).orElse(null);
	}

}
