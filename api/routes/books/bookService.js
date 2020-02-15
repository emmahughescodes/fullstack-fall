'use strict'

const { Book } = require('./bookModel')

// const BOOKS = [
//   {
//       id: "emma1",
//       serviceName: "Yoga",
//       location: "Toronto, GTA",
//       description: "we have yoga for your corporate needs",
//       participantCount: 10,
//       activities: [
//       {
//           activityName: "tech yoga",
//           activityDescription: "come play yoga",
//           cost: 567,
//       }
//       ]
//   },
//   {
//       id: "emma2",
//       serviceName: "Personal Calligraphy",
//       location: "Burlington, GTA",
//       description: "set up a calligraphy station at your next event",
//       participantCount: 15,
//       activities: [
//       {
//           activityName: "calligraphy 101",
//           activityDescription: "i sit and write for you",
//           cost: 123,
//       }
//       ]
//   },
//   {
//       id: "emma3",
//       serviceName: "Escape Room",
//       location: "Mississauga, Oakville",
//       description: "Escape from everyone",
//       participantCount: 5,
//       activities: [
//       {
//           activityName: "circus allegria",
//           activityDescription: "try to escape from the elephants",
//           cost: 234,
//       }
//       ]
//   }
// ]

// Helper function to list each of the books in the database
exports.listBooks = async () => {
  try {
    const books = await Book.find();
    return books;
  } catch (ex) {
    throw new Error(ex.message, "yup");
  }
};

// Create a new book that will be added to the database
exports.createBook = async (bookData) => {
  try {
      const book = await new Book(bookData);
      const newBook = await book.save();
      return newBook;
  } catch (ex) {
      throw new Error(ex.message);
  }
};
