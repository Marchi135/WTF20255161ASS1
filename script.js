const students = ["Marvellous", "Fabeola", "febby", "Peter", "Sam"];

document.getElementById("studentForm").addEventListener("submit", function(e) {
      e.preventDefault();

      
      const inputName = document.getElementById("studentName").value.trim();
      const result = document.getElementById("result");
      
// Step 2: Use find to check if student exists
      const foundStudent = students.find(student => student.toLowerCase() === inputName.toLowerCase());

      if (foundStudent) {
        // Step 3: Use findIndex to get position
        const index = students.findIndex(student => student.toLowerCase() === inputName.toLowerCase());
        // Step 4: Display message
        result.textContent = `Student ${foundStudent} found at position ${index}.`;
      } else {
        // Step 5: Delay error message by 2 seconds
        setTimeout(() => {
          result.textContent = "Student not found.";
        }, 2000);
      }
    }); 
