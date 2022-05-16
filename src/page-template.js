// Used module 9 for template

const generateManager = function(Manager) {

    return`
    <div class="card">
         <div>
         <h2>${Manager.name}</h2>
         <h3>${Manager.role}</h3>
         </div>

         <div>
         <p>ID:${Manager.id}</p>
         <p>Email:<a href"email:${Manager.email}"${Manager.email}</a></p>
         <p>Office Number:${Manager.officeNumber}</p>
         </div>
    </div>
    `;

  };

  const generateEngineer = function(Engineer) {

    return`
    <div class="card">
         <div>
         <h2>${Engineer.name}</h2>
         <h3>${Engineer.role}</h3>
         </div>

         <div>
         <p>ID:${Engineer.id}</p>
         <p>Email:<a href"email:${Engineer.email}"${Engineer.email}</a></p>
         <p>Github Username:<a href="https://github.com/${Engineer.github}">${Engineer.github}</a></p>
         </div>
    </div>
    `;

  };

  const generateIntern = function(Intern) {

    return`
    <div class="card">
         <div>
         <h2>${Intern.name}</h2>
         <h3>${Intern.role}</h3>
         </div>

         <div>
         <p>ID:${Intern.id}</p>
         <p>Email:<a href"email:${Intern.email}"${Intern.email}</a></p>
         <p>School:${intern.school}</p>
         </div>
    </div>
    `;

  };

  const generateEmployee = function(Employee) {

     return`
     <div class="card">
          <div>
          <h2>${Employee.name}</h2>
          <h3>${Employee.role}</h3>
          </div>
 
          <div>
          <p>ID:${Employee.id}</p>
          <p>Email:<a href"email:${Employee.email}"${Employee.email}</a></p>
          </div>
     </div>
     `;
 
   };

   

   const genPage = function (empCards) {

     return`

   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
</head>
<body>
    <header>
       <div>
           <h1>Our Team</h1>
       </div>
    </header>  


      <main>
           <div class="container"
                <div class ="row justify-content-center">
                ${empCards}
                </div
           </div>
      </main>


</body>
</html>


`;
};

module.exports = pageTemplate;