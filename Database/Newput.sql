-- Database created and used

CREATE DATABASE Newput;
USE Newput;


-- Created Tables Employees and Employee_info

CREATE TABLE Employees (
    empId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    designation VARCHAR(50),
    salary DOUBLE,
    location VARCHAR(50)
);
CREATE TABLE Employee_info (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    dob DATE,
    address VARCHAR(50),
    city VARCHAR(25),
    state VARCHAR(25),
    gender CHAR(1),
    emp_ID INT,
    FOREIGN KEY (emp_ID)
        REFERENCES Employees (empId)
);
    
-- Changing table names
ALTER TABLE Employee_info RENAME TO Employee_infos;

-- Inserted values in both tables

INSERT INTO Employees (designation, salary, location)
VALUES
('Senior Developer', 55000, 'Indore'),
('Intern Software Developer', 15000,'Delhi'),
('Full Stack Developer', 50000,'Indore'),
('Software Developement Engineer', 45000,'Indore'),
('HR', 60000,'Delhi'),
('Director', 80000,'Indore');

INSERT INTO Employee_infos (name, dob, address, city, state, gender, emp_ID)
VALUES 
('Chandler Bing', '1990-03-23', '11/3, Bakers Street, Vijaynagar', 'Indore', 'MP', 'M', 1),
('', '1987-04-20', '32, Vikas puri', 'Delhi', 'Delhi', 'M', 2),
('', '1996-07-08', '10/9 Bloomberg Square', 'Indore', 'MP', 'M', 3),
('', '1993-06-26', '36, China Town, Mohanbagh', 'Indore', 'MP', 'F', 4),
('', '1987-01-17', '129, Redfort', 'Delhi', 'Delhi', 'F', 5),
('', '1985-11-11', '4 Privet Drive, Surrey', 'Indore', 'MP', 'M', 6);


-- Updating Informations

UPDATE Employee_infos 
SET 
    name = CASE id
        WHEN '2' THEN 'Joey Tribbiani'
        WHEN '3' THEN 'Ross Geller'
        WHEN '4' THEN 'Monica Geller'
        WHEN '5' THEN 'Phoebe Buffay'
        WHEN '6' THEN 'Rachel Green'
    END
WHERE
    id BETWEEN 2 AND 6;

UPDATE Employee_infos 
SET 
    gender = 'F'
WHERE
    id = 6;


-- Selecting all values from both tables

SELECT * FROM Newput.Employees;
SELECT * FROM Newput.Employee_infos;


-- Group by employee count on basis of location

SELECT 
    COUNT(*), location
FROM
    Employees
GROUP BY location;


-- Average, Sum of salary on basis of location

SELECT 
    COUNT(*) as Count, AVG(salary) as Avg_salary, SUM(salary) as total_salary, location
FROM
    Employees
GROUP BY location;


-- Select employes by there salary in descending

SELECT 
    * 
FROM 
    Employees
ORDER BY salary DESC;


-- Name of those employee who are from indore

SELECT
    Employee_infos.name, Employees.location
FROM
    Employees
        INNER JOIN 
    Employee_infos on Employees.empID = Employee_infos.emp_ID
WHERE location = 'Indore'; 


-- Show name and there designations

SELECT 
    name, designation
FROM
    Employees
        INNER JOIN
    Employee_infos ON Employees.empID = Employee_infos.emp_ID;


-- offset / limit - Get second highest salary of employee    

SELECT 
    Employee_infos.name, Employees.salary, Employees.designation
FROM
    Employees
        INNER JOIN
    Employee_infos ON Employees.empID = Employee_infos.emp_ID
ORDER BY salary DESC
LIMIT 1 , 1;


-- Count of employee on basis of dob; - date

SELECT 
    COUNT(dob)
FROM
    Employee_infos;


-- Show count of location on basis Group by gender

SELECT 
    COUNT(Employees.location) AS locatioins,
    Employee_infos.gender
FROM
    Employees
        INNER JOIN
    Employee_infos ON Employees.empID = Employee_infos.emp_ID
GROUP BY gender;


-- Get name of employees whose name have alphabet 'a'

SELECT 
    name
FROM
    Employee_infos
WHERE
    name LIKE '%a%';

-- Name of those employee who are from indore and Delhi both
SELECT 
    Employee_infos.name AS Name, Employees.location AS location
FROM
    Employees
        INNER JOIN
    Employee_infos ON Employee_infos.emp_ID = Employees.empID;
 
-- Get name of employees having Designation which have Developer in it (Don't use join) 
SELECT
	designation as Designation, 
	(SELECT 
		Name
	FROM 
		Employee_infos
	WHERE Employees.empID = Employee_infos.emp_ID
    ) as Name
FROM 
	Employees
WHERE designation LIKE '%Developer%';


