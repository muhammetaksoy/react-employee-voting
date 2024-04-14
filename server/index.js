const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Employee {
    id: ID!
    firstName: String
    lastName: String
    position: String
    votes: Int
    imageUrl: String
    email: String
    address: String
    phone: String
  }

  type Query {
    employees(order: String): [Employee]
    employee(id: ID!): Employee
  }

  type Mutation {
    addVote(id: ID!): Employee
  }
`;

const employees = [
  { id: '1', firstName: 'Muhammet', lastName: 'Aksoy', position: 'Frontend Developer', votes: 0, imageUrl: 'https://userflow.com/images/product/happy-user-with-laptop.jpg', email: 'muhammet@hotmail.com', address: 'gsdgsdg sokak ', phone: '05232353255' },
  { id: '2', firstName: 'Zeynep', lastName: 'Aksoy', position: 'Backend Developer', votes: 0, imageUrl: 'https://userflow.com/images/product/happy-user-with-laptop.jpg', email: 'muhammet@hotmail.com', address: 'gsdgsdg sokak ', phone: '05232353255' },
  { id: '3', firstName: 'Selen', lastName: 'Mete', position: 'Human Resources Specialist', votes: 0, imageUrl: 'https://userflow.com/images/product/happy-user-with-laptop.jpg', email: 'muhammet@hotmail.com', address: 'gsdgsdg sokak ', phone: '05232353255' },
  { id: '4', firstName: 'Ahmet', lastName: 'Gündüz', position: 'Data Engineer', votes: 0, imageUrl: 'https://userflow.com/images/product/happy-user-with-laptop.jpg', email: 'muhammet@hotmail.com', address: 'gsdgsdg sokak ', phone: '05232353255' },
];

const resolvers = {
  Query: {
    employees: (_, { order }) => {
      if (order === 'desc') {
        return [...employees].sort((a, b) => b.votes - a.votes);
      }
      return employees;
    },
    employee: (_, { id }) => {
      const employee = employees.find(emp => emp.id === id);
      if (!employee) {
        throw new Error(`No employee found with ID ${id}`);
      }
      return employee;
    },
  }, 
  Mutation: {
    addVote: (_, { id }) => {
      const employee = employees.find(emp => emp.id === id);
      if (employee) {
        employee.votes += 1;
        return employee;
      }
      throw new Error('Employee not found');
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
