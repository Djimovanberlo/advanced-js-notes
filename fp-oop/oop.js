// If you need to create many similar objects, you can create a factory function:

// FACTORY FUNCTIONS
const factoryFun = name => {
  return {
    name,
    program: () => console.log(1010110),
  }
}

const Mariana = factoryFun('Mariana')
const Sobhi = factoryFun('Sobhi')

// This is great, but creates the program method twice. This is inefficient use of memory
// Instead, we want to use prototypal inheritence!

const progamMethod = {
  program: () => console.log(1010110),
}

const betterFactory = name => {
  let programmerObj = Object.create(progamMethod) // create a new prototype object
  programmerObj.name = name
  return programmerObj
}

// CONSTRUCTOR FUNCTIONS
function ProjectManager(name, city) {
  this.name = name
  this.city = city
  this.manage = () => console.log('make ICL content')
}

const Dirk = new ProjectManager('Dirk', 'Zaandam')
const Celine = new ProjectManager('Celine', 'Not Zaandam')
// write constructor functions PascalCase
