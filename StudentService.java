package com.student.management.service;
import java.util.List;
import com.student.management.model.Student;

public interface StudentService {
	Student saveStudent(Student student);
	List<Student> getAllStudent();
	void deleteStudent(int id);
	Student getStudentById(int id);

}
