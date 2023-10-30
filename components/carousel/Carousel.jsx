import React from "react";
import Dummy from "../../public/books/dummy1.png"
import Author from "../../public/authors/1.png"
import Image from "next/image";

const Book = [
  { profile: Author, title: "Book Title", desc: "Book Description", picture: Dummy },
  { profile: Author, title: "Book Title", desc: "Book Description", picture: Dummy },
  { profile: Author, title: "Book Title", desc: "Book Description", picture: Dummy },
  { profile: Author, title: "Book Title", desc: "Book Description", picture: Dummy },
  { profile: Author, title: "Book Title", desc: "Book Description", picture: Dummy },
  { profile: Author, title: "Book Title", desc: "Book Description", picture: Dummy },
  { profile: Author, title: "Book Title", desc: "Book Description", picture: Dummy },
  { profile: Author, title: "Book Title", desc: "Book Description", picture: Dummy },
  { profile: Author, title: "Book Title", desc: "Book Description", picture: Dummy },
];


function Carousel() {
  return (
    <>
      <div className="p-5 md:p-10 lg:p-20">
        <div className="overflow-div">
          {Book.map((person, index) => {
            return (
              <div className="stylist " key={index}>
                <div className="back-grad">
                <Image
                  src={Dummy}
                  alt="hero picture"
                  width={330}
                  height={250}
                />
                <div className="stylist-link rounded-2xl">
                <Image
                  src={Author}
                  alt="hero picture"
                />
                  <div className="absolute bottom-8 p-4">
                  {" "}
                  {person.title}
                  <div>{person.desc}</div>
                </div>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Carousel;
