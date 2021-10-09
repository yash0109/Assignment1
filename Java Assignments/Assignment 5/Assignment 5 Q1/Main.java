package hashSetEmployee;

import java.util.HashSet;
import java.util.Set;


public class Main {

	public static void main(String[] args) {
		Set<Employee> employee = new HashSet<>(); 
		employee.add(new Employee(1, "Emp1", 40000));
		employee.add(new Employee(2, "Emp2", 80000));
		employee.add(new Employee(3, "Emp3", 60000));
		employee.add(new Employee(4, "Emp4", 18000));
		employee.add(new Employee(5, "Emp6", 27000));
		employee.add(new Employee(3, "Emp7", 16000));
		employee.add(new Employee(3, "Emp6", 18000));
		System.out.println("total number of employee: "+employee.size());
		for(Employee p: employee)
		System.out.println(p);
		
	}

}