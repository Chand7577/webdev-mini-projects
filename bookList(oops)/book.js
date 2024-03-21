//Book class:respresents a book
class Book{
    constructor(title,author,isbn){
           this.author=author;
           this.title=title;
           this.isbn=isbn;
    }
}
//localStorage
// class Store{
     

    // static getBooks(){
        // let books;
        // if(localStorage.getItem('books')===null){
            // books=[];
        // }
        // else{
            // books=JSON.parse(localStorage.getItem('books'))
        // }
    //  return books;
    // }

    // static addBook(book){
        //  const books=Store.getBooks();
        //  books.push(book);
        //  localStorage.setItem('books',JSON.stringify(books));
    // }

    // static removeBook(isbn){
            // const books=Store.getBooks();
            // books.forEach((book,index)=>{
                    // if(book.isbn===isbn){
                        // books.splice(index,1)
                    // }
            // })
            // localStorage.setItem('books',JSON.stringify(books));
    // }

// }
//UI class:Handle UI tasks
class UI{
    static displayBooks()
    {
        const Storedbooks=[
            {
              title:'Book One',
              author:'Amrit',
              isbn:'3432423'
            },
            {
                title:'Book two',
                author:'Jane Doe',
                isbn:'234324'

            }
        ];
        const books=Storedbooks;
        books.forEach((book)=>
        {
            UI.addBookToList(book);
        })
        
    }
    static deleteBook(el)
    {
          if(el.classList.contains('delete'))
          {
            el.parentElement.parentElement.remove();
          }
    }
    static addBookToList(book)
    {
       const list=document.querySelector('#book-list');
       const row=document.createElement('tr');
       row.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-danger btn-sm delete">X</a></td>
       `;
       list.appendChild(row);  

    }

    static showAlert(message,className)
    {
          const div=document.createElement('div');
          div.className=`alert alert-${className}`;
          div.appendChild(document.createTextNode(message));
          const container=document.querySelector('.container');
          const form=document.querySelector('#book-form');
          container.insertBefore(div,form);
          setTimeout(()=>
          {
            document.querySelector('.alert').remove();
          },900)

    }
    static clearFields()
    {
        document.querySelector('#title').value="";
        document.querySelector('#author').value="";
        document.querySelector('#isbn').value="";
    }
    
}   




// Event:display Books
document.addEventListener('DOMContentLoaded',UI.displayBooks);
// Event:add a book
document.querySelector('#book-form').addEventListener('submit',(event)=>{
    event.preventDefault();
    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;
    const isbn=document.querySelector('#isbn').value;
    
    if(title===""||author===""||isbn==="")
    {
        UI.showAlert('please fill in all the fields','danger');
    }
    else
    {
       //Instatantiate book
       const book= new Book(title,author,isbn);
       UI.addBookToList(book);
       UI.showAlert('Booked Added','success');
       UI.clearFields();
    }
    
})
// Event:Remove a book
document.querySelector("#book-list").addEventListener("click",(e)=>{
    UI.deleteBook(e.target);
    UI.showAlert('Book Removed','success');
})