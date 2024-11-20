        const quizData = [
            // C Language Questions
		
            { question: "1. What is the correct file extension for C files?", options: ["c", "cpp", "java", "py"], answer: "c" },
            { question: "2. Which of the following is a loop structure in C?", options: ["for", "loop", "iterate", "repeat"], answer: "for" },
            { question: "3. What function is used to print to the console in C?", options: ["printf()", "print()", "write()", "echo()"], answer: "printf()" },
            { question: "4. Which operator is used for comments in C?", options: ["//", "#", "/*", "--"], answer: "//" },
            { question: "5. What is the size of an int in C?", options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], answer: "4 bytes" },
            { question: "6. What is the correct syntax for a conditional statement in C?", options: ["if(condition) {}", "if condition {}", "if:condition {}", "if{condition}"], answer: "if(condition) {}" },
            { question: "7. Which of the following is not a valid data type in C?", options: ["int"loat", "string", "bool"], answer: "string" },
            { question: "8. Which function is used to allocate memory in C?", options: ["malloc()", "calloc()", "free()", "alloc()"], answer: "malloc()" },
            { question: "9. What does '&&' represent in C?", options: ["OR", "AND", "NOT", "XOR"], answer: "AND" },
            { question: "10. What keyword is used to define a constant in C?", options: ["const", "define", "constant", "final"], answer: "const" },

            // Python Language Questions
		
            { question: "11. Which of the following is the correct syntax to output 'Hello World' in Python?", options: ["print('Hello World')", "echo('Hello World')", "print('Hello World')", "output('Hello World')"], answer: "print('Hello World')" },
            { question: "12. What is the correct way to define a function in Python?", options: ["function myFunction()", "def myFunction():", "create myFunction()", "myFunction():"], answer: "def myFunction():" },
            { question: "13. Which keyword is used to create a class in Python?", options: ["class", "def", "create", "new"], answer: "class" },
            { question: "14. What does the 'len()' function do in Python?", options: ["Returns length of an object", "Converts to string", "Returns index", "Creates a list"], answer: "Returns length of an object" },
            { question: "15. Which of the following is not a valid variable name in Python?", options: ["myVar", "2ndVar", "_myVar", "my_var"], answer: "2ndVar" },
            { question: "16. How do you start a comment in Python?", options: ["//", "#", "/*", "--"], answer: "#" },
            { question: "17. Which method is used to remove whitespace from the beginning and end of a string?", options: ["strip()", "trim()", "remove()", "clear()"], answer: "strip()" },
            { question: "18. What is the output of 10 // 3 in Python?", options: ["3", "3.33", "4", "None"], answer: "3" },
            { question: "19. How do you create a list in Python?", options: ["[]", "{}", "()", "<>"], answer: "[]" },
            { question: "20. Which of the following is used for error handling in Python?", options: ["try/except", "if/else", "catch", "handle"], answer: "try/except" },

            // Java Language Questions
		
            { question: "21. Which of the following is a valid declaration of a char?", options: ["char c = 'a';", "char c = \"a\";", "char c = a;", "char c = 'ab';"], answer: "char c = 'a';" },
            { question: "22. Which keyword is used to inherit a class in Java?", options: ["extends", "inherits", "implements", "uses"], answer: "extends" },
            { question: "23. What is the default value of a boolean variable in Java?", options: ["true", "false", "0", "1"], answer: "false" },
            { question: "24. Which method is used to start a thread in Java?", options: ["start()", "run()", "begin()", "execute()"], answer: "start()" },
            { question: "25. Which of the following is not a Java keyword?", options: ["static", "String", "void", "public"], answer: "String" },
            { question: "26. What is the correct syntax to create an object in Java?", options: ["ClassName obj = new ClassName();", "obj ClassName = new();", "ClassName obj = ClassName();", "new ClassName obj;"], answer: "ClassName obj = new ClassName();" },
            { question: "27. Which of the following is used to handle exceptions in Java?", options: ["try/catch", "if/else", "throw", "catch/try"], answer: "try/catch" },
            { question: "28. What is the main method signature in Java?", options: ["public static void main(String args[])", "static void main(String args)", "public void main(String)", "void main(String[] args)"], answer: "public static void main(String args[])" },
            { question: "29. Which operator is used to compare two values in Java?", options: ["==", "===", "=", "!="], answer: "==" },
            { question: "30. What is an interface in Java?", options: ["A class", "A way to achieve abstraction", "A type of method", "None"], answer: "A way to achieve abstraction" },

            // C++ Language Questions
		
            { question: "31. What is the correct syntax for a comment in C++?", options: ["// comment", "# comment", "/* comment */", "comment //"], answer: "// comment" },
            { question: "32. Which of the following is the correct way to create a class in C++?", options: ["class MyClass {}", "new MyClass {}", "create class MyClass {}", "MyClass class {}"], answer: "class MyClass {}" },
            { question: "33. Which of the following is used for error handling in C++?", options: ["try/catch", "throw", "assert", "catch/throw"], answer: "try/catch" },
            { question: "34. What is the purpose of a constructor in C++?", options: ["To create an object", "To initialize an object", "To destruct an object", "To define a class"], answer: "To initialize an object" },
            { question: "35. What does the 'delete' operator do in C++?", options: ["Removes an object", "Frees memory", "Deletes a file", "Both 1 and 2"], answer: "Both 1 and 2" },
            { question: "36. What is inheritance in C++?", options: ["A way to reuse code", "Creating a class from another class", "Both 1 and 2", "None"], answer: "Both 1 and 2" },
        ];

        let currentQuestionIndex = 0;
        let score = 0;

        function loadQuestion() {
            const quizContainer = document.getElementById("quiz");
            const questionData = quizData[currentQuestionIndex];
            quizContainer.innerHTML = `
                <h2>${questionData.question}</h2>
                ${questionData.options.map(option => `
                    <div class="option" onclick="checkAnswer('${option}')">${option}</div>
                `).join('')}
            `;
        }

        function checkAnswer(selected) {
            const questionData = quizData[currentQuestionIndex];
            const options = document.querySelectorAll('.option');
            options.forEach(option => {
                option.classList.add(option.innerText === questionData.answer ? 'correct' : 'wrong');
                option.onclick = null;
            });
            if (selected === questionData.answer) score++;
            document.getElementById('nextBtn').style.display = 'block';
        }

        document.getElementById('nextBtn').onclick = function () {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
                this.style.display = 'none';
            } else showScore();
        };

        document.getElementById('skipBtn').onclick = function () {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) loadQuestion();
            else showScore();
        };

        function showScore() {
            document.getElementById('scoreContainer').innerHTML = `Your Score: ${score} out of ${quizData.length}`;
            document.getElementById('quiz').style.display = 'none';
            document.getElementById('nextBtn').style.display = 'none';
            document.getElementById('skipBtn').style.display = 'none';
        }

        loadQuestion();
