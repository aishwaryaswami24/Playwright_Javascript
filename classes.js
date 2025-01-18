class Student //class
{
    student_info(id,name,college) //method(inside the class hence it's called method)
    {
        this.id=id;
        this.name=name;
        this.college=college;
    }

    display_student_info() //method
    {
        console.log(this.id,this.name,this.college);
    }
}

let stu=new Student(); //object
stu.student_info(1,'Aish','SKNCOE');
stu.display_student_info();


//Constructor

class Teacher
{
    constructor(id,name,salary)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

    display()
    {
        console.log(this.id,this.name,this.salary);
    }
}

let tea=new Teacher(101,'Priya',250000);
tea.display();