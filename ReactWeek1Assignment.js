class Student {
  constructor(name,email,community){
     this.name = name;
     this.email= email;
     this.community =community
  }

}

class Bootcamp extends Student {
   constructor(name, level,students=[]){

    super()
       this.name=name;
       this.level=level;
       this.students=students;
   }
   registerStudent(Angela,Matt,Jack){
       let studentOneEmail = Angela.email;
    //    console.log(studentOneEmail);
       const sameEmailOne = this.students.filter(student=>student.email===studentOneEmail);
       console.log(sameEmailOne);
       if(sameEmailOne.length===0){
           this.students.push(Angela);
           console.log(`Registering ${Angela.email} to the bootcamp ${webDevFundamentals.level} course`)
       }
       else{
           console.log(`sorry this ${Angela.email} is already registered`)
       }
       let studentTwoEmail = Matt.email;
    //    console.log(studentTwoEmail);

       const sameEmailTwo = this.students.filter(student =>student.email ===studentTwoEmail);
       
           if(sameEmailTwo.length ===0){
               this.students.push(Matt);
               console.log(`Registering ${Matt.email} to the bootcamp ${webDevFundamentals.level}course`)
           }
           else{
               console.log(`sorry this ${Matt.email} is already registered`)
           };
       const studentThreeEmail =Jack.email;
       let sameEmailThree = this.students.filter(student=>student.email=== studentThreeEmail);
       if(sameEmailThree.length ===0){
           this.students.push(Jack);
           console.log(`Registering ${Jack.email} to the bootcamp ${Jack.level}course`)
       }
       else{
           console.log(` Sorry this ${Jack.email} is already registered`);
       }
       



    return this.students;   
    
   }
   
}

const webDevFundamentals = new Bootcamp("WebDevelopment Fundamentals", "Beginner")

const fullStack= new Bootcamp("Full stack web and mobile development","Advanced")

const Angela = new Student("Angela","angela123@yahoo.com","Full Stack web");
const Jack = new Student("Jack", "jack009@gmail.com", "Full stack mobile and Web");
const Matt = new Student("Matt", "matt006@hotmail.com", "Web Dev fundamentals");





