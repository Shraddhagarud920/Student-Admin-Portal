package com.student.management.model;

import jakarta.persistence.Embeddable;

@Embeddable 
public class Marks {
    
    private int maths;
    private int science;
    private int english;

    
    public Marks() {
    	
    }

    
    public Marks(int maths, int science, int english) {
        this.maths = maths;
        this.science = science;
        this.english = english;
    }

    
    public int getMaths() {
     return maths;
     }
    public void setMaths(int maths) { 
    	this.maths = maths; 
    	}

    public int getScience() {
    	return science;
    	}
    public void setScience(int science) {
    	this.science = science; 
    	}

    public int getEnglish() { 
    	return english;
    	}
    public void setEnglish(int english) { 
    	this.english = english;
    }
}